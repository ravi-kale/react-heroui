
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { insightsHistory } from "@/data/insights_history";
import { Insight } from "@/types/core/insights";

interface InsightsTabProps {
  onInsightSelect: (insight: Insight) => void;
}

export default function InsightsTab({ onInsightSelect }: InsightsTabProps) {
  return (
    <div></div>
  )
}
