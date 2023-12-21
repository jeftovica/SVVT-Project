import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import {readFileSync} from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class SearchResultPage extends BasePage{
    private min_price_field = By.xpath('//div[@class = "price-input"]//input[@class= "price-input-start"]');
    private max_price_field = By.xpath('//div[@class = "price-input"]//input[@class= "price-input-end"]');
    private OK_button = By.xpath('//div[@class = "price-ok"]//a[contains(string(), "OK")]');

    private chosen_toy = By.xpath('//div[contains(@class, "flash-deals")]//li[contains(@class, "product-item")][1]');

    constructor(driver: WebDriver) {
        super(driver);
    }
    async enterMinPriceField(){
        await this.fillInputField(this.min_price_field, testData.search_result_page.min_price_term);
    }

    async enterMaxPriceField(){
        await this.fillInputField(this.max_price_field, testData.search_result_page.max_price_term);
    }

    async clickOKButton(){
        await this.findElementAndClick(this.OK_button);
    }

    async clickOnToy(){
        await this.findElementAndClick(this.chosen_toy);
    }

}