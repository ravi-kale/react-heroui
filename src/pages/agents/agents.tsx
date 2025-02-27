
"use client";

import React, { useState } from "react";
import { Button, Switch } from "@heroui/react";
import { Icon } from "@iconify/react";
import DataTable from "@/components/table/datatable";
import { agents } from "@/data/agents";
import { Agent } from "@/types/agents";

import { useNavigate } from "react-router-dom";

export default function Agents() {
  const navigate = useNavigate();
  const [filterValue, setFilterValue] = useState("");

  const columns = [
    {
      key: "name",
      label: "NAME",
      render: (agent: Agent) => (
        <div className="flex items-center gap-4">
          <Icon icon="mdi:robot" className="w-5 h-5" />
          <div>
            <p className="font-medium">{agent.name}</p>
            <p className="text-sm text-gray-500">{agent.type}</p>
          </div>
        </div>
      ),
    },
    {
      key: "status",
      label: "STATUS",
      render: (agent: Agent) => (
        <div className="flex items-center gap-2">
          <Switch
            defaultSelected={agent.status === 'active'}
            size="sm"
            color={agent.status === 'active' ? "success" : "danger"}
          />
          <span className={agent.status === 'active' ? "text-green-600" : "text-red-600"}>
            {agent.status}
          </span>
        </div>
      ),
    },
    { key: "description", label: "DESCRIPTION" },
    { 
      key: "performance",
      label: "PERFORMANCE",
      render: (agent: Agent) => (
        <div className="flex items-center gap-2">
          <span>{agent.performance}%</span>
          <div className="w-24 h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${agent.performance}%` }}
            />
          </div>
        </div>
      ),
    },
    {
      key: "actions",
      label: "ACTIONS",
      render: (agent: Agent) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="light"
            onClick={() => console.log('Edit', agent.id)}
          >
            <Icon icon="mdi:pencil" className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="light"
            color="danger"
            onClick={() => console.log('Delete', agent.id)}
          >
            <Icon icon="mdi:trash" className="w-4 h-4" />
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">AI Agents Management</h1>
        <Button
          color="primary"
          startContent={<Icon icon="mdi:plus" />}
          onClick={() => console.log('Add new agent')}
        >
          Add New Agent
        </Button>
      </div>
      
      <DataTable
        columns={columns}
        data={agents}
        filterValue={filterValue}
        onFilterChange={setFilterValue}
        filterPlaceholder="Search agents..."
      />
    </div>
  );
}