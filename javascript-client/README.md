# &lt;pbx-dom-api&gt;

&lt;PbxDomApi&gt; - JavaScript client for &lt;pbx-dom-api&gt;
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.1.0
- Package version: 2.1.0
- Build date: 2016-06-25T14:19:48.485Z
- Build package: class io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install <pbx-dom-api> --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/YOUR_USERNAME/&lt;pbx-dom-api&gt;
then install it via:

```shell
    npm install YOUR_USERNAME/&lt;pbx-dom-api&gt; --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var <PbxDomApi> = require('<pbx-dom-api>');

var api = new <PbxDomApi>.DefaultApi()

var rptType = 1.2; // {Number} Report type. (0 report, 1 widget, 2 chart).

var rptId = 1.2; // {Number} Report id.

var opts = { 
  'start': 3.4, // {Number} Start offset.
  'limit': 3.4, // {Number} Number of results to return. Max 10K.
  'sortBy': "sortBy_example", // {String} Sort column.
  'sortType': "sortType_example", // {String} Sort mode asc/desc.
  'fromDate': "fromDate_example", // {String} Start date time.
  'toDate': "toDate_example", // {String} End date time.
  'duration': 3.4, // {Number} Duration range.
  'phone': "phone_example", // {String} List of caller phone.
  'phone1': "phone1_example", // {String} List of dialled phones.
  'co': "co_example", // {String} List of trunk/co.
  'ext': "ext_example", // {String} list of extensions.
  'pbxId': 3.4, // {Number} list of PBX Ids.
  'callSource': 3.4, // {Number} list of callsource.
  'callType': 3.4, // {Number} list of call type signatures.(5 Unanswered Calls, 7 Transfered Calls, 8 Forwarded Calls)
  'direction': 3.4, // {Number} list of direction.(0 incoming, 1 outgoing, 2 internal)
  'callerName': "callerName_example", // {String} list of caller name.
  'did': "did_example", // {String} list of did.
  'dnis': "dnis_example", // {String} list of dnis.
  'acc': "acc_example", // {String} list of account code.
  'ring': 3.4, // {Number} Ring range.Seconds unit.
  'cost': 3.4, // {Number} Cost range.
  'group': 3.4 // {Number} Department/Group id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.callsGet(rptType, rptId, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.pbxdom.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*&lt;PbxDomApi&gt;.DefaultApi* | [**callsGet**](docs/DefaultApi.md#callsGet) | **GET** /Calls | 
*&lt;PbxDomApi&gt;.DefaultApi* | [**featuresChartsGet**](docs/DefaultApi.md#featuresChartsGet) | **GET** /Features/charts | 
*&lt;PbxDomApi&gt;.DefaultApi* | [**featuresReportsGet**](docs/DefaultApi.md#featuresReportsGet) | **GET** /Features/reports | 
*&lt;PbxDomApi&gt;.DefaultApi* | [**featuresWidgetGet**](docs/DefaultApi.md#featuresWidgetGet) | **GET** /Features/widget | 


## Documentation for Models

 - [&lt;PbxDomApi&gt;.InlineResponse200](docs/InlineResponse200.md)


## Documentation for Authorization

 All endpoints do not require authorization.

