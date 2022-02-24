import {Before,setDefaultTimeout, After,HookScenarioResult, AfterAll} from 'cucumber'
const assert1 = require('soft-assert')

Before( async function(testCase:HookScenarioResult)  {
      setDefaultTimeout(1200000)
      // @ts-ignore
      this.AUT_Application = globalThis.globalDriver;
      let featurearray=testCase.sourceLocation.uri.split("\\")
      let featurename=(featurearray[1].replace(".feature","")).trim()
      process.env.CurrentFeatureName = featurename
      console.log("Scenario:",testCase.pickle.name,":Started")
    });

After (async function(testCase:HookScenarioResult){
         // @ts-ignore
         globalThis.globalDriver = this.AUT_Application
        console.log("Scenario:",testCase.pickle.name,":",testCase.result.status)
        assert1.softAssertAll()
        //await this.AUT_Application?.closeBrowser()
    })
