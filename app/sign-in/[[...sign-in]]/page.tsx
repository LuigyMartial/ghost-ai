import { SignIn } from "@clerk/nextjs";
import { BrainCircuit, Sparkles, Share2, FileText, ScrollText } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: ScrollText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-sans">
      {/* Left panel - large screens only */}
      <div className="hidden lg:flex lg:w-1/2 bg-surface flex-col justify-between px-12 py-12 border-r border-surface-border">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-brand rounded-sm"></div>
          <span className="text-copy-primary font-semibold text-lg">Ghost AI</span>
        </div>

        {/* Main Content */}
        <div className="max-w-md">
          <h1 className="text-copy-primary text-4xl font-bold tracking-tight">
            Design systems at the speed of thought.
          </h1>
          <p className="text-copy-secondary text-lg mt-4 leading-relaxed">
            Describe your architecture in plain English. Ghost AI maps it to a shared
            canvas your whole team can refine in real time.
          </p>

          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-base border border-surface-border flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-brand" />
              </div>
              <div>
                <h3 className="text-copy-primary font-medium">AI Architecture Generation</h3>
                <p className="text-copy-secondary text-sm mt-1">
                  Describe your system, AI maps it to nodes and edges on a live canvas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-base border border-surface-border flex items-center justify-center shrink-0">
                <Share2 className="w-4 h-4 text-brand" />
              </div>
              <div>
                <h3 className="text-copy-primary font-medium">Real-time Collaboration</h3>
                <p className="text-copy-secondary text-sm mt-1">
                  Live cursors, presence indicators, and shared node editing across your team.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-md bg-base border border-surface-border flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-brand" />
              </div>
              <div>
                <h3 className="text-copy-primary font-medium">Instant Spec Generation</h3>
                <p className="text-copy-secondary text-sm mt-1">
                  Export a complete Markdown technical spec directly from the canvas graph.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-copy-faint text-sm">
          © 2026 Ghost AI. All rights reserved.
        </div>
      </div>

      {/* Right panel - Clerk form */}
      <div className="flex-1 flex items-center justify-center bg-base px-4 py-12 lg:px-8">
        <div className="w-full max-w-sm">
          {/* <SignIn
            routing="hash"
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-surface border-surface-border shadow-none",
              },
            }}
          /> */}
          <SignIn />
        </div>
      </div>
    </div>
  );
}
