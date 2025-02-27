
import { Icon } from "@iconify/react";
import { Button, Select, SelectItem } from "@heroui/react";
import DataTable from "@/components/table/datatable";
import { experimentResults, scoreMetrics, experimentMetrics } from "@/data/evals/experiments";
import { ExperimentResult } from "@/types/evals/experiment-details";
import React from "react";

interface ExperimentDetailsProps {
  id: string;
  onBack: () => void;
}

export default function ExperimentDetails({
  id,
  onBack,
}: ExperimentDetailsProps) {
return (
      <div></div>
  )
}
