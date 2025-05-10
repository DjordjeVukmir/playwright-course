const { expect } = require('@playwright/test');
exports.HomePage = class HomePage {


    constructor(page) {
        this.page = page;
        this.productList = this.page.locator('#tbodyid div.card h4 a');
        this.cart = '#cartur';
    }

    async addProductToCart(productName) {
        await this.productList.filter({ hasText: productName }).first().click();

        const [dialog] = await Promise.all([
            this.page.waitForEvent('dialog'),
            this.page.locator('a:has-text("Add to cart")').click()
        ]);

        await expect(dialog.type()).toBe('alert');
        await expect(dialog.message()).toContain('Product added');
        await dialog.accept();
    }

    async goToCart() {
        await this.page.locator(this.cart).click();
    }
};
