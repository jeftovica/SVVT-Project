import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import {readFileSync} from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ChosenItemPage extends BasePage{
    private QA_section = By.className("qa-title");
    private see_all_QA = By.xpath('//div[contains(@class, "qa-see-all")]//a[@dpid = "down_seeallQA_button_180411|product|18101211661"]');
    private QA_button = By.xpath('//div[contains(@class, "qa-lead-btn")]//a[contains(@class, "qa-lead-new")]');

    private QA_field = By.xpath('//div[@class = "modal modal-qa-pop"]//textarea[@placeholder= "Enter your question"]');
    private QA_submit = By.xpath('//div[@class = "btn"]//a[@class = "qa-submit"]');

    private buy_now = By.xpath('//div[contains(@class, "product-action")]//a[contains(@class, "buy-now-btn")]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async findQAsection(){
        await this.findElement(this.QA_section);
    }

    async clickSeeAllQA(){
        await this.findElementAndClick(this.see_all_QA);
    }
    async clickQAbutton(){
        await this.findElementAndClick(this.QA_button);
    }

    async enterQAfield(){
        await this.fillInputField(this.QA_field, testData.chosen_item_page.QA_text);
    }

    async clickQAsubmit(){
        await this.findElementAndClick(this.QA_submit)
    }

    async clickBuyNow(){
        await this.findElementAndClick(this.buy_now);
    }
}