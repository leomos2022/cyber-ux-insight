import React from "react";
import Login from "../components/Login";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import StudyObject from "@/components/StudyObject";
import SQLSimulation from "@/components/SQLSimulation";
import ResultsAnalysis from "@/components/ResultsAnalysis";
import MitigationTable from "@/components/MitigationTable";
import FinalReport from "@/components/FinalReport";
import PersonalReflection from "@/components/PersonalReflection";
import Credits from "@/components/Credits";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Introduction />
      <StudyObject />
      <SQLSimulation />
      <ResultsAnalysis />
      <MitigationTable />
      <FinalReport />
      <PersonalReflection />
      <Credits />
    </div>
  );
};

export default Index;
