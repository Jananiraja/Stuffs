import * as reporter from 'cucumber-html-reporter';
import * as path from 'path';
const envFile = path.join(process.cwd(), 'testdata/.env');
require('dotenv').config({ path: envFile });
let envName:any = process.env.ENV;
console.log(envName)

let timestamp: any;
var date1 = new Date();
var month = date1.getMonth()+1;
//timestamp = (new Date()).getDate() + '_' + (new Date()).getMonth() + "_" + (new Date()).getFullYear() + '_' + (new Date()).getHours() + '_' + (new Date()).getMinutes() + '_' + (new Date()).getSeconds()
timestamp = (new Date()).getDate() + '_' + month + "_" + (new Date()).getFullYear() + '_' + (new Date()).getHours() + '_' + (new Date()).getMinutes() + '_' + (new Date()).getSeconds()
const options = {
  // theme: 'bootstrap', hierarchy
  theme: 'bootstrap',
  name: " ",
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/reports_'+process.env.ENV+'/cucumber-report-' + timestamp + '.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  scenarioTimestamp: true,
  suitetimestamp: true,
  brandTitle: "Report Generated on : " + new Date(),
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': "MIG",
  },
};

reporter.generate(options);
