"use client";

import { X, Plus, FolderOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 supports-backdrop-filter:backdrop-blur-xs"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed top-12 left-0 z-50 flex h-[calc(100vh-3rem)] w-72 flex-col",
          "border-r border-surface-border bg-surface",
          "transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
          <h2 className="text-sm font-medium text-copy-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="size-4" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex flex-1 flex-col overflow-hidden px-3 pt-3">
          <Tabs defaultValue="my-projects" className="flex flex-1 flex-col">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1 gap-1.5">
                <FolderOpen className="size-3.5" />
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1 gap-1.5">
                <Users className="size-3.5" />
                Shared
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="my-projects"
              className="flex flex-1 items-center justify-center"
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <FolderOpen className="size-8 text-copy-muted" />
                <p className="text-sm text-copy-muted">No projects yet</p>
              </div>
            </TabsContent>

            <TabsContent
              value="shared"
              className="flex flex-1 items-center justify-center"
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <Users className="size-8 text-copy-muted" />
                <p className="text-sm text-copy-muted">
                  No shared projects yet
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="border-t border-surface-border p-3">
          <Button className="w-full gap-1.5" size="default">
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
