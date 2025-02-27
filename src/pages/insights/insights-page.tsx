
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
  return (
    <div></div>
  )
}
