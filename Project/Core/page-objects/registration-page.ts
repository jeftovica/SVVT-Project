import {WebDriver, until, By} from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


export class RegistrationPage extends BasePage {
    private email = By.id('join-email')
    private password = By.id('join-pwd');
    private login_button = By.id('join-submit');
    private agree_terms_checkbox = By.xpath('//li[contains(@class,"agree1")]//i');
    private agree_privacy_checkbox = By.xpath('//li[contains(@class,"agree2")]//i');
    constructor(driver: WebDriver) {
        super(driver);
    }
    async provideEmail(){
        await this.fillInputField(this.email, testData.registration.email);
    }

    async providePassword(){
        await this.fillInputField(this.password, testData.registration.password);
    }
    async clickRegisterButton(){
        await this.findElementAndClick(this.login_button);
    }
    async clickAgreeToTermsOfUse(){
        await this.findElementAndClick(this.agree_terms_checkbox)
    }
    async clickAgreeToPrivacyPolicyOfUse(){
        await this.findElementAndClick(this.agree_privacy_checkbox)
    }
}