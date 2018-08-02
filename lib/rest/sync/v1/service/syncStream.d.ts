/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';
import { StreamMessageList } from './syncStream/streamMessage';

/**
 * @description Initialize the SyncStreamList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Instance SID.
 */
declare function SyncStreamList(version: V1, serviceSid: string): SyncStreamListInstance;

/**
 * Options to pass to update
 *
 * @property ttl - Stream TTL.
 */
interface SyncStreamInstanceUpdateOptions {
  ttl?: number;
}

interface SyncStreamListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncStreamContext;
  /**
   * create a SyncStreamInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: SyncStreamListInstanceCreateOptions, callback?: (error: Error | null, item: SyncStreamInstance) => any): Promise<SyncStreamInstance>;
  /**
   * Streams SyncStreamInstance records from the API.
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
  each(opts?: SyncStreamListInstanceEachOptions, callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_stream
   *
   * @param sid - Stream SID or unique name.
   */
  get(sid: string): SyncStreamContext;
  /**
   * Retrieve a single target page of SyncStreamInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncStreamPage) => any): Promise<SyncStreamPage>;
  /**
   * Lists SyncStreamInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncStreamListInstanceOptions, callback?: (error: Error | null, items: SyncStreamInstance[]) => any): Promise<SyncStreamInstance[]>;
  /**
   * Retrieve a single page of SyncStreamInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncStreamListInstancePageOptions, callback?: (error: Error | null, items: SyncStreamPage) => any): Promise<SyncStreamPage>;
}

/**
 * Options to pass to create
 *
 * @property ttl - Stream TTL.
 * @property uniqueName - Stream unique name.
 */
interface SyncStreamListInstanceCreateOptions {
  ttl?: number;
  uniqueName?: string;
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
interface SyncStreamListInstanceEachOptions {
  callback?: (item: SyncStreamInstance, done: (err?: Error) => void) => void;
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
interface SyncStreamListInstanceOptions {
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
interface SyncStreamListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncStreamPayload extends SyncStreamResource, Page.TwilioResponsePayload {
}

interface SyncStreamResource {
  account_sid: string;
  created_by: string;
  date_created: Date;
  date_expires: Date;
  date_updated: Date;
  links: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface SyncStreamSolution {
  serviceSid?: string;
}


declare class SyncStreamPage extends Page<V1, SyncStreamPayload, SyncStreamResource, SyncStreamInstance> {
  /**
   * Initialize the SyncStreamPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncStreamSolution);

  /**
   * Build an instance of SyncStreamInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncStreamPayload): SyncStreamInstance;
}


declare class SyncStreamInstance extends SerializableClass {
  /**
   * Initialize the SyncStreamContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - Stream SID.
   * @property uniqueName - Stream unique name.
   * @property accountSid - Twilio Account SID.
   * @property serviceSid - Service Instance SID.
   * @property url - URL of this Stream.
   * @property links - Nested resource URLs.
   * @property dateExpires - The date this Stream expires.
   * @property dateCreated - The date this Stream was created.
   * @property dateUpdated - The date this Stream was updated.
   * @property createdBy - Identity of the Stream creator.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Instance SID.
   * @param sid - Stream SID or unique name.
   */
  constructor(version: V1, payload: SyncStreamPayload, serviceSid: string, sid: string);

  private _proxy: SyncStreamContext;
  accountSid: string;
  createdBy: string;
  dateCreated: Date;
  dateExpires: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncStreamInstance) => any): void;
  links: string;
  /**
   * remove a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncStreamInstance) => any): void;
  serviceSid: string;
  sid: string;
  /**
   * Access the streamMessages
   */
  streamMessages();
  /**
   * Produce a plain JSON object version of the SyncStreamInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a SyncStreamInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncStreamInstanceUpdateOptions, callback?: (error: Error | null, items: SyncStreamInstance) => any): void;
  url: string;
}


declare class SyncStreamContext {
  /**
   * Initialize the SyncStreamContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property streamMessages - streamMessages resource
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Instance SID or unique name.
   * @param sid - Stream SID or unique name.
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncStreamInstance) => any): void;
  /**
   * remove a SyncStreamInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncStreamInstance) => any): void;
  streamMessages?: StreamMessageList;
  /**
   * update a SyncStreamInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncStreamInstanceUpdateOptions, callback?: (error: Error | null, items: SyncStreamInstance) => any): void;
}

export { SyncStreamContext, SyncStreamInstance, SyncStreamList, SyncStreamListInstance, SyncStreamListInstanceCreateOptions, SyncStreamListInstanceEachOptions, SyncStreamListInstanceOptions, SyncStreamListInstancePageOptions, SyncStreamPage, SyncStreamPayload, SyncStreamResource, SyncStreamSolution }
