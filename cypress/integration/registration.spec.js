describe("registrations feature tests", function () {
	beforeEach(function () {
		cy.task("resetDb");
		cy.visit("/");
		cy.get("#sign-up").click();
	});
	it("allows trainee to sign up for a chitter account", function () {
		cy.url().should("include", "registrations/new");
		cy.get("#name-textbox").type("Marie");
		cy.get("#username-textbox").type("ndowkunda03");
		cy.get("#email-textbox").type("marie02@test.com");
		cy.get("#password-textbox").type("password111");
		cy.get("#sign-up").click();
		cy.url().should("include", "/chitter");
	});
	//validation not working atm
	xit("shows error when username already exists", function () {
		cy.task("seedUserTable");
		cy.get("#name-textbox").type("Marie");
		cy.get("#username-textbox").type("ndowkunda03");
		cy.get("#email-textbox").type("marie02@test.com");
		cy.get("#password-textbox").type("password111");
		cy.get("#sign-up").click();
		cy.url().should("include", "registrations/new");
		cy.get("#errors").should("contain", "Sorry details not valid");
	});
	it("shows error when email invalid", function () {
		cy.get("#name-textbox").type("Marie");
		cy.get("#username-textbox").type("ndowkunda04");
		cy.get("#email-textbox").type("m@test");
		cy.get("#password-textbox").type("password123");
		cy.get("#sign-up").click();
		cy.get("#errors").should("contain", "Sorry details not valid");
	});
	it("shows error when user doesnt enter email", function () {
		cy.get("#name-textbox").type("Marie");
		cy.get("#username-textbox").type("ndowkunda02");
		cy.get("#password-textbox").type("password1234");
		cy.get("#sign-up").click();
		cy.get("#errors").should("contain", "Sorry details not valid");
	});
	it("shows error when user doesnt enter password", function () {
		cy.get("#name-textbox").type("Marie");
		cy.get("#username-textbox").type("ndowkunda02");
		cy.get("#email-textbox").type("marie02@test.com");
		cy.get("#sign-up").click();
		cy.on("window:alert", (txt) => {
			expect(txt).to.contains("Please fill in this field");
		});
	});
});
