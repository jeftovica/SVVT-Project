
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../Core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../Core/page-objects/login-page";
import { RegistrationPage } from "../Core/page-objects/registration-page";
import {HomePage} from "../Core/page-objects/ home-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let login: LoginPage;
let registrationPage: RegistrationPage;


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    login = new LoginPage(driver);
    registrationPage = new RegistrationPage(driver);
},10000);


test("user registration", async () => {
    await homePage.navigateToHomePage();
    await homePage.clickSignInButton();
    await login.provideEmail();
    await login.clickSubmitbutton();
    await registrationPage.clickPreferedTitle();
    await registrationPage.enterName();
    await registrationPage.enterLastName();
    await registrationPage.enterPassword();
    await registrationPage.clickCreateAccountButton();
    await registrationPage.verifyAccountCreation();
},10000);


afterAll(async () => {
    await quitDriver(driver);
},10000);
