$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/com/openweather/map/Feature.feature");
formatter.feature({
  "name": "To verify all important information is present on the page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "On entering invalid data website suggests city is Not found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User enters the invalid name of city as \u003cData\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on the button",
  "keyword": "And "
});
formatter.step({
  "name": "The output should be \u003cOutput\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Data",
        "Output"
      ]
    },
    {
      "cells": [
        "xyz",
        "Not found"
      ]
    },
    {
      "cells": [
        "abc",
        "Not found"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "Verification.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to ApplicationURL",
  "keyword": "And "
});
formatter.match({
  "location": "Verification.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "On entering invalid data website suggests city is Not found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User enters the invalid name of city as xyz",
  "keyword": "And "
});
formatter.match({
  "location": "Verification.enterCity(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the button",
  "keyword": "And "
});
formatter.match({
  "location": "Verification.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The output should be Not found",
  "keyword": "Then "
});
formatter.match({
  "location": "Verification.output(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open Chrome",
  "keyword": "Given "
});
formatter.match({
  "location": "Verification.openBrowser(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I go to ApplicationURL",
  "keyword": "And "
});
formatter.match({
  "location": "Verification.navigate(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "On entering invalid data website suggests city is Not found",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User enters the invalid name of city as abc",
  "keyword": "And "
});
formatter.match({
  "location": "Verification.enterCity(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the button",
  "keyword": "And "
});
formatter.match({
  "location": "Verification.click(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The output should be Not found",
  "keyword": "Then "
});
formatter.match({
  "location": "Verification.output(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});