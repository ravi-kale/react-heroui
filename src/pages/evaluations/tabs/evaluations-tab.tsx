import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import DataTable from "@/components/table/datatable";
import { evaluations } from "@/data/evaluations";
import { Evaluation } from "@/types/evaluation";
import { useState } from "react";

interface EvaluationsTabProps {
    onEvaluationSelect: (evaluation: Evaluation) => void;
    filter?: (evaluation: Evaluation) => boolean;
}

export default function EvaluationsTab({ onEvaluationSelect, filter }: EvaluationsTabProps) {
    const [filterValue, setFilterValue] = useState("");
    
    const filteredEvaluations = filter ? evaluations.filter(filter) : evaluations;

    const columns = [
        {
            key: "name",
            label: "EVALUATION",
            render: (evaluation: Evaluation) => (
                <div className="flex items-center gap-4">
                    <Icon 
                        icon={
                            evaluation.type === 'benchmark' 
                                ? "mdi:speedometer" 
                                : "mdi:test-tube"
                        } 
                        className="w-5 h-5 text-gray-500" 
                    />
                    <div>
                        <p className="font-medium">{evaluation.name}</p>
                        <p className="text-sm text-gray-500">{evaluation.type}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "model",
            label: "MODEL",
            render: (evaluation: Evaluation) => (
                <div className="flex items-center gap-2">
                    <Icon icon="mdi:cube-outline" className="w-5 h-5 text-gray-500" />
                    <span>{evaluation.model}</span>
                </div>
            ),
        },
        {
            key: "status",
            label: "STATUS",
            render: (evaluation: Evaluation) => (
                <div className="flex items-center gap-2">
                    <Icon 
                        icon={
                            evaluation.status === 'completed' 
                                ? "mdi:check-circle" 
                                : evaluation.status === 'running'
                                    ? "mdi:progress-clock"
                                    : "mdi:alert-circle"
                        } 
                        className={`w-5 h-5 ${
                            evaluation.status === 'completed' 
                                ? "text-green-500" 
                                : evaluation.status === 'running'
                                    ? "text-blue-500"
                                    : "text-red-500"
                        }`} 
                    />
                    <span className={
                        evaluation.status === 'completed' 
                            ? "text-green-600" 
                            : evaluation.status === 'running'
                                ? "text-blue-600"
                                : "text-red-600"
                    }>
                        {evaluation.status}
                    </span>
                </div>
            ),
        },
        {
            key: "metrics",
            label: "METRICS",
            render: (evaluation: Evaluation) => (
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:percent" className="w-4 h-4" />
                        <span>{evaluation.metrics.accuracy}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                        <span>{evaluation.metrics.latency}ms</span>
                    </div>
                </div>
            ),
        },
        {
            key: "actions",
            label: "ACTIONS",
            render: (evaluation: Evaluation) => (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => onEvaluationSelect(evaluation)}
                    >
                        <Icon icon="mdi:eye" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => console.log('Export results', evaluation.id)}
                    >
                        <Icon icon="mdi:export" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        color="danger"
                        onClick={() => console.log('Delete evaluation', evaluation.id)}
                    >
                        <Icon icon="mdi:trash" className="w-4 h-4" />
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={filteredEvaluations}
                filterValue={filterValue}
                onFilterChange={setFilterValue}
                filterPlaceholder="Search evaluations..."
            />
        </div>
    );
} 