class SecureAuth {
    private $pdo;
    private $pepper = 'application-specific-pepper';
    
    public function authenticate($username, $password) {
        // Validación de entrada
        if (!$this->validateInput($username) || !$this->validateInput($password)) {
            $this->logSuspiciousActivity($username, $_SERVER['REMOTE_ADDR']);
            return false;
        }
        
        // Consulta parametrizada
        $stmt = $this->pdo->prepare(
            "SELECT id, username, password_hash, salt, failed_attempts, locked_until 
             FROM users 
             WHERE username = ? AND (locked_until IS NULL OR locked_until < NOW())"
        );
        $stmt->execute([$username]);
        $user = $stmt->fetch();
        
        if (!$user) {
            $this->logFailedAttempt($username, $_SERVER['REMOTE_ADDR']);
            return false;
        }
        
        // Verificación de contraseña con rate limiting
        if ($user['failed_attempts'] >= 5) {
            $this->lockAccount($user['id']);
            return false;
        }
        
        if (password_verify($password . $user['salt'] . $this->pepper, $user['password_hash'])) {
            $this->resetFailedAttempts($user['id']);
            $this->logSuccessfulLogin($user['id'], $_SERVER['REMOTE_ADDR']);
            return $user;
        } else {
            $this->incrementFailedAttempts($user['id']);
            return false;
        }
    }
    
    private function validateInput($input) {
        return preg_match('/^[a-zA-Z0-9_-]{1,50}$/', $input);
    }
}