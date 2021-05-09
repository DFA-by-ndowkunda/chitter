describe("Sessions feature tests", function () {
	beforeEach(function () {
		cy.task("resetDb");
		cy.visit("/");
		cy.task("createTraineeUser");
		cy.get("#login-link").click();
	});
	it("user cannot login if email doesnt exist", function () {
		cy.get("#user-email-textbox").type("ma@gmail.com");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.get("#errors").should("contain", "sorry, details not valid");
	});
	it("user cannot login if password is incorrect", function () {
		cy.get("#user-email-textbox").type("marie01@gmail.com");
		cy.get("#user-password-textbox").type("password1");
		cy.get("#user-submit").click();
		cy.get("#errors").should("contain", "sorry, details not valid");
	});
	it("user can login and see peeps", function () {
		cy.get("#user-email-textbox").type("marie01@gmail.com");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.url().should("include", "sessions/index");
	});
	it("signed in user can post a peep", function () {
		cy.get("#user-email-textbox").type("marie01@gmail.com");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.url().should("include", "sessions/index");
		cy.get("#peep-link");
		cy.url().should("include", "peeps/new");
		cy.get("#peep-textbox").type("I love chitter!");
		cy.get("#peep-submit").click();
		cy.url().should("include", "sessions/index");
		cy.get("#peep-1-container").should("be.visible");
		cy.get("peep-1-message").contains("I love chitter!");
		cy.get("#peep-1-name").contains("Marie");
		cy.get("#peep-1-user").contains("ndowkunda02");
		cy.get("#peep-1-time").contains("Sun May 09 2021 18:30:00");
	});
	it("signed in user can log out", function () {
		cy.get("#user-email-textbox").type("marie@gmail.com");
		cy.get("#user-password-textbox").type("password123");
		cy.get("#user-submit").click();
		cy.url().should("include", "sessions/index");
		cy.get("#sign-out-link");
		cy.url().should("eq", Cypress.config().baseUrl + "/");
		cy.get("#log-in-link").should("be.visible");
		cy.get("#sign-up-link").should("be.visible");
	});
});
