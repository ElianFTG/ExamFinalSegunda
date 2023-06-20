describe("Publicacion", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#sumar-button").click();
    cy.get("#resultado-div").should("contain", "No es posible  registrar un post sin ningun texto");
  });
});
