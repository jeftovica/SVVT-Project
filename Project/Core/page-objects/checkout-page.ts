
import {readFileSync} from "fs";
import BasePage from "./base-page";
import {By, WebDriver} from "selenium-webdriver";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class CheckoutPage extends BasePage{
    private name_field = By.xpath('//li[contains(@class, "username")]//label[contains(@class, "firstname")]//input');
    private surname_field = By.xpath('//label[contains(@class, "lastname")]//input');
    private phone_number = By.xpath('//label[contains(@class, "telephone-def")]//input');
    private address1_field = By.xpath('//label[contains(@class, "addrssline1-def")]//input');
    private address2_field = By.xpath('//label[contains(@class, "addrssline2")]//input');
    private state_field = By.xpath('//div[contains(@class, "input-content-wrap")]//label[contains(@class, "state-sel")]');
    private state_picker = By.xpath('//div[contains(@class, "select-downwrap")]//li[@cid = "782"]');
    private city_field = By.xpath('//li[@class = "city"]//label[contains(@class, "city-def")]//input');
    private zip_code = By.xpath('//li[@class = "postcode"]//label[contains(@class, "postcode-def")]//input');
    private save_button = By.xpath('//div[contains(@class, "btns")]//span[@dpid = "down_save_botton_placeOrder_20211012|addressbook|21283230622"]');
    private place_order = By.xpath('//div[contains(@class, "place-order-wrap")]//a[@dpid = "right_placeOrder_button_201208|placeOrder|20341211890|1"]');
    private payment_method = By.xpath('//div[contains(@class, "main-list")]//li[contains(@class, "creditcard")]');
    private card_number = By.xpath('//div[contains(@class, "js-card-number")]//input');
    private expiration_date = By.xpath('//div[contains(@class, "js-card-date")]//input');
    private security_code = By.xpath('//div[contains(@class, "js-card-code")]//input');
    private pay_now = By.xpath('//div[contains(@class, "bill")]//a[@dpid = "Bottom_payNow_button_200526|cashier|20146034933"]');

    constructor(driver: WebDriver) {
        super(driver);
    }

    async inputName(){
        await this.fillInputField(this.name_field, testData.shipping_address.name);
    }

    async inputSurname(){
        await this.fillInputField(this.surname_field, testData.shipping_address.surname);
    }

    async inputPhoneNumber(){
        await this.fillInputField(this.phone_number, testData.shipping_address.number);
    }

    async inputAddress1(){
        await this.fillInputField(this.address1_field, testData.shipping_address.address1);
    }

    async inputAddress2(){
        await this.fillInputField(this.address2_field, testData.shipping_address.address2);
    }

    async clickStateField(){
        await this.findElementAndClick(this.state_field);
    }

    async clickStatePicker(){
        await this.findElementAndClick(this.state_picker);
    }

    async inputCity(){
        await this.fillInputField(this.city_field, testData.shipping_address.city);
    }

    async inputZipCode(){
        await this.fillInputField(this.zip_code, testData.shipping_address.zip);
    }

    async clickSaveButton(){
        await this.findElementAndClick(this.save_button);
    }

    async clickPlaceOrder(){
        await this.findElementAndClick(this.place_order);
    }

   async clickPaymentMethod(){
        await this.findElementAndClick(this.payment_method);
   }

    async inputCardNumber(){
        await this.fillInputField(this.card_number, testData.payment_mtd.card_nmb);
    }

    async inputExpirationDate(){
        await this.fillInputField(this.expiration_date, testData.payment_mtd.expiration);
    }

    async inputSecurityCode(){
        await this.fillInputField(this.security_code, testData.payment_mtd.code);
    }

    async clickPayNow(){
        await this.findElementAndClick(this.pay_now);
    }




}