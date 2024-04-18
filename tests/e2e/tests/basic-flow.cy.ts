describe("Basic flow", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("should display the homepage", () => {
        cy.get("h2").should("be.visible")
    })
})