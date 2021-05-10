describe("peeps home page", function () {
	beforeEach(function () {
		cy.visit("/");
	});
	it("shows contents of side nav bar", function () {
		cy.contains("Chitter");
		cy.get("#sign-up-link").should("contain", "sign up");
		cy.get("#log-in-link").should("contain", "log in");
	});
	it("Displays contents of first peep", function () {
		cy.get("#peep-0-container").should("be.visible");
		cy.get("#peep-0-message").contains("Hello World!");
		cy.get("#peep-0-userHandle").contains("ndowkunda01");
		cy.get("#peep-0-name").contains("Marie");
		cy.get("#peep-0-timestamp").contains(
			"Thu Jun 10 2021 12:15:00 GMT+0100 (British Summer Time)"
		);
	});
});
