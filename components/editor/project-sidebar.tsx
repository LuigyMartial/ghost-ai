"use client";

import { useState } from "react";
import { X, Plus, FolderOpen, Users, Pencil, Trash2, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import type { Project } from "@/hooks/use-project-dialogs";

const MOCK_OWNED_PROJECTS: Project[] = [
  { id: "1", name: "Home Renovation", slug: "home-renovation", isOwned: true },
  { id: "2", name: "Office Layout", slug: "office-layout", isOwned: true },
];

const MOCK_SHARED_PROJECTS: Project[] = [
  { id: "3", name: "Kitchen Design", slug: "kitchen-design", isOwned: false },
];

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNewProject: () => void;
  onRename: (project: Project) => void;
  onDelete: (project: Project) => void;
}

function ProjectItem({
  project,
  onRename,
  onDelete,
}: {
  project: Project;
  onRename: (project: Project) => void;
  onDelete: (project: Project) => void;
}) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="group relative flex items-center justify-between rounded-md px-3 py-2 hover:bg-surface-hover">
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <FolderOpen className="size-4 flex-shrink-0 text-copy-muted" />
        <span className="truncate text-sm text-copy-primary">
          {project.name}
        </span>
      </div>
      {project.isOwned && (
        <div className="relative">
          <Button
            variant="ghost"
            size="icon-sm"
            className="opacity-0 group-hover:opacity-100"
            onClick={() => setShowActions(!showActions)}
          >
            <MoreVertical className="size-4" />
          </Button>
          {showActions && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setShowActions(false)}
              />
              <div className="absolute right-0 top-full z-20 mt-1 w-36 rounded-md border border-surface-border bg-surface py-1 shadow-md">
                <button
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-copy-primary hover:bg-surface-hover"
                  onClick={() => {
                    setShowActions(false);
                    onRename(project);
                  }}
                >
                  <Pencil className="size-3.5" />
                  Rename
                </button>
                <button
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-status-destructive hover:bg-surface-hover"
                  onClick={() => {
                    setShowActions(false);
                    onDelete(project);
                  }}
                >
                  <Trash2 className="size-3.5" />
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export function ProjectSidebar({
  isOpen,
  onClose,
  onNewProject,
  onRename,
  onDelete,
}: ProjectSidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 supports-backdrop-filter:backdrop-blur-xs"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-12 left-0 z-50 flex h-[calc(100vh-3rem)] w-72 flex-col",
          "border-r border-surface-border bg-surface",
          "transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
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

            <TabsContent value="my-projects" className="mt-2 flex-1 overflow-auto">
              {MOCK_OWNED_PROJECTS.length > 0 ? (
                <div className="space-y-0.5">
                  {MOCK_OWNED_PROJECTS.map((project) => (
                    <ProjectItem
                      key={project.id}
                      project={project}
                      onRename={onRename}
                      onDelete={onDelete}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <FolderOpen className="size-8 text-copy-muted" />
                  <p className="mt-2 text-sm text-copy-muted">No projects yet</p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="shared" className="mt-2 flex-1 overflow-auto">
              {MOCK_SHARED_PROJECTS.length > 0 ? (
                <div className="space-y-0.5">
                  {MOCK_SHARED_PROJECTS.map((project) => (
                    <ProjectItem
                      key={project.id}
                      project={project}
                      onRename={onRename}
                      onDelete={onDelete}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8">
                  <Users className="size-8 text-copy-muted" />
                  <p className="mt-2 text-sm text-copy-muted">
                    No shared projects yet
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="border-t border-surface-border p-3">
          <Button
            className="w-full gap-1.5"
            size="default"
            onClick={onNewProject}
          >
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
