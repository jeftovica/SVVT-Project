import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import {readFileSync} from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegisteredHomePage extends BasePage {
    private search_field = By.xpath('//form[@class="header-form"]//input[@name="keywords"]');
    private search_button = By.xpath('//form[@class="header-form"]//input[@name="header-submit"]');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async enterSearchField(){
        await this.fillInputField(this.search_field, testData.registered_home_page.search_term );
    }

    async clickSearchButton(){
        await this.findElementAndClick(this.search_button);
    }

}
