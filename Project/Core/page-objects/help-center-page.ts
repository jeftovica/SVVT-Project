import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import {readFileSync} from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HelpCenterPage extends BasePage{
    private change_password_button = By.xpath('//a[@dpid = "middle_changePassword_button_201223|helpCenter|20357013214"]');
    private existing_password = By.xpath('//form[@class = "form-list"]//input[@id= "pwd_current"]');
    private new_password = By.xpath('//form[@class = "form-list"]//input[@id= "pwd_new"]');
    private reentered_password = By.xpath('//form[@class = "form-list"]//input[@id= "pwd_con"]');
    private save_button = By.xpath('//button[contains(@class, "bg-btn-save")]');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickChangePassword(){
        await this.findElementAndClick(this.change_password_button);
    }

    async enterExistingPassword(){
        await this.fillInputField(this.existing_password, testData.data.password);
    }

    async enterNewPassword(){
        await this.fillInputField(this.new_password, testData.data.new_psd);
    }

    async reenterNewPassword(){
        await this.fillInputField(this.reentered_password, testData.data.new_psd);
    }

    async clickSaveButton(){
        await this.findElementAndClick(this.save_button);
    }

}