'use strict';

var _ = require('lodash');
var InstanceResource = require('../../../../../base/InstanceResource');
var ListResource = require('../../../../../base/ListResource');
var values = require('../../../../../base/values');

var DependentPhoneNumberList;
var DependentPhoneNumberInstance;
var DependentPhoneNumberContext;

/**
 * Initialize the DependentPhoneNumberList
 *
 * :param Version version: Version that contains the resource
 * :param accountSid: The account_sid
 * :param addressSid: The sid
 *
 * @returns DependentPhoneNumberList
 */
function DependentPhoneNumberList(version, accountSid, addressSid) {
  function DependentPhoneNumberListInstance(sid) {
    return DependentPhoneNumberListInstance.get(sid);
  }

  DependentPhoneNumberListInstance._version = version;
  // Path Solution
  DependentPhoneNumberListInstance._solution = {
    accountSid: accountSid,
    addressSid: addressSid
  };
  DependentPhoneNumberListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Addresses/<%= addressSid %>/DependentPhoneNumbers.json' // jshint ignore:line
  )(DependentPhoneNumberListInstance._solution);
  /**
   * Streams DependentPhoneNumberInstance records from the API.
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} opts.callback - A callback function to process records
   */
  DependentPhoneNumberListInstance.stream = function stream() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    var page = this.page();

    return this._version.stream(page, limits.limit, limits.pageLimit);
  };

  /**
   * Lists DependentPhoneNumberInstance records from the API as a list.
   *
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   *
   * @returns {Array} A list of records
   */
  DependentPhoneNumberListInstance.list = function list() {
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize,
    });

    return this.page(
      limits.pageSize
    );
  };

  /**
   * Retrieve a single page of DependentPhoneNumberInstance records from the API.
   * Request is executed immediately
   *
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   *
   * @returns Page of DependentPhoneNumberInstance
   */
  DependentPhoneNumberListInstance.page = function page() {
    var params = values.of({
      'PageToken': page_token,
      'Page': page_number,
      'PageSize': page_size
    });

    var response = this._version.page(
      'GET',
      self._uri,
      params
    );

    return DependentPhoneNumberPage(
      this._version,
      response,
      this._solution.accountSid,
      this._solution.addressSid
    );
  };

  return DependentPhoneNumberListInstance;
}


/**
 * Initialize the DependentPhoneNumberContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 *
 * @returns {DependentPhoneNumberContext}
 */
function DependentPhoneNumberInstance(version, payload, accountSid, addressSid)
                                       {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    friendlyName: payload.friendly_name, // jshint ignore:line,
    phoneNumber: payload.phone_number, // jshint ignore:line,
    lata: payload.lata, // jshint ignore:line,
    rateCenter: payload.rate_center, // jshint ignore:line,
    latitude: payload.latitude, // jshint ignore:line,
    longitude: payload.longitude, // jshint ignore:line,
    region: payload.region, // jshint ignore:line,
    postalCode: payload.postal_code, // jshint ignore:line,
    isoCountry: payload.iso_country, // jshint ignore:line,
    addressRequirements: payload.address_requirements, // jshint ignore:line,
    capabilities: payload.capabilities, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    addressSid: addressSid,
  };
}

_.extend(DependentPhoneNumberInstance.prototype, InstanceResource.prototype);
DependentPhoneNumberInstance.prototype.constructor = DependentPhoneNumberInstance;

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'phoneNumber', {
  get: function() {
    return this._properties.phoneNumber;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'lata', {
  get: function() {
    return this._properties.lata;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'rateCenter', {
  get: function() {
    return this._properties.rateCenter;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'latitude', {
  get: function() {
    return this._properties.latitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'longitude', {
  get: function() {
    return this._properties.longitude;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'region', {
  get: function() {
    return this._properties.region;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'postalCode', {
  get: function() {
    return this._properties.postalCode;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'isoCountry', {
  get: function() {
    return this._properties.isoCountry;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'addressRequirements', {
  get: function() {
    return this._properties.addressRequirements;
  },
});

Object.defineProperty(DependentPhoneNumberInstance.prototype,
  'capabilities', {
  get: function() {
    return this._properties.capabilities;
  },
});

module.exports = {
  DependentPhoneNumberList: DependentPhoneNumberList,
  DependentPhoneNumberInstance: DependentPhoneNumberInstance,
  DependentPhoneNumberContext: DependentPhoneNumberContext
};