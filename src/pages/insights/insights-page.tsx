import { Tab, Tabs } from "@heroui/react";
import { useState } from "react";
import InsightsTab from './tabs/insights-tab';
import DocumentViewerTab from '../documents/tabs/document-viewer-tab';
import { Insight } from "@/types/core/insights";
import { Document } from "@/types/documents/document";

function castInsightToDocument(insight: Insight | null): Document | null {
  if (!insight) return null;
  return {
    id: insight.id,
    filename: insight.name,
    folder: insight.folder || "",
    uploadedDate: new Date().toISOString(),
    uploadedBy: "system",
    status: "active",
    content: insight.content
  };
}

export default function InsightsPage() {
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);
  const selectedDocument = castInsightToDocument(selectedInsight);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Insights</h1>
      </div>
      
      <Tabs 
        aria-label="Insight categories" 
        className="mb-6"
        defaultSelectedKey="all"
      >
        <Tab key="all" title="All Insights">
          <InsightsTab onInsightSelect={setSelectedInsight} />
        </Tab>
        <Tab key="docs" title="Documentation Insights">
          <InsightsTab 
            onInsightSelect={setSelectedInsight}
            filter={(insight) => insight.type === 'documentation'} 
          />
        </Tab>
        <Tab key="code" title="Code Insights">
          <InsightsTab 
            onInsightSelect={setSelectedInsight}
            filter={(insight) => insight.type === 'code'} 
          />
        </Tab>
        {selectedDocument && (
          <Tab key="viewer" title="Viewer">
            <DocumentViewerTab document={selectedDocument} />
          </Tab>
        )}
      </Tabs>
    </div>
  );
}