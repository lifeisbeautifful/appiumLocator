const path = require('path')
const {remote} = require('webdriverio')

const capabilities = {
    'appium:deviceName': 'Pixel 5',
    'appium:udid': "emulator-5554",
    'platformName': "Android"
}

const wdOpts = {
    hostname: '127.0.0.1',
    path: "/wd/hub",
    port: 4723,
    logLevel: "info",
    capabilities,
}

async function runTest(){
    const driver = await remote(wdOpts);
    try{
        const chromeBtn = await driver.$('//android.widget.TextView[@content-desc="Chrome"]')
        await chromeBtn.click()
        await driver.pause(10000);
    }finally{
        await driver.pause(10000);
        await driver.deleteSession();
    }
}

runTest().catch(console.error);