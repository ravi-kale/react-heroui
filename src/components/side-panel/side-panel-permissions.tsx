import { useState } from "react";
import { Accordion, AccordionItem, Checkbox } from "@heroui/react";
import { ZenUser } from "@/types/zen_user";
import { sections } from "@/data/permissions/sections";

interface SidePanelPermissionsProps {
  user?: ZenUser;
  onSave: (user: ZenUser) => void;
  onCancel: () => void;
}

export default function SidePanelPermissions({
  user,
  onSave,
  onCancel,
}: SidePanelPermissionsProps) {
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const handleSave = () => {
    onSave({
      ...(user || {
        id: String(Date.now()),
        firstName: "",
        lastName: "",
        email: "",
      }),
      // permissions: selectedPermissions,
    });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-auto px-6 py-4">
        <Accordion>
          {sections.map((section) => (
            <AccordionItem key={section.title} title={section.title}>
              <div className="flex flex-col gap-2">
                {section.permissions.map((permission) => (
                  <Checkbox
                    key={permission}
                    isSelected={selectedPermissions.includes(permission)}
                    onValueChange={(isSelected) => {
                      setSelectedPermissions((prev) =>
                        isSelected
                          ? [...prev, permission]
                          : prev.filter((p) => p !== permission),
                      );
                    }}
                  >
                    {permission}
                  </Checkbox>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
