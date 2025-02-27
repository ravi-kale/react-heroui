import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import EvaluationsTab from './tabs/evaluations-tab';
import { Evaluation } from "@/types/evaluation";

export default function EvaluationsPage() {
  const [selectedEvaluation, setSelectedEvaluation] = useState<Evaluation | null>(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Model Evaluations</h1>
      </div>
      
      <Tabs 
        aria-label="Evaluation categories" 
        className="mb-6"
        defaultSelectedKey="all"
      >
        <Tab key="all" title="All Evaluations">
          <EvaluationsTab onEvaluationSelect={setSelectedEvaluation} />
        </Tab>
        <Tab key="completed" title="Completed">
          <EvaluationsTab 
            onEvaluationSelect={setSelectedEvaluation}
            filter={(evaluation) => evaluation.status === 'completed'} 
          />
        </Tab>
        <Tab key="running" title="Running">
          <EvaluationsTab 
            onEvaluationSelect={setSelectedEvaluation}
            filter={(evaluation) => evaluation.status === 'running'} 
          />
        </Tab>
        <Tab key="failed" title="Failed">
          <EvaluationsTab 
            onEvaluationSelect={setSelectedEvaluation}
            filter={(evaluation) => evaluation.status === 'failed'} 
          />
        </Tab>
      </Tabs>
    </div>
  );
}
