"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import {
  CreateProjectDialog,
  RenameProjectDialog,
  DeleteProjectDialog,
} from "@/components/project-dialogs";
import { useProjectDialogs } from "@/hooks/use-project-dialogs";

export default function EditorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    activeDialog,
    selectedProject,
    formData,
    isLoading,
    openCreateDialog,
    openRenameDialog,
    openDeleteDialog,
    closeDialog,
    updateFormData,
    setLoading,
  } = useProjectDialogs();

  const handleCreateProject = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeDialog();
    }, 500);
  };

  const handleRenameProject = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeDialog();
    }, 500);
  };

  const handleDeleteProject = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      closeDialog();
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-bg-base">
      <EditorNavbar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen((prev) => !prev)}
      />
      <ProjectSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewProject={openCreateDialog}
        onRename={openRenameDialog}
        onDelete={openDeleteDialog}
      />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-copy-primary">
            Create a project or open an existing one
          </h1>
          <p className="mt-2 text-sm text-copy-muted">
            Start a new architecture workspace, or choose a project from the sidebar.
          </p>
          <Button
            className="mt-6 gap-1.5"
            size="default"
            onClick={openCreateDialog}
          >
            <Plus className="size-4" />
            New Project
          </Button>
        </div>
      </main>

      <CreateProjectDialog
        open={activeDialog === "create"}
        onOpenChange={(open) => !open && closeDialog()}
        name={formData.name}
        onNameChange={updateFormData}
        onSubmit={handleCreateProject}
        isLoading={isLoading}
      />

      <RenameProjectDialog
        open={activeDialog === "rename"}
        onOpenChange={(open) => !open && closeDialog()}
        project={selectedProject}
        name={formData.name}
        onNameChange={updateFormData}
        onSubmit={handleRenameProject}
        isLoading={isLoading}
      />

      <DeleteProjectDialog
        open={activeDialog === "delete"}
        onOpenChange={(open) => !open && closeDialog()}
        project={selectedProject}
        onConfirm={handleDeleteProject}
        isLoading={isLoading}
      />
    </div>
  );
}
