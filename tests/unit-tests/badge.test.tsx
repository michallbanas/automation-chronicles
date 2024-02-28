import { describe, expect, test } from "vitest"
import { Badge, BadgeProps } from "../../components/ui/badge"
import { render, screen } from "@testing-library/react"

describe("Badge component", () => {
  test("renders a badge with correct text", () => {
    const badgeProps: BadgeProps = { children: "Testing Badge" }
    const { getByText } = render(<Badge {...badgeProps} />)
    expect(getByText("Testing Badge")).toBeTruthy()
  })

  test("renders without crashing", () => {
    render(<Badge />)
    expect(screen.getByTestId("badge")).toBeInTheDocument()
  })

  test("applies the default variant", () => {
    render(<Badge />)
    const badge = screen.getByTestId("badge")
    expect(badge).toHaveClass(/primary/)
  })

  test("applies the secondary variant", () => {
    render(<Badge variant="secondary" />)
    const badge = screen.getByTestId("badge")
    expect(badge).toHaveClass(/secondary/)
  })

  test("applies the destructive variant", () => {
    render(<Badge variant="destructive" />)
    const badge = screen.getByTestId("badge")
    expect(badge).toHaveClass(/destructive/)
  })

  test("applies the outline variant", () => {
    render(<Badge variant="outline" />)
    const badge = screen.getByTestId("badge")
    expect(badge).toHaveClass(/outline/)
  })
})
