import React, { useState } from "react";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@heroui/react";
import { Icon } from "@iconify/react";

interface TestCaseProps {
  testCase?: {
    id: string;
    label: string;
    chatHistory: string;
    target: string;
  };
  onClose: () => void;
}

export default function TestCase({ testCase, onClose }: TestCaseProps) {
  const [formData, setFormData] = useState({
    label: testCase?.label || "",
    chatHistory: testCase?.chatHistory || "",
    target: testCase?.target || "",
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle save logic here
    onClose();
  };

  return (
      <div></div>
  )
}
