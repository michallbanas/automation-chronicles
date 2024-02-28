import { describe, expect, test } from "vitest"
import { Badge, BadgeProps } from "../../components/ui/badge" // Import the typeof BadgeProps type
import { render } from "@testing-library/react"

describe("Badge", () => {
  test("renders a badge", () => {
    const badgeProps: BadgeProps = { children: "test" }
    const { getByText } = render(<Badge {...badgeProps} />)
    expect(getByText("test")).toBeTruthy()
  })
})
