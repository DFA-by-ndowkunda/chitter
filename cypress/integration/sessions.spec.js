describe("Sessions feature tests", function () {
	beforeEach(function () {
		cy.task("resetDb");
		cy.task("seedUserTable");
		cy.visit("/");
		cy.get("#login").click();
	});
	it("user can login and see peeps", function () {
		cy.get("#username-textbox").type("ndowkunda");
		cy.get("#password-textbox").type("password");
		cy.get("#login").click();
		cy.url().should("include", "/chitter");
	});
	it("user cannot login if user handle doesnt exist", function () {
		cy.get("#username-textbox").type("ndowkundq");
		cy.get("#password-textbox").type("password");
		cy.get("#login").click();
		cy.get("#errors").should("contain", "Sorry details do not exist");
	});
	it("user cannot login if password is incorrect", function () {
		cy.get("#username-textbox").type("ndowkunda");
		cy.get("#password-textbox").type("password1");
		cy.get("#login").click();
		cy.get("#errors").should("contain", "Sorry details do not exist");
	});
	it("signed in user can log out", function () {
		cy.get("#username-textbox").type("ndowkunda");
		cy.get("#password-textbox").type("password");
		cy.get("#login").click();
		cy.get("#log-out").click();
		cy.url().should("eq", Cypress.config().baseUrl + "/");
		cy.get("#login").should("be.visible");
		cy.get("#sign-up").should("be.visible");
	});
});
