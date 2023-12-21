import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../Core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import {HomePage} from "../Core/page-objects/home-page";
import {LoginPage} from "../Core/page-objects/login-page";
import {RegisteredHomePage} from "../Core/page-objects/registered-home-page";
import {HelpCenterPage} from "../Core/page-objects/help-center-page";




const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let registeredHomePage: RegisteredHomePage;
let helpCenterPage: HelpCenterPage;




beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    registeredHomePage = new RegisteredHomePage(driver);
    helpCenterPage = new HelpCenterPage(driver);

},10000);

test("change password", async () => {
    await homePage.clickCloseModalButton();
    await homePage.clickSignInButton();
    await loginPage.provideEmail();
    await loginPage.providePassword();
    await loginPage.clickLoginButton();
    await driver.sleep(20000); // ToDo: Delete
    await driver.get(testData.url.home_page);
    await registeredHomePage.clickHelpCenter();
    await helpCenterPage.clickChangePassword();
    await helpCenterPage.enterExistingPassword();
    await helpCenterPage.enterNewPassword();
    await helpCenterPage.reenterNewPassword();
    await driver.sleep(20000);
    await helpCenterPage.clickSaveButton();

},100000);



afterAll(async () => {
    await quitDriver(driver);
},10000);