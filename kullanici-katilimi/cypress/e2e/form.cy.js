describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Name kısmına name değerini gir.", () => {
    cy.get('[data-cy="name-input"]').click();
    cy.get('[data-cy="name-input"]')
      .type("Ahmet Can Yalçınkaya", { delay: 100 })
      .should("have.text", "Ahmet Can Yalçınkaya");
  });
  it("Email değerini giriniz.", () => {
    cy.get('[data-cy="email-input"]').click();
    cy.get('[data-cy="email-input"]')
      .type("ahmetcan.yalcinkaya55@gmail.com", { delay: 50 })
      .should("have.contain", "ahmetcan.yalcinkaya");
  });
  it("Email değerini giriniz.", () => {
    cy.get('[data-cy="password-input"]').click();
    cy.get('[data-cy="password-input"]')
      .type("123456789", { delay: 50 })
      .should("have.contain", "123456789");
  });
  it("Kullanım koşullarını kabul ediniz.", () => {
    cy.get('[data-cy="checkbox-input"]').click();
  });
});
