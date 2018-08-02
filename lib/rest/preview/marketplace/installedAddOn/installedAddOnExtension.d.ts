/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../../Marketplace');
import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the InstalledAddOnExtensionList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param installedAddOnSid - The installed_add_on_sid
 */
declare function InstalledAddOnExtensionList(version: Marketplace, installedAddOnSid: string): InstalledAddOnExtensionListInstance;

/**
 * Options to pass to update
 *
 * @property enabled - A Boolean indicating if the Extension will be invoked
 */
interface InstalledAddOnExtensionInstanceUpdateOptions {
  enabled: boolean;
}

interface InstalledAddOnExtensionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): InstalledAddOnExtensionContext;
  /**
   * Streams InstalledAddOnExtensionInstance records from the API.
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
  each(opts?: InstalledAddOnExtensionListInstanceEachOptions, callback?: (item: InstalledAddOnExtensionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a installed_add_on_extension
   *
   * @param sid - The unique Extension Sid
   */
  get(sid: string): InstalledAddOnExtensionContext;
  /**
   * Retrieve a single target page of InstalledAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any): Promise<InstalledAddOnExtensionPage>;
  /**
   * Lists InstalledAddOnExtensionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: InstalledAddOnExtensionListInstanceOptions, callback?: (error: Error | null, items: InstalledAddOnExtensionInstance[]) => any): Promise<InstalledAddOnExtensionInstance[]>;
  /**
   * Retrieve a single page of InstalledAddOnExtensionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: InstalledAddOnExtensionListInstancePageOptions, callback?: (error: Error | null, items: InstalledAddOnExtensionPage) => any): Promise<InstalledAddOnExtensionPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
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
interface InstalledAddOnExtensionListInstanceEachOptions {
  callback?: (item: InstalledAddOnExtensionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
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
interface InstalledAddOnExtensionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface InstalledAddOnExtensionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface InstalledAddOnExtensionPayload extends InstalledAddOnExtensionResource, Page.TwilioResponsePayload {
}

interface InstalledAddOnExtensionResource {
  enabled: boolean;
  friendly_name: string;
  installed_add_on_sid: string;
  product_name: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface InstalledAddOnExtensionSolution {
  installedAddOnSid?: string;
}


declare class InstalledAddOnExtensionPage extends Page<Marketplace, InstalledAddOnExtensionPayload, InstalledAddOnExtensionResource, InstalledAddOnExtensionInstance> {
  /**
   * Initialize the InstalledAddOnExtensionPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Marketplace, response: Response<string>, solution: InstalledAddOnExtensionSolution);

  /**
   * Build an instance of InstalledAddOnExtensionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InstalledAddOnExtensionPayload): InstalledAddOnExtensionInstance;
}


declare class InstalledAddOnExtensionInstance extends SerializableClass {
  /**
   * Initialize the InstalledAddOnExtensionContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Extension
   * @property installedAddOnSid - The installed_add_on_sid
   * @property friendlyName - A human-readable description of this Extension
   * @property productName - A human-readable description of the Extension's Product
   * @property uniqueName - The string that uniquely identifies this Extension
   * @property enabled - A Boolean indicating if the Extension will be invoked
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param installedAddOnSid - The installed_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Marketplace, payload: InstalledAddOnExtensionPayload, installedAddOnSid: string, sid: string);

  private _proxy: InstalledAddOnExtensionContext;
  enabled: boolean;
  /**
   * fetch a InstalledAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InstalledAddOnExtensionInstance) => any): void;
  friendlyName: string;
  installedAddOnSid: string;
  productName: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the InstalledAddOnExtensionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a InstalledAddOnExtensionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: InstalledAddOnExtensionInstanceUpdateOptions, callback?: (error: Error | null, items: InstalledAddOnExtensionInstance) => any): void;
  url: string;
}


declare class InstalledAddOnExtensionContext {
  /**
   * Initialize the InstalledAddOnExtensionContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param installedAddOnSid - The installed_add_on_sid
   * @param sid - The unique Extension Sid
   */
  constructor(version: Marketplace, installedAddOnSid: string, sid: string);

  /**
   * fetch a InstalledAddOnExtensionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InstalledAddOnExtensionInstance) => any): void;
  /**
   * update a InstalledAddOnExtensionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: InstalledAddOnExtensionInstanceUpdateOptions, callback?: (error: Error | null, items: InstalledAddOnExtensionInstance) => any): void;
}

export { InstalledAddOnExtensionContext, InstalledAddOnExtensionInstance, InstalledAddOnExtensionList, InstalledAddOnExtensionListInstance, InstalledAddOnExtensionListInstanceEachOptions, InstalledAddOnExtensionListInstanceOptions, InstalledAddOnExtensionListInstancePageOptions, InstalledAddOnExtensionPage, InstalledAddOnExtensionPayload, InstalledAddOnExtensionResource, InstalledAddOnExtensionSolution }