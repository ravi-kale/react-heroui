"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
  Avatar,
  User,
} from "@heroui/react";
import {Icon} from "@iconify/react";

import { users } from "@/data/ui/user-dropdown";

export default function UserDropdown() {
  return (
    <Dropdown showArrow placement="bottom-start">
      <DropdownTrigger>
        <Button disableRipple isIconOnly className="-mr-1" radius="full" variant="light">
          <Avatar
            className="h-6 w-6 cursor-pointer"
            name={users[0].name}
            src={users[0].avatar}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Custom item styles" disabledKeys={["profile"]}>
        <DropdownSection showDivider aria-label="Profile & Actions">
          <DropdownItem key="profile" isReadOnly className="h-14 gap-2 opacity-100" textValue="Signed in as">
            <User
              avatarProps={{
                size: "sm",
                imgProps: {className: "transition-none"},
                src: users[0].avatar,
              }}
              classNames={{
                name: "text-default-600",
                description: "text-default-500",
              }}
              description={users[0].role}
              name={users[0].name}
            />
          </DropdownItem>
          <DropdownItem key="dashboard">Dashboard</DropdownItem>
          <DropdownItem key="settings">Settings</DropdownItem>
          <DropdownItem key="new_project" endContent={<Icon className="text-large" icon="lucide:plus" />}>
            New Project
          </DropdownItem>
        </DropdownSection>

        <DropdownSection showDivider aria-label="Preferences">
          <DropdownItem key="quick_search" shortcut="⌘K">
            Quick search
          </DropdownItem>
          <DropdownItem
            key="theme"
            isReadOnly
            className="cursor-default"
            endContent={
              <select
                className="z-10 w-16 rounded-md border-small border-default-300 bg-transparent py-0.5 text-tiny text-default-500 outline-none group-data-[hover=true]:border-default-500 dark:border-default-200"
                id="theme"
                name="theme"
              >
                <option>System</option>
                <option>Dark</option>
                <option>Light</option>
              </select>
            }
          >
            Theme
          </DropdownItem>
        </DropdownSection>

        <DropdownSection aria-label="Help & Feedback">
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout">Log Out</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}