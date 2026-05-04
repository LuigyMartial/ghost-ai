import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center">
      <p>Ghost AI</p>
      <Button variant="default">Click me</Button>
    </div>
  );
}
