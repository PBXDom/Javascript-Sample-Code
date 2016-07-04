(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse200'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse200'));
  } else {
    // Browser globals (root is window)
    if (!root.&lt;PbxDomApi&gt;) {
      root.&lt;PbxDomApi&gt; = {};
    }
    root.&lt;PbxDomApi&gt;.DefaultApi = factory(root.&lt;PbxDomApi&gt;.ApiClient, root.&lt;PbxDomApi&gt;.InlineResponse200);
  }
}(this, function(ApiClient, InlineResponse200) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 2.1.0
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the callsGet operation.
     * @callback module:api/DefaultApi~callsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets &#x60;Calls&#x60; info. 
     * @param {Number} rptType Report type. (0 report, 1 widget, 2 chart).
     * @param {Number} rptId Report id.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.start Start offset.
     * @param {Number} opts.limit Number of results to return. Max 10K.
     * @param {String} opts.sortBy Sort column.
     * @param {String} opts.sortType Sort mode asc/desc.
     * @param {String} opts.fromDate Start date time.
     * @param {String} opts.toDate End date time.
     * @param {Number} opts.duration Duration range.
     * @param {String} opts.phone List of caller phone.
     * @param {String} opts.phone1 List of dialled phones.
     * @param {String} opts.co List of trunk/co.
     * @param {String} opts.ext list of extensions.
     * @param {Number} opts.pbxId list of PBX Ids.
     * @param {Number} opts.callSource list of callsource.
     * @param {Number} opts.callType list of call type signatures.(5 Unanswered Calls, 7 Transfered Calls, 8 Forwarded Calls)
     * @param {Number} opts.direction list of direction.(0 incoming, 1 outgoing, 2 internal)
     * @param {String} opts.callerName list of caller name.
     * @param {String} opts.did list of did.
     * @param {String} opts.dnis list of dnis.
     * @param {String} opts.acc list of account code.
     * @param {Number} opts.ring Ring range.Seconds unit.
     * @param {Number} opts.cost Cost range.
     * @param {Number} opts.group Department/Group id.
     * @param {module:api/DefaultApi~callsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InlineResponse200>}
     */
    this.callsGet = function(rptType, rptId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'rptType' is set
      if (rptType == undefined || rptType == null) {
        throw "Missing the required parameter 'rptType' when calling callsGet";
      }

      // verify the required parameter 'rptId' is set
      if (rptId == undefined || rptId == null) {
        throw "Missing the required parameter 'rptId' when calling callsGet";
      }


      var pathParams = {
      };
      var queryParams = {
        'rptType': rptType,
        'rptId': rptId,
        'start': opts['start'],
        'limit': opts['limit'],
        'sortBy': opts['sortBy'],
        'sortType': opts['sortType'],
        'fromDate': opts['fromDate'],
        'toDate': opts['toDate'],
        'duration': opts['duration'],
        'phone': opts['phone'],
        'phone1': opts['phone1'],
        'co': opts['co'],
        'ext': opts['ext'],
        'pbxId': opts['pbxId'],
        'callSource': opts['callSource'],
        'callType': opts['callType'],
        'direction': opts['direction'],
        'callerName': opts['callerName'],
        'did': opts['did'],
        'dnis': opts['dnis'],
        'acc': opts['acc'],
        'ring': opts['ring'],
        'cost': opts['cost'],
        'group': opts['group']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [InlineResponse200];

      return this.apiClient.callApi(
        '/Calls', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the featuresChartsGet operation.
     * @callback module:api/DefaultApi~featuresChartsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets &#x60;Charts&#x60; list. 
     * @param {module:api/DefaultApi~featuresChartsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InlineResponse200>}
     */
    this.featuresChartsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [InlineResponse200];

      return this.apiClient.callApi(
        '/Features/charts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the featuresReportsGet operation.
     * @callback module:api/DefaultApi~featuresReportsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets &#x60;Reports&#x60; list. 
     * @param {module:api/DefaultApi~featuresReportsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InlineResponse200>}
     */
    this.featuresReportsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [InlineResponse200];

      return this.apiClient.callApi(
        '/Features/reports', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the featuresWidgetGet operation.
     * @callback module:api/DefaultApi~featuresWidgetGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/InlineResponse200>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets &#x60;Widgets&#x60; list. 
     * @param {module:api/DefaultApi~featuresWidgetGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/InlineResponse200>}
     */
    this.featuresWidgetGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = [InlineResponse200];

      return this.apiClient.callApi(
        '/Features/widget', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
