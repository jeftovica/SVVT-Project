import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";


export class HomePage extends BasePage {
    private login_button = By.className('header-user');
    private close_modal = By.className('newuser-close');


    constructor(driver: WebDriver) {
        super(driver);
    }
    async clickSignInButton(){
        await this.findElementAndClick(this.login_button);
    }

    async clickCloseModalButton(){
        await this.findElementAndClick(this.close_modal);
    }
}
