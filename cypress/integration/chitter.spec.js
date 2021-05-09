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
		cy.get("peep-0-message").contains("Hello world!");
		cy.get("peep-0-user").contains("ndowkunda01");
		cy.get("peep-0-name").contains("Marie");
		cy.get("#peep-0-time").contains("Mon May 03 2021 10:30:00");
	});
});
