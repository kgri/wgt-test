describe("wgt test", () => {
    it("goes to second step", () => {
        cy.visit("https://kgri.github.io/")
            .get("button")
            .click()
            .get("input")
            .type("WomenGoTech")
            .get("form")
            .submit()
            .get("button")
            .should("exist")
            .get("input")
            .type("Bad value")
            .get("form")
            .submit()
            .get("[data-test=errorMessage]")
            .should("be.visible")
            .get("input")
            .clear()
            .type("Good value")
            .get("form")
            .submit()
            .get(".App > div")
            .should("contain.text", "Done!");
    });

    it("progresses to second step", () => {
        cy.visit("https://kgri.github.io/")
            .get("button")
            .click()
            .get("[data-test=step-1]")
            .should("have.css", "background-color", "rgb(198, 222, 166)")
            .get("[data-test=step-2]")
            .should("have.css", "background-color", "rgb(255, 255, 255)");
    });
});