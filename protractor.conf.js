let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    framework:"jasmine", 
    directConnect :true, 
    specs: ['tests/loginpagetestspec.ts'], 
    SELENIUM_PROMISE_MANAGER: false,
    jasmineNodeOpts:{
           defaultTimeoutInterval: 20000
    }, 
    capabilities:{ 
        "browserName":"chrome", 
        shardTestFiles: true,   // If this is set to true  files to be run by this set of capabiities will run parallel
        maxInstances: 1,    // Default to 1 and this is needed only if sharedtest files is set to true 
        }, 

   /* multiCapabilities:[
        {
            "browserName":"chrome"
        },
        {
            "browserName":"firefox"
        }
    ],*/
    onPrepare() {
        require("ts-node").register({
            project: require("path").join(__dirname,"./tsconfig.json"),
        });

        jasmine.getEnv().addReporter(
            new SpecReporter({
                suite: {
                    displayNumber: true // display each suite number (hierarchical)
                },
                spec: {
                    displayPending: false, // display each pending spec
                    displayDuration: true // display each spec duration
                },
                summary: {
                    displaySuccesses: true, // display summary of all successes after execution
                    displayFailed: true, // display summary of all failures after execution
                    displayPending: true // display summary of all pending specs after execution
                }
            })
        );
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
        jasmine.getEnv().beforeEach(function (done) {
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }

}

