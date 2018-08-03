/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the ApplicationList
 *
 * @param version - Version of the resource
 * @param accountSid - A string that uniquely identifies this resource
 */
declare function ApplicationList(version: V2010, accountSid: string): ApplicationListInstance;

/**
 * Options to pass to update
 *
 * @property apiVersion - The API version to use
 * @property friendlyName - Human readable description of this resource
 * @property messageStatusCallback - URL to make requests to with status updates
 * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
 * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
 * @property smsMethod - HTTP method to use with sms_url
 * @property smsStatusCallback - URL Twilio with request with status updates
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property statusCallback - URL to hit with status updates
 * @property statusCallbackMethod - HTTP method to use with the status callback
 * @property voiceCallerIdLookup - True or False
 * @property voiceFallbackMethod - HTTP method to use with the fallback url
 * @property voiceFallbackUrl - Fallback URL
 * @property voiceMethod - HTTP method to use with the URL
 * @property voiceUrl - URL Twilio will make requests to when relieving a call
 */
interface ApplicationInstanceUpdateOptions {
  apiVersion?: string;
  friendlyName?: string;
  messageStatusCallback?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsStatusCallback?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

interface ApplicationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ApplicationContext;
  /**
   * create a ApplicationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ApplicationListInstanceCreateOptions, callback?: (error: Error | null, item: ApplicationInstance) => any): Promise<ApplicationInstance>;
  /**
   * Streams ApplicationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: ApplicationListInstanceEachOptions, callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a application
   *
   * @param sid - Fetch by unique Application Sid
   */
  get(sid: string): ApplicationContext;
  /**
   * Retrieve a single target page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ApplicationPage) => any): Promise<ApplicationPage>;
  /**
   * Lists ApplicationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ApplicationListInstanceOptions, callback?: (error: Error | null, items: ApplicationInstance[]) => any): Promise<ApplicationInstance[]>;
  /**
   * Retrieve a single page of ApplicationInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ApplicationListInstancePageOptions, callback?: (error: Error | null, items: ApplicationPage) => any): Promise<ApplicationPage>;
}

/**
 * Options to pass to create
 *
 * @property apiVersion - The API version to use
 * @property friendlyName - A human readable description of the application
 * @property messageStatusCallback - URL to make requests to with status updates
 * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
 * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
 * @property smsMethod - HTTP method to use with sms_url
 * @property smsStatusCallback - URL Twilio with request with status updates
 * @property smsUrl - URL Twilio will request when receiving an SMS
 * @property statusCallback - URL to hit with status updates
 * @property statusCallbackMethod - HTTP method to use with the status callback
 * @property voiceCallerIdLookup - True or False
 * @property voiceFallbackMethod - HTTP method to use with the fallback url
 * @property voiceFallbackUrl - Fallback URL
 * @property voiceMethod - HTTP method to use with the URL
 * @property voiceUrl - URL Twilio will make requests to when relieving a call
 */
interface ApplicationListInstanceCreateOptions {
  apiVersion?: string;
  friendlyName: string;
  messageStatusCallback?: string;
  smsFallbackMethod?: string;
  smsFallbackUrl?: string;
  smsMethod?: string;
  smsStatusCallback?: string;
  smsUrl?: string;
  statusCallback?: string;
  statusCallbackMethod?: string;
  voiceCallerIdLookup?: boolean;
  voiceFallbackMethod?: string;
  voiceFallbackUrl?: string;
  voiceMethod?: string;
  voiceUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - Filter by friendly name
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ApplicationListInstanceEachOptions {
  callback?: (item: ApplicationInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - Filter by friendly name
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ApplicationListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - Filter by friendly name
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ApplicationListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ApplicationPayload extends ApplicationResource, Page.TwilioResponsePayload {
}

interface ApplicationResource {
  account_sid: string;
  api_version: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  message_status_callback: string;
  sid: string;
  sms_fallback_method: string;
  sms_fallback_url: string;
  sms_method: string;
  sms_status_callback: string;
  sms_url: string;
  status_callback: string;
  status_callback_method: string;
  uri: string;
  voice_caller_id_lookup: boolean;
  voice_fallback_method: string;
  voice_fallback_url: string;
  voice_method: string;
  voice_url: string;
}

interface ApplicationSolution {
  accountSid?: string;
}


declare class ApplicationPage extends Page<V2010, ApplicationPayload, ApplicationResource, ApplicationInstance> {
  /**
   * Initialize the ApplicationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: ApplicationSolution);

  /**
   * Build an instance of ApplicationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ApplicationPayload): ApplicationInstance;
}


declare class ApplicationInstance extends SerializableClass {
  /**
   * Initialize the ApplicationContext
   *
   * @property accountSid - A string that uniquely identifies this resource
   * @property apiVersion - The API version to use
   * @property dateCreated - Date this resource was created
   * @property dateUpdated - Date this resource was last updated
   * @property friendlyName - Human readable description of this resource
   * @property messageStatusCallback - URL to make requests to with status updates
   * @property sid - A string that uniquely identifies this resource
   * @property smsFallbackMethod - HTTP method to use with sms_fallback_method
   * @property smsFallbackUrl - Fallback URL if there's an error parsing TwiML
   * @property smsMethod - HTTP method to use with sms_url
   * @property smsStatusCallback - URL Twilio with request with status updates
   * @property smsUrl - URL Twilio will request when receiving an SMS
   * @property statusCallback - URL to hit with status updates
   * @property statusCallbackMethod - HTTP method to use with the status callback
   * @property uri - URI for this resource
   * @property voiceCallerIdLookup - True or False
   * @property voiceFallbackMethod - HTTP method to use with the fallback url
   * @property voiceFallbackUrl - Fallback URL
   * @property voiceMethod - HTTP method to use with the URL
   * @property voiceUrl - URL Twilio will make requests to when relieving a call
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A string that uniquely identifies this resource
   * @param sid - Fetch by unique Application Sid
   */
  constructor(version: V2010, payload: ApplicationPayload, accountSid: string, sid: string);

  private _proxy: ApplicationContext;
  accountSid: string;
  apiVersion: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ApplicationInstance) => any): void;
  friendlyName: string;
  messageStatusCallback: string;
  /**
   * remove a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ApplicationInstance) => any): void;
  sid: string;
  smsFallbackMethod: string;
  smsFallbackUrl: string;
  smsMethod: string;
  smsStatusCallback: string;
  smsUrl: string;
  statusCallback: string;
  statusCallbackMethod: string;
  /**
   * Produce a plain JSON object version of the ApplicationInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ApplicationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ApplicationInstanceUpdateOptions, callback?: (error: Error | null, items: ApplicationInstance) => any): void;
  uri: string;
  voiceCallerIdLookup: boolean;
  voiceFallbackMethod: string;
  voiceFallbackUrl: string;
  voiceMethod: string;
  voiceUrl: string;
}


declare class ApplicationContext {
  /**
   * Initialize the ApplicationContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique Application Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ApplicationInstance) => any): Promise<ApplicationInstance>;
  /**
   * remove a ApplicationInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ApplicationInstance) => any): void;
  /**
   * update a ApplicationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ApplicationInstanceUpdateOptions, callback?: (error: Error | null, items: ApplicationInstance) => any): Promise<ApplicationInstance>;
}

export { ApplicationContext, ApplicationInstance, ApplicationList, ApplicationListInstance, ApplicationListInstanceCreateOptions, ApplicationListInstanceEachOptions, ApplicationListInstanceOptions, ApplicationListInstancePageOptions, ApplicationPage, ApplicationPayload, ApplicationResource, ApplicationSolution }
