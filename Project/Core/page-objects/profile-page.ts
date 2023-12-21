import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import {readFileSync} from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ProfilePage extends BasePage{
    private logo_button = By.xpath('//a[@dpid = "top_banggood_image_170412|home|1100100144"]');

    constructor(driver:WebDriver) {
        super(driver);
    }

    async clickLogoButton(){
        await this.findElementAndClick(this.logo_button);
    }
}