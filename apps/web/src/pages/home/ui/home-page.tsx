import { Button } from "@workspace/ui/components/button"

export const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">
          Template Frontend
        </h1>
        <Button size="sm">
          Button
        </Button>
      </div>
    </div>
  )
}
