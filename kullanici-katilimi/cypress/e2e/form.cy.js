describe("Success tests.", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Tests form and get success. ", () => {
    cy.get('[data-cy="name-input"]')
      .type("Emre Şahiner")
      .should("have.value", "Emre Şahiner");
    cy.get('[data-cy="email-input"]')
      .type("emre.sahiner@gmail.com")
      .should("have.value", "emre.sahiner@gmail.com");
    cy.get('[ data-cy="password-input"]')
      .type("123456789")
      .should("have.value", "123456789");
    cy.get('[data-cy="checkbox-input"]').click().should("have.checked");
    //cy.get('[data-cy="button-cyp"]').should("have.enabled");
    cy.get('[data-cy="button-cyp"]').should("not.have.disabled");
    cy.get('[data-cy="button-cyp"]').click();
    cy.get('[data-cy="name-input"]').should("have.value", "");
  });
});

describe("Error tests.", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Tests email input and gets error as expected . ", () => {
    cy.get('[data-cy="email-input"]')
      .type("emre.sahinergmail.com")
      .should("have.value", "emre.sahinergmail.com");
    cy.contains("Geçerli bir e-mail adresi giriniz.");
  });

  it("Tests password input and gets error as expected . ", () => {
    cy.get('[data-cy="password-input"]').type("32156");
    cy.contains("Şifreniz minimum 8 karakter uzunluğunda olmalıdır.");
  });
  it("Tests password input and gets error as expected . ", () => {
    cy.get('[data-cy="checkbox-input"]').check();
    cy.get('[data-cy="checkbox-input"]').click();
    cy.contains("Lütfen kullanım şartlarını kabul ediniz.");
  });
});
