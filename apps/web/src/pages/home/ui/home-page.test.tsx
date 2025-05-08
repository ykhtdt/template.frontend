import {
  expect,
  test,
} from "vitest"
import {
  render,
  screen,
} from "@testing-library/react"

import { HomePage } from "./home-page"

test("HomePage", () => {
  render(<HomePage />)

  expect(screen.getByRole("heading", { level: 1, name: "Template Frontend" })).toBeDefined()
  expect(screen.getByRole("button", { name: "Button" })).toBeDefined()
})
