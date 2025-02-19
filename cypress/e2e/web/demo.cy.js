describe('demo test', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html");
        cy.viewport(1920, 1080);
        //login
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        //check url
        cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html');
    });

    it('Find products add to cart', () => {
        const productNames = ["Sauce Labs Backpack", "Sauce Labs Bike Light"];
        productNames.forEach((productName) => {
            cy.get('.inventory_item').each(($product) => {
                if ($product.text().includes(productName)) {
                    cy.wrap($product).find('button').click();
                }
            })
        })
    });
});