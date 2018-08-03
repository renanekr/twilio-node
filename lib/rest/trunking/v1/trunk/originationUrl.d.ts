/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the OriginationUrlList
 *
 * @param version - Version of the resource
 * @param trunkSid - The unique ID of the Trunk that owns this Origination URL.
 */
declare function OriginationUrlList(version: V1, trunkSid: string): OriginationUrlListInstance;

/**
 * Options to pass to update
 *
 * @property enabled - A boolean value indicating whether the URL is enabled or disabled.
 * @property friendlyName - A human readable descriptive text, up to 64 characters long.
 * @property priority - Priority ranks the importance of the URI.
 * @property sipUrl - The SIP address you want Twilio to route your Origination calls to.
 * @property weight - Weight is used to determine the share of load when more than one URI has the same priority.
 */
interface OriginationUrlInstanceUpdateOptions {
  enabled?: boolean;
  friendlyName?: string;
  priority?: number;
  sipUrl?: string;
  weight?: number;
}

interface OriginationUrlListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): OriginationUrlContext;
  /**
   * create a OriginationUrlInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: OriginationUrlListInstanceCreateOptions, callback?: (error: Error | null, item: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
  /**
   * Streams OriginationUrlInstance records from the API.
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
  each(opts?: OriginationUrlListInstanceEachOptions, callback?: (item: OriginationUrlInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a origination_url
   *
   * @param sid - The sid
   */
  get(sid: string): OriginationUrlContext;
  /**
   * Retrieve a single target page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: OriginationUrlPage) => any): Promise<OriginationUrlPage>;
  /**
   * Lists OriginationUrlInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: OriginationUrlListInstanceOptions, callback?: (error: Error | null, items: OriginationUrlInstance[]) => any): Promise<OriginationUrlInstance[]>;
  /**
   * Retrieve a single page of OriginationUrlInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: OriginationUrlListInstancePageOptions, callback?: (error: Error | null, items: OriginationUrlPage) => any): Promise<OriginationUrlPage>;
}

/**
 * Options to pass to create
 *
 * @property enabled - A boolean value indicating whether the URL is enabled or disabled.
 * @property friendlyName - A human readable descriptive text, up to 64 characters long.
 * @property priority - Priority ranks the importance of the URI.
 * @property sipUrl - The SIP address you want Twilio to route your Origination calls to.
 * @property weight - Weight is used to determine the share of load when more than one URI has the same priority.
 */
interface OriginationUrlListInstanceCreateOptions {
  enabled: boolean;
  friendlyName: string;
  priority: number;
  sipUrl: string;
  weight: number;
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
interface OriginationUrlListInstanceEachOptions {
  callback?: (item: OriginationUrlInstance, done: (err?: Error) => void) => void;
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
interface OriginationUrlListInstanceOptions {
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
interface OriginationUrlListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface OriginationUrlPayload extends OriginationUrlResource, Page.TwilioResponsePayload {
}

interface OriginationUrlResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  enabled: boolean;
  friendly_name: string;
  priority: number;
  sid: string;
  sip_url: string;
  trunk_sid: string;
  url: string;
  weight: number;
}

interface OriginationUrlSolution {
  trunkSid?: string;
}


declare class OriginationUrlPage extends Page<V1, OriginationUrlPayload, OriginationUrlResource, OriginationUrlInstance> {
  /**
   * Initialize the OriginationUrlPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: OriginationUrlSolution);

  /**
   * Build an instance of OriginationUrlInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: OriginationUrlPayload): OriginationUrlInstance;
}


declare class OriginationUrlInstance extends SerializableClass {
  /**
   * Initialize the OriginationUrlContext
   *
   * @property accountSid - The unique ID of the Account that owns this Origination URL.
   * @property sid - A 34 character string that uniquely identifies the Origination URL in this Twilio Trunk.
   * @property trunkSid - The unique ID of the Trunk that owns this Origination URL.
   * @property weight - Weight is used to determine the share of load when more than one URI has the same priority.
   * @property enabled - A boolean value indicating whether the URL is enabled or disabled.
   * @property sipUrl - The SIP address you want Twilio to route your Origination calls to.
   * @property friendlyName - A human readable descriptive text, up to 64 characters long.
   * @property priority - Priority ranks the importance of the URI.
   * @property dateCreated - The date this Activity was created.
   * @property dateUpdated - The date this Activity was updated.
   * @property url - The URL for this resource, relative to https://trunking.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param trunkSid - The unique ID of the Trunk that owns this Origination URL.
   * @param sid - The sid
   */
  constructor(version: V1, payload: OriginationUrlPayload, trunkSid: string, sid: string);

  private _proxy: OriginationUrlContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  enabled: boolean;
  /**
   * fetch a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: OriginationUrlInstance) => any): void;
  friendlyName: string;
  priority: number;
  /**
   * remove a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: OriginationUrlInstance) => any): void;
  sid: string;
  sipUrl: string;
  /**
   * Produce a plain JSON object version of the OriginationUrlInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  trunkSid: string;
  /**
   * update a OriginationUrlInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: OriginationUrlInstanceUpdateOptions, callback?: (error: Error | null, items: OriginationUrlInstance) => any): void;
  url: string;
  weight: number;
}


declare class OriginationUrlContext {
  /**
   * Initialize the OriginationUrlContext
   *
   * @param version - Version of the resource
   * @param trunkSid - The trunk_sid
   * @param sid - The sid
   */
  constructor(version: V1, trunkSid: string, sid: string);

  /**
   * fetch a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
  /**
   * remove a OriginationUrlInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: OriginationUrlInstance) => any): void;
  /**
   * update a OriginationUrlInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: OriginationUrlInstanceUpdateOptions, callback?: (error: Error | null, items: OriginationUrlInstance) => any): Promise<OriginationUrlInstance>;
}

export { OriginationUrlContext, OriginationUrlInstance, OriginationUrlList, OriginationUrlListInstance, OriginationUrlListInstanceCreateOptions, OriginationUrlListInstanceEachOptions, OriginationUrlListInstanceOptions, OriginationUrlListInstancePageOptions, OriginationUrlPage, OriginationUrlPayload, OriginationUrlResource, OriginationUrlSolution }
