import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import {readFileSync} from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegisteredHomePage extends BasePage {
    private search_field = By.xpath('//form[contains(@class, "header-form")]//input[@name="keywords"]');
    private search_button = By.xpath('//form[contains(@class, "header-form")]//input[@name="header-submit"]');
    private account_header_button = By.xpath('//li[@class = "header-user"]');
    private signout_button = By.xpath('//a[@dpid = "top_SignOutC_button_180104|home|182202749"]');

    private options = By.xpath('//div[contains(@class, "header-shipto-title")]');

    private shipping_country = By.xpath('//div[contains(@class, "shipto-input")]');
    private pick_country = By.xpath ('//div[contains(@class, "shipto-downWrap")]//li[@cid = "195"]');
    private language = By.xpath('//div[contains(@class, "country-website-input")]');
    private pick_language = By.xpath('//ul[contains(@class, "shipto-country-list")]//li[@code = "es-ES"]');
    private currency = By.xpath('//div[contains(@class, "currency-input")]');
    private pick_currency = By.xpath ('//div[contains(@class, "currency-listWrap")]//li[@cid = "EUR"]');

    private save_button = By.xpath ('//input[contains(@class, "confirm")]');

    private toys_category = By.xpath('//li[contains(@class, "cate-item")]//a[contains(string(), "Toys Hobbies and Robot")]');

    private help_center = By.xpath('//a[@dpid = "top_HelpCenter_button_231117|home|23320030020"]');


    constructor(driver: WebDriver) {
        super(driver);
    }
    async enterSearchField(){
        await this.fillInputField(this.search_field, testData.registered_home_page.search_term );
    }

    async clickSearchButton(){
        await this.findElementAndClick(this.search_button);
    }

    async clickToysCategory(){
        await this.findElementAndClick(this.toys_category);
    }

    async clickHelpCenter(){
        const element = await this.findElement(this.account_header_button);
        await this.hoverElement(element);
        await this.findElementAndClick(this.help_center);
    }

    async signOut(){
        const element = await this.findElement(this.account_header_button);
        await this.hoverElement(element);
        await this.findElementAndClick(this.signout_button);
    }

    async clickOptions(){
        await this.findElementAndClick(this.options);
    }

    async clickShipping(){
        await this.findElementAndClick(this.shipping_country);
    }
    async clickCountry(){
        await this.findElementAndClick(this.pick_country);
    }

    async clickLanguage(){
        await this.findElementAndClick(this.language);
    }

    async pickLanguage(){
        await this.findElementAndClick(this.pick_language);
    }

    async clickCurrency(){
        await this.findElementAndClick(this.currency);
    }

    async pickCurrency(){
        await this.findElementAndClick(this.pick_currency);
    }
    async clickSaveButton(){
        await this.findElementAndClick(this.save_button);
    }



}
