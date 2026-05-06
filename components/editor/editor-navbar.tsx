"use client";

import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

interface EditorNavbarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function EditorNavbar({ isOpen, onToggle }: EditorNavbarProps) {
  return (
    <header className="h-12 shrink-0 flex items-center justify-between px-3 bg-bg-surface border-b border-border-default">
      {/* Left section */}
      <div className="flex items-center">
        <Button variant="ghost" size="icon-sm" onClick={onToggle}>
          {isOpen ? (
            <PanelLeftClose className="size-5" />
          ) : (
            <PanelLeftOpen className="size-5" />
          )}
        </Button>
      </div>

      {/* Center section */}
      <div className="flex flex-1 items-center justify-center" />

      {/* Right section */}
      <div className="flex items-center">
        <UserButton />
      </div>
    </header>
  );
}

