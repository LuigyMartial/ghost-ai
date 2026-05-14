"use client";

import { useState, useCallback } from "react";

export type DialogType = "create" | "rename" | "delete" | null;

export interface Project {
  id: string;
  name: string;
  slug: string;
  isOwned: boolean;
}

export function useProjectDialogs() {
  const [activeDialog, setActiveDialog] = useState<DialogType>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [formData, setFormData] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(false);

  const openCreateDialog = useCallback(() => {
    setActiveDialog("create");
    setFormData({ name: "" });
    setSelectedProject(null);
  }, []);

  const openRenameDialog = useCallback((project: Project) => {
    setActiveDialog("rename");
    setSelectedProject(project);
    setFormData({ name: project.name });
  }, []);

  const openDeleteDialog = useCallback((project: Project) => {
    setActiveDialog("delete");
    setSelectedProject(project);
    setFormData({ name: "" });
  }, []);

  const closeDialog = useCallback(() => {
    setActiveDialog(null);
    setSelectedProject(null);
    setFormData({ name: "" });
    setIsLoading(false);
  }, []);

  const updateFormData = useCallback((name: string) => {
    setFormData({ name });
  }, []);

  return {
    activeDialog,
    selectedProject,
    formData,
    isLoading,
    isDialogOpen: activeDialog !== null,
    openCreateDialog,
    openRenameDialog,
    openDeleteDialog,
    closeDialog,
    updateFormData,
    setLoading: setIsLoading,
  };
}
