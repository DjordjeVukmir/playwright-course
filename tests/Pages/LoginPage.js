exports.LoginPage =
    class LoginPage {

        constructor(page) {
            this.page = page
            this.loginLink = '#login2'
            this.userNameInput = '#loginusername'
            this.passwordInput = '#loginpassword'
            this.loginButton = "//button[normalize-space()='Log in']"
        }

        async goToLoginPage() {
            await this.page.goto('https://demoblaze.com/')
        }

        async login(username, password) {
            await this.page.locator(this.loginLink).click()
            await this.page.locator(this.userNameInput).fill(username)
            await this.page.locator(this.passwordInput).fill(password)
            await this.page.locator(this.loginButton).click()

        }





    }