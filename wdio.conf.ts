import path from 'path'

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './test/tsconfig.json',
    
    specs: [
        './test/specs/**/*.ts'
    ],
    
    exclude: [
        // 'path/to/excluded/files',
        // './test/specs/login.e2e.ts'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
        // browserName: 'Chrome',
        'appium:deviceName': 'pixel_7_pro',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.resolve('./android/app/build/outputs/apk/debug/diary.apk'),
        'appium:noReset': true
    },
    // 여기는 사실 iOS가 없음으로 생략해도 됨(CLASS 101 강의 재첨강 필요)
    // { 
    //     platformName: 'iOS',
    //     'appium:deviceName': 'iPhone 16 Pro',
    //     'appium:platformVersion': '18.2',
    //     'appium:automationName': 'xcuitest',
    //     'appium:app': path.resolve('./ios/DerivedData/Debug-iphonesimulator/Diary.app'),
    //     'appium:noReset': true
    // }
    ],
    services: ['appium'],
    logLevel: 'info',
    
    bail: 0,
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    framework: 'mocha',
    
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
