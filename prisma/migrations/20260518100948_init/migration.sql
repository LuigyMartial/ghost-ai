-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('DRAFT', 'ARCHIVED');

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "status" "ProjectStatus" NOT NULL DEFAULT 'DRAFT',
    "canvasJsonPath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectCollaboration" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProjectCollaboration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Project_ownerId_idx" ON "Project"("ownerId");

-- CreateIndex
CREATE INDEX "Project_createdAt_idx" ON "Project"("createdAt");

-- CreateIndex
CREATE INDEX "ProjectCollaboration_email_idx" ON "ProjectCollaboration"("email");

-- CreateIndex
CREATE INDEX "ProjectCollaboration_projectId_createdAt_idx" ON "ProjectCollaboration"("projectId", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectCollaboration_projectId_email_key" ON "ProjectCollaboration"("projectId", "email");

-- AddForeignKey
ALTER TABLE "ProjectCollaboration" ADD CONSTRAINT "ProjectCollaboration_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
