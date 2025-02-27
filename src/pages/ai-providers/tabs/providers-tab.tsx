import { Icon } from "@iconify/react";
import { Button, Switch } from "@heroui/react";
import DataTable from "@/components/table/datatable";
import { providers } from "@/data/providers";
import { Provider } from "@/types/provider";
import { useState } from "react";

interface ProvidersTabProps {
    onProviderSelect: (provider: Provider) => void;
    filter?: (provider: Provider) => boolean;
}

export default function ProvidersTab({ onProviderSelect, filter }: ProvidersTabProps) {
    const [filterValue, setFilterValue] = useState("");
    
    const filteredProviders = filter ? providers.filter(filter) : providers;

    const columns = [
        {
            key: "name",
            label: "PROVIDER",
            render: (provider: Provider) => (
                <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {provider.logo ? (
                            <img src={provider.logo} alt={provider.name} className="w-8 h-8 rounded-full" />
                        ) : (
                            <Icon icon="mdi:robot" className="w-5 h-5 text-gray-500" />
                        )}
                    </div>
                    <div>
                        <p className="font-medium">{provider.name}</p>
                        <p className="text-sm text-gray-500">{provider.type}</p>
                    </div>
                </div>
            ),
        },
        {
            key: "models",
            label: "MODELS",
            render: (provider: Provider) => (
                <div className="flex items-center gap-2">
                    <Icon icon="mdi:cube-outline" className="w-5 h-5 text-gray-500" />
                    <span>{provider.models.length} models</span>
                </div>
            ),
        },
        {
            key: "status",
            label: "STATUS",
            render: (provider: Provider) => (
                <div className="flex items-center gap-2">
                    <Switch
                        defaultSelected={provider.status === 'active'}
                        size="sm"
                        color={provider.status === 'active' ? "success" : "danger"}
                        onChange={() => console.log('Toggle provider status', provider.id)}
                    />
                    <span className={
                        provider.status === 'active' 
                            ? "text-green-600" 
                            : "text-red-600"
                    }>
                        {provider.status}
                    </span>
                </div>
            ),
        },
        {
            key: "usage",
            label: "USAGE",
            render: (provider: Provider) => (
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:chart-line" className="w-4 h-4" />
                        <span>{provider.usage.requests}/mo</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Icon icon="mdi:currency-usd" className="w-4 h-4" />
                        <span>${provider.usage.cost}</span>
                    </div>
                </div>
            ),
        },
        {
            key: "actions",
            label: "ACTIONS",
            render: (provider: Provider) => (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => onProviderSelect(provider)}
                    >
                        <Icon icon="mdi:pencil" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        onClick={() => console.log('Configure API', provider.id)}
                    >
                        <Icon icon="mdi:key" className="w-4 h-4" />
                    </Button>
                    <Button
                        size="sm"
                        variant="light"
                        color="danger"
                        onClick={() => console.log('Delete provider', provider.id)}
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
                data={filteredProviders}
                filterValue={filterValue}
                onFilterChange={setFilterValue}
                filterPlaceholder="Search providers..."
            />
        </div>
    );
} 