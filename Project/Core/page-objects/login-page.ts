import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class LoginPage extends BasePage {
    private email = By.id('login-email');
    private password = By.id('login-pwd');
    private login_button = By.id('login-submit');
    private register_button = By.xpath('//span[contains(@class,"register-btn")]');
    constructor(driver: WebDriver) {
        super(driver);
    }
    async provideEmail(){
        await this.fillInputField(this.email, testData.data.email);
    }

    async providePassword(){
        await this.fillInputField(this.password, testData.data.password);
    }
    async clickLoginButton(){
        await this.findElementAndClick(this.login_button);
    }
    async switchToRegistration(){
        await this.findElementAndClick(this.register_button);
    }

}