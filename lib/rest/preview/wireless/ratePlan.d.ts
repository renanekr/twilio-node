/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import Wireless = require('../Wireless');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the RatePlanList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function RatePlanList(version: Wireless): RatePlanListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - The friendly_name
 * @property uniqueName - The unique_name
 */
interface RatePlanInstanceUpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

interface RatePlanListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RatePlanContext;
  /**
   * create a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: RatePlanListInstanceCreateOptions, callback?: (error: Error | null, item: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * Streams RatePlanInstance records from the API.
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
  each(opts?: RatePlanListInstanceEachOptions, callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a rate_plan
   *
   * @param sid - The sid
   */
  get(sid: string): RatePlanContext;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RatePlanListInstanceOptions, callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RatePlanListInstancePageOptions, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
}

/**
 * Options to pass to create
 *
 * @property commandsEnabled - The commands_enabled
 * @property dataEnabled - The data_enabled
 * @property dataLimit - The data_limit
 * @property dataMetering - The data_metering
 * @property friendlyName - The friendly_name
 * @property internationalRoaming - The international_roaming
 * @property messagingEnabled - The messaging_enabled
 * @property nationalRoamingEnabled - The national_roaming_enabled
 * @property uniqueName - The unique_name
 * @property voiceEnabled - The voice_enabled
 */
interface RatePlanListInstanceCreateOptions {
  commandsEnabled?: boolean;
  dataEnabled?: boolean;
  dataLimit?: number;
  dataMetering?: string;
  friendlyName?: string;
  internationalRoaming?: string[];
  messagingEnabled?: boolean;
  nationalRoamingEnabled?: boolean;
  uniqueName?: string;
  voiceEnabled?: boolean;
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
interface RatePlanListInstanceEachOptions {
  callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
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
interface RatePlanListInstanceOptions {
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
interface RatePlanListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface RatePlanPayload extends RatePlanResource, Page.TwilioResponsePayload {
}

interface RatePlanResource {
  account_sid: string;
  data_enabled: boolean;
  data_limit: number;
  data_metering: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  international_roaming: string;
  messaging_enabled: boolean;
  national_roaming_enabled: boolean;
  sid: string;
  unique_name: string;
  url: string;
  voice_enabled: boolean;
}

interface RatePlanSolution {
}


declare class RatePlanPage extends Page<Wireless, RatePlanPayload, RatePlanResource, RatePlanInstance> {
  /**
   * Initialize the RatePlanPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Wireless, response: Response<string>, solution: RatePlanSolution);

  /**
   * Build an instance of RatePlanInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RatePlanPayload): RatePlanInstance;
}


declare class RatePlanInstance extends SerializableClass {
  /**
   * Initialize the RatePlanContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - The sid
   * @property uniqueName - The unique_name
   * @property accountSid - The account_sid
   * @property friendlyName - The friendly_name
   * @property dataEnabled - The data_enabled
   * @property dataMetering - The data_metering
   * @property dataLimit - The data_limit
   * @property messagingEnabled - The messaging_enabled
   * @property voiceEnabled - The voice_enabled
   * @property nationalRoamingEnabled - The national_roaming_enabled
   * @property internationalRoaming - The international_roaming
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: Wireless, payload: RatePlanPayload, sid: string);

  private _proxy: RatePlanContext;
  accountSid: string;
  dataEnabled: boolean;
  dataLimit: number;
  dataMetering: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  friendlyName: string;
  internationalRoaming: string;
  messagingEnabled: boolean;
  nationalRoamingEnabled: boolean;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the RatePlanInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: RatePlanInstanceUpdateOptions, callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  url: string;
  voiceEnabled: boolean;
}


declare class RatePlanContext {
  /**
   * Initialize the RatePlanContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: Wireless, sid: string);

  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RatePlanInstance) => any): void;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: RatePlanInstanceUpdateOptions, callback?: (error: Error | null, items: RatePlanInstance) => any): void;
}

export { RatePlanContext, RatePlanInstance, RatePlanList, RatePlanListInstance, RatePlanListInstanceCreateOptions, RatePlanListInstanceEachOptions, RatePlanListInstanceOptions, RatePlanListInstancePageOptions, RatePlanPage, RatePlanPayload, RatePlanResource, RatePlanSolution }