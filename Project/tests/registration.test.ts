
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../Core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../Core/page-objects/login-page";
import {HomePage} from "../Core/page-objects/home-page";
import {RegistrationPage} from "../Core/page-objects/registration-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));


let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let registrationPage: RegistrationPage


beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    registrationPage = new RegistrationPage(driver);
},10000);


test("registration", async () => {
    await homePage.clickCloseModalButton();
    await homePage.clickSignInButton();
    await loginPage.switchToRegistration();
    await registrationPage.provideEmail();
    await registrationPage.providePassword();
    await registrationPage.clickAgreeToTermsOfUse();
    await registrationPage.clickAgreeToPrivacyPolicyOfUse();
    await registrationPage.clickRegisterButton();
},10000);


afterAll(async () => {
    await quitDriver(driver);
},10000);
