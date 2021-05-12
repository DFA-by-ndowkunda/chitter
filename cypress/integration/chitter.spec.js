describe("peeps home page", function () {
	beforeEach(function () {
		cy.task("resetDb");
		cy.task("seedPeepTable");
		cy.visit("/");
	});
	it("shows user management links", function () {
		cy.contains("Chitter");
		cy.get("#sign-up").should("contain", "sign up");
		cy.get("#login").should("contain", "log in");
	});
	it("signed in user can post a peep", function () {
		cy.get("#login").click();
		cy.get("#username-textbox").type("ndowkunda");
		cy.get("#password-textbox").type("password");
		cy.get("#login").click();
		cy.get("#peep-textbox").type("I love chitter!");
		cy.get("#post-peep").click();
		cy.get("#peep-1-container").should("be.visible");
		cy.get("#user-1-message").contains("I love chitter!");
		cy.get("#peep-1-container").contains("ndowkunda");
		cy.get("#peep-1-container").contains("Marie");
		cy.get("#peep-1-container").contains(
			"Thu Jun 10 2021 12:15:00 GMT+0100 (British Summer Time)"
		);
	});
});
