/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2010 = require('../../../../V2010');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the IpAddressList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account that responsible for this resource.
 * @param ipAccessControlListSid - The ip_access_control_list_sid
 */
declare function IpAddressList(version: V2010, accountSid: string, ipAccessControlListSid: string): IpAddressListInstance;

/**
 * Options to pass to update
 *
 * @property cidrPrefixLength - The cidr_prefix_length
 * @property friendlyName - The friendly_name
 * @property ipAddress - The ip_address
 */
interface IpAddressInstanceUpdateOptions {
  cidrPrefixLength?: number;
  friendlyName?: string;
  ipAddress?: string;
}

interface IpAddressListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): IpAddressContext;
  /**
   * create a IpAddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: IpAddressListInstanceCreateOptions, callback?: (error: Error | null, item: IpAddressInstance) => any): Promise<IpAddressInstance>;
  /**
   * Streams IpAddressInstance records from the API.
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
  each(opts?: IpAddressListInstanceEachOptions, callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a ip_address
   *
   * @param sid - The sid
   */
  get(sid: string): IpAddressContext;
  /**
   * Retrieve a single target page of IpAddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: IpAddressPage) => any): Promise<IpAddressPage>;
  /**
   * Lists IpAddressInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: IpAddressListInstanceOptions, callback?: (error: Error | null, items: IpAddressInstance[]) => any): Promise<IpAddressInstance[]>;
  /**
   * Retrieve a single page of IpAddressInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: IpAddressListInstancePageOptions, callback?: (error: Error | null, items: IpAddressPage) => any): Promise<IpAddressPage>;
}

/**
 * Options to pass to create
 *
 * @property cidrPrefixLength - The cidr_prefix_length
 * @property friendlyName - The friendly_name
 * @property ipAddress - The ip_address
 */
interface IpAddressListInstanceCreateOptions {
  cidrPrefixLength?: number;
  friendlyName: string;
  ipAddress: string;
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
interface IpAddressListInstanceEachOptions {
  callback?: (item: IpAddressInstance, done: (err?: Error) => void) => void;
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
interface IpAddressListInstanceOptions {
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
interface IpAddressListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface IpAddressPayload extends IpAddressResource, Page.TwilioResponsePayload {
}

interface IpAddressResource {
  account_sid: string;
  cidr_prefix_length: number;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  ip_access_control_list_sid: string;
  ip_address: string;
  sid: string;
  uri: string;
}

interface IpAddressSolution {
  accountSid?: string;
  ipAccessControlListSid?: string;
}


declare class IpAddressPage extends Page<V2010, IpAddressPayload, IpAddressResource, IpAddressInstance> {
  /**
   * Initialize the IpAddressPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: IpAddressSolution);

  /**
   * Build an instance of IpAddressInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: IpAddressPayload): IpAddressInstance;
}


declare class IpAddressInstance extends SerializableClass {
  /**
   * Initialize the IpAddressContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account that responsible for this resource.
   * @property friendlyName - A human readable descriptive text for this resource, up to 64 characters long.
   * @property ipAddress - An IP address in dotted decimal notation from which you want to accept traffic. Any SIP requests from this IP address will be allowed by Twilio. IPv4 only supported today.
   * @property cidrPrefixLength - An integer representing the length of the CIDR prefix to use with this IP address when accepting traffic. By default the entire IP address is used.
   * @property ipAccessControlListSid - The ip_access_control_list_sid
   * @property dateCreated - The date that this resource was created, given as GMT in RFC 2822 format.
   * @property dateUpdated - The date that this resource was last updated, given as GMT in RFC 2822 format.
   * @property uri - The URI for this resource, relative to https://api.twilio.com
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account that responsible for this resource.
   * @param ipAccessControlListSid - The ip_access_control_list_sid
   * @param sid - The sid
   */
  constructor(version: V2010, payload: IpAddressPayload, accountSid: string, ipAccessControlListSid: string, sid: string);

  private _proxy: IpAddressContext;
  accountSid: string;
  cidrPrefixLength: number;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a IpAddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IpAddressInstance) => any): void;
  friendlyName: string;
  ipAccessControlListSid: string;
  ipAddress: string;
  /**
   * remove a IpAddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IpAddressInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the IpAddressInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a IpAddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IpAddressInstanceUpdateOptions, callback?: (error: Error | null, items: IpAddressInstance) => any): void;
  uri: string;
}


declare class IpAddressContext {
  /**
   * Initialize the IpAddressContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param ipAccessControlListSid - The ip_access_control_list_sid
   * @param sid - The sid
   */
  constructor(version: V2010, accountSid: string, ipAccessControlListSid: string, sid: string);

  /**
   * fetch a IpAddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: IpAddressInstance) => any): Promise<IpAddressInstance>;
  /**
   * remove a IpAddressInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: IpAddressInstance) => any): void;
  /**
   * update a IpAddressInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: IpAddressInstanceUpdateOptions, callback?: (error: Error | null, items: IpAddressInstance) => any): Promise<IpAddressInstance>;
}

export { IpAddressContext, IpAddressInstance, IpAddressList, IpAddressListInstance, IpAddressListInstanceCreateOptions, IpAddressListInstanceEachOptions, IpAddressListInstanceOptions, IpAddressListInstancePageOptions, IpAddressPage, IpAddressPayload, IpAddressResource, IpAddressSolution }
