import { test, expect } from '@playwright/test'
exports.CartPage = class CartPage {

    constructor(page) {
        this.page = page;
        this.numberOfProducts = '//*[@id="tbodyid"]/tr[1]/td[2]'


    }

    async checkProductInCart(productName) {
        const productsInCart = await this.page.$$(this.numberOfProducts)
        for (const product of productsInCart) {
            if (productName === await product.textContent()) {
                return true;
                break;
            }
        }
    }
}