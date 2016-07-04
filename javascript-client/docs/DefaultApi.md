# &lt;PbxDomApi&gt;.DefaultApi

All URIs are relative to *https://api.pbxdom.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**callsGet**](DefaultApi.md#callsGet) | **GET** /Calls | 
[**featuresChartsGet**](DefaultApi.md#featuresChartsGet) | **GET** /Features/charts | 
[**featuresReportsGet**](DefaultApi.md#featuresReportsGet) | **GET** /Features/reports | 
[**featuresWidgetGet**](DefaultApi.md#featuresWidgetGet) | **GET** /Features/widget | 


<a name="callsGet"></a>
# **callsGet**
> [InlineResponse200] callsGet(rptType, rptId, opts)



Gets &#x60;Calls&#x60; info. 

### Example
```javascript
var <PbxDomApi> = require('<pbx-dom-api>');

var apiInstance = new <PbxDomApi>.DefaultApi();

var rptType = 1.2; // Number | Report type. (0 report, 1 widget, 2 chart).

var rptId = 1.2; // Number | Report id.

var opts = { 
  'start': 3.4, // Number | Start offset.
  'limit': 3.4, // Number | Number of results to return. Max 10K.
  'sortBy': "sortBy_example", // String | Sort column.
  'sortType': "sortType_example", // String | Sort mode asc/desc.
  'fromDate': "fromDate_example", // String | Start date time.
  'toDate': "toDate_example", // String | End date time.
  'duration': 3.4, // Number | Duration range.
  'phone': "phone_example", // String | List of caller phone.
  'phone1': "phone1_example", // String | List of dialled phones.
  'co': "co_example", // String | List of trunk/co.
  'ext': "ext_example", // String | list of extensions.
  'pbxId': 3.4, // Number | list of PBX Ids.
  'callSource': 3.4, // Number | list of callsource.
  'callType': 3.4, // Number | list of call type signatures.(5 Unanswered Calls, 7 Transfered Calls, 8 Forwarded Calls)
  'direction': 3.4, // Number | list of direction.(0 incoming, 1 outgoing, 2 internal)
  'callerName': "callerName_example", // String | list of caller name.
  'did': "did_example", // String | list of did.
  'dnis': "dnis_example", // String | list of dnis.
  'acc': "acc_example", // String | list of account code.
  'ring': 3.4, // Number | Ring range.Seconds unit.
  'cost': 3.4, // Number | Cost range.
  'group': 3.4 // Number | Department/Group id.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.callsGet(rptType, rptId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rptType** | **Number**| Report type. (0 report, 1 widget, 2 chart). | 
 **rptId** | **Number**| Report id. | 
 **start** | **Number**| Start offset. | [optional] 
 **limit** | **Number**| Number of results to return. Max 10K. | [optional] 
 **sortBy** | **String**| Sort column. | [optional] 
 **sortType** | **String**| Sort mode asc/desc. | [optional] 
 **fromDate** | **String**| Start date time. | [optional] 
 **toDate** | **String**| End date time. | [optional] 
 **duration** | **Number**| Duration range. | [optional] 
 **phone** | **String**| List of caller phone. | [optional] 
 **phone1** | **String**| List of dialled phones. | [optional] 
 **co** | **String**| List of trunk/co. | [optional] 
 **ext** | **String**| list of extensions. | [optional] 
 **pbxId** | **Number**| list of PBX Ids. | [optional] 
 **callSource** | **Number**| list of callsource. | [optional] 
 **callType** | **Number**| list of call type signatures.(5 Unanswered Calls, 7 Transfered Calls, 8 Forwarded Calls) | [optional] 
 **direction** | **Number**| list of direction.(0 incoming, 1 outgoing, 2 internal) | [optional] 
 **callerName** | **String**| list of caller name. | [optional] 
 **did** | **String**| list of did. | [optional] 
 **dnis** | **String**| list of dnis. | [optional] 
 **acc** | **String**| list of account code. | [optional] 
 **ring** | **Number**| Ring range.Seconds unit. | [optional] 
 **cost** | **Number**| Cost range. | [optional] 
 **group** | **Number**| Department/Group id. | [optional] 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="featuresChartsGet"></a>
# **featuresChartsGet**
> [InlineResponse200] featuresChartsGet()



Gets &#x60;Charts&#x60; list. 

### Example
```javascript
var <PbxDomApi> = require('<pbx-dom-api>');

var apiInstance = new <PbxDomApi>.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featuresChartsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="featuresReportsGet"></a>
# **featuresReportsGet**
> [InlineResponse200] featuresReportsGet()



Gets &#x60;Reports&#x60; list. 

### Example
```javascript
var <PbxDomApi> = require('<pbx-dom-api>');

var apiInstance = new <PbxDomApi>.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featuresReportsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="featuresWidgetGet"></a>
# **featuresWidgetGet**
> [InlineResponse200] featuresWidgetGet()



Gets &#x60;Widgets&#x60; list. 

### Example
```javascript
var <PbxDomApi> = require('<pbx-dom-api>');

var apiInstance = new <PbxDomApi>.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.featuresWidgetGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

