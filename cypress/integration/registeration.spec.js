describe("registeration feature tests", function () {
	beforeEach(function () {
		cy.task("resetDb");
		cy.visit("/");
		cy.get("#signup-link").click();
		cy.get("#name-textbox").type("Marie");
	});
	it("allows trainee to sign up for a chitter account", function () {
		cy.url().should("include", "registeration/new");
		cy.get("#user-handle-textbox").type("ndowkunda01");
		cy.get("#user-email-textbox").type("marie01@gmail.com");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.url().should("include", "sessions/index");
	});
	it("shows error when email invalid", function () {
		cy.get("#user-handle-textbox").type("ndowkunda01");
		cy.get("#user-email-textbox").type("m@gmail.com");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.get("#errors").should("contain", "Validation isEmail on email failed");
	});
	it("shows error when username already exists", function () {
		cy.get("#user-handle-textbox").type("ndowkunda01");
		cy.get("#user-email-textbox").type("marie01@gmail.com");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.get("#errors").should("contain", "Sorry username already exists");
	});
	it("shows error when user doesnt enter email", function () {
		cy.get("#user-handle-textbox").type("ndowkunda01");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.get("#errors").should("contain", "Please enter an email");
	});
	it("shows error when user doesnt enter password", function () {
		cy.get("#user-handle-textbox").type("ndowkunda01");
		cy.get("#user-email-textbox").type("marie01@gmail.com");
		cy.get("#user-submit").click();
		cy.get("#errors").should("contain", "Please enter an email");
	});
});
