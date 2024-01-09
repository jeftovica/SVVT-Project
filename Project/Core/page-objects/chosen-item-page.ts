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

    private QA_field = By.xpath('//textarea[@id= "question_content"]');
    private QA_submit = By.xpath('//input[@id = "askSubmit"]');

    private buy_now = By.xpath('//div[contains(@class, "product-action")]//a[contains(@class, "buy-now-btn")]');

    private QA_button_inplace=By.xpath('//div[contains(@class, "qa-lead-text")]//a[contains(@class, "qa-add-btn")]');
    private QA_field_inplace=By.xpath('//div[contains(@class, "modal-qa-pop")]//div[contains(@class, "textarea-text")]//textarea');
    private QA_submit_inplace = By.xpath('//div[contains(@class, "modal-qa-pop")]//a[contains(@class, "qa-submit")]');

    private wish_list_button = By.xpath ('//div[contains(@class, "wish-btn")]');
    private view_list = By.xpath('//div[contains(@class, "modal-cnt")]//a[contains(@class, "view_wish")]');

    private price = By.xpath('//div[contains(@class, "right-price")]');
    private input_email = By.xpath('//input[contains(@class, "alert-email")]');
    private subscribe = By.xpath('//div[contains(@class, "btn-inner")]//a[contains(@class, "alert-submit")]');


    constructor(driver: WebDriver) {
        super(driver);
    }

    async findQAsection(){
        await this.findElement(this.QA_section);
    }

    async clickSeeAllQA(){
        const url = await this.findElement(this.see_all_QA);
        await this.driver.get(url.getAttribute("href"));
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
    async clickQAbuttonInplace(){
        await this.findElementAndClick(this.QA_button_inplace);
    }

    async enterQAfieldInplace(){
        await this.fillInputField(this.QA_field_inplace, testData.chosen_item_page.QA_text);
    }

    async clickQAsubmitInplace(){
        await this.findElementAndClick(this.QA_submit_inplace)
    }

    async clickBuyNow(){
        await this.findElementAndClick(this.buy_now);
    }

    async clickWishListButton(){
        await this.findElementAndClick(this.wish_list_button);
    }

    async clickViewList(){
        await this.findElementAndClick(this.view_list);
    }

    async clickPrice(){
        await this.findElementAndClick(this.price);
    }

    async inputEmail(){
        await this.fillInputField(this.input_email, testData.data.email);
    }

    async clickSubscribe(){
        await this.findElementAndClick(this.subscribe);
    }
}