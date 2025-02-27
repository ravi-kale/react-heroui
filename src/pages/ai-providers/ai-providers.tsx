"use client";

import React, { useState } from "react";
import { Button, Tab, Tabs } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import APIKeyModal from "./api-key-modal";
import ProvidersTab from './tabs/providers-tab';
import { Provider } from "@/types/provider";

import { Provider as SettingsProvider } from "@/types/settings/provider";
import { providers } from "@/data/settings/providers";

export default function AIProviders() {
  const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Provider Management</h1>
      </div>
      
      <Tabs 
        aria-label="Provider categories" 
        className="mb-6"
        defaultSelectedKey="all"
      >
        <Tab key="all" title="All Providers">
          <ProvidersTab onProviderSelect={setSelectedProvider} />
        </Tab>
        <Tab key="active" title="Active">
          <ProvidersTab 
            onProviderSelect={setSelectedProvider}
            filter={(provider) => provider.status === 'active'} 
          />
        </Tab>
        <Tab key="inactive" title="Inactive">
          <ProvidersTab 
            onProviderSelect={setSelectedProvider}
            filter={(provider) => provider.status === 'inactive'} 
          />
        </Tab>
      </Tabs>
    </div>
  );
}
