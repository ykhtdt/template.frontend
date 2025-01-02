import { Button } from "@repo/ui/components/ui/button"

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <main className="flex flex-1 flex-col items-center justify-center">
        <h1 className="mb-2 text-xl font-bold">
          Turborepo & Shadcn/ui
        </h1>
        <Button>
          @repo/ui Button
        </Button>
      </main>
    </div>
  )
}
