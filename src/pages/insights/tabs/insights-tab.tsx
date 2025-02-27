import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";
import DataTable from "@/components/table/datatable";
import { insightsHistory } from "@/data/insights_history";
import { Insight } from "@/types/core/insights";
import { useState } from "react";

interface InsightsTabProps {
    onInsightSelect: (insight: Insight) => void;
    filter?: (insight: Insight) => boolean;
}

export default function InsightsTab({ onInsightSelect, filter }: InsightsTabProps) {
    const [filterValue, setFilterValue] = useState("");
    
    const filteredInsights = filter ? insightsHistory.filter(filter) : insightsHistory;

    const columns = [
        {
            key: "name",
            label: "NAME",
            render: (insight: Insight) => (
                <div className="flex items-center gap-4">
                    <Icon 
                        icon={insight.type === 'code' ? "mdi:code-braces" : "mdi:file-document-outline"} 
                        className="w-5 h-5 text-gray-500"
                    />
                    <div>
                        <p className="font-medium">{insight.name}</p>
                        <p className="text-sm text-gray-500">{insight.type}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "createdAt",
            label: "CREATED",
            render: (insight: Insight) => (
                <span className="text-gray-600">{insight.createdAt}</span>
            ),
        },
        {
            key: "status",
            label: "STATUS",
            render: (insight: Insight) => (
                <div className="flex items-center gap-2">
                    <span className={
                        insight.status === 'active' 
                            ? "text-green-600" 
                            : "text-gray-600"
                    }>
                        {insight.status}
                    </span>
                </div>
            ),
        },
        {
            key: "metrics",
            label: "METRICS",
            render: (insight: Insight) => (
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:lightbulb" className="w-4 h-4 text-yellow-500" />
                        <span>{insight.score || 0}%</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:clock-outline" className="w-4 h-4" />
                        <span>{insight.processingTime || '0s'}</span>
                    </div>
                </div>
            ),
        },
        {
            key: "actions",
            label: "ACTIONS",
            render: (insight: Insight) => (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => onInsightSelect(insight)}
                    >
                        <Icon icon="mdi:eye" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => console.log('Export insight', insight.id)}
                    >
                        <Icon icon="mdi:export" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        color="danger"
                        onClick={() => console.log('Delete insight', insight.id)}
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
                data={filteredInsights}
                filterValue={filterValue}
                onFilterChange={setFilterValue}
                filterPlaceholder="Search insights..."
            />
        </div>
    );
}