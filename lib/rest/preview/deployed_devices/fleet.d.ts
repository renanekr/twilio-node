/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import DeployedDevices = require('../DeployedDevices');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { CertificateList } from './fleet/certificate';
import { CertificateListInstance } from './fleet/certificate';
import { DeploymentList } from './fleet/deployment';
import { DeploymentListInstance } from './fleet/deployment';
import { DeviceList } from './fleet/device';
import { DeviceListInstance } from './fleet/device';
import { KeyList } from './fleet/key';
import { KeyListInstance } from './fleet/key';
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the FleetList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function FleetList(version: DeployedDevices): FleetListInstance;

/**
 * Options to pass to update
 *
 * @property defaultDeploymentSid - A default Deployment SID.
 * @property friendlyName - A human readable description for this Fleet.
 */
interface FleetInstanceUpdateOptions {
  defaultDeploymentSid?: string;
  friendlyName?: string;
}

interface FleetListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): FleetContext;
  /**
   * create a FleetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: FleetListInstanceCreateOptions, callback?: (error: Error | null, item: FleetInstance) => any): Promise<FleetInstance>;
  /**
   * Streams FleetInstance records from the API.
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
  each(opts?: FleetListInstanceEachOptions, callback?: (item: FleetInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a fleet
   *
   * @param sid - A string that uniquely identifies the Fleet.
   */
  get(sid: string): FleetContext;
  /**
   * Retrieve a single target page of FleetInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
  /**
   * Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: FleetListInstanceOptions, callback?: (error: Error | null, items: FleetInstance[]) => any): Promise<FleetInstance[]>;
  /**
   * Retrieve a single page of FleetInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: FleetListInstancePageOptions, callback?: (error: Error | null, items: FleetPage) => any): Promise<FleetPage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A human readable description for this Fleet.
 */
interface FleetListInstanceCreateOptions {
  friendlyName?: string;
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
interface FleetListInstanceEachOptions {
  callback?: (item: FleetInstance, done: (err?: Error) => void) => void;
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
interface FleetListInstanceOptions {
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
interface FleetListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface FleetPayload extends FleetResource, Page.TwilioResponsePayload {
}

interface FleetResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  default_deployment_sid: string;
  friendly_name: string;
  links: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface FleetSolution {
}


declare class FleetPage extends Page<DeployedDevices, FleetPayload, FleetResource, FleetInstance> {
  /**
   * Initialize the FleetPagePLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: DeployedDevices, response: Response<string>, solution: FleetSolution);

  /**
   * Build an instance of FleetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FleetPayload): FleetInstance;
}


declare class FleetInstance extends SerializableClass {
  /**
   * Initialize the FleetContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property sid - A string that uniquely identifies this Fleet.
   * @property url - URL of this Fleet.
   * @property uniqueName - A unique, addressable name of this Fleet.
   * @property friendlyName - A human readable description for this Fleet.
   * @property accountSid - The unique SID that identifies this Account.
   * @property defaultDeploymentSid - The unique SID that identifies this Fleet's default Deployment.
   * @property dateCreated - The date this Fleet was created.
   * @property dateUpdated - The date this Fleet was updated.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - A string that uniquely identifies the Fleet.
   */
  constructor(version: DeployedDevices, payload: FleetPayload, sid: string);

  private _proxy: FleetContext;
  accountSid: string;
  /**
   * Access the certificates
   */
  certificates(): CertificateListInstance;
  dateCreated: Date;
  dateUpdated: Date;
  defaultDeploymentSid: string;
  /**
   * Access the deployments
   */
  deployments(): DeploymentListInstance;
  /**
   * Access the devices
   */
  devices(): DeviceListInstance;
  /**
   * fetch a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FleetInstance) => any): void;
  friendlyName: string;
  /**
   * Access the keys
   */
  keys(): KeyListInstance;
  links: string;
  /**
   * remove a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FleetInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the FleetInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a FleetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FleetInstanceUpdateOptions, callback?: (error: Error | null, items: FleetInstance) => any): void;
  url: string;
}


declare class FleetContext {
  /**
   * Initialize the FleetContextPLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property devices - devices resource
   * @property deployments - deployments resource
   * @property certificates - certificates resource
   * @property keys - keys resource
   *
   * @param version - Version of the resource
   * @param sid - A string that uniquely identifies the Fleet.
   */
  constructor(version: DeployedDevices, sid: string);

  certificates: CertificateListInstance;
  deployments: DeploymentListInstance;
  devices: DeviceListInstance;
  /**
   * fetch a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
  keys: KeyListInstance;
  /**
   * remove a FleetInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: FleetInstance) => any): void;
  /**
   * update a FleetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: FleetInstanceUpdateOptions, callback?: (error: Error | null, items: FleetInstance) => any): Promise<FleetInstance>;
}

export { FleetContext, FleetInstance, FleetList, FleetListInstance, FleetListInstanceCreateOptions, FleetListInstanceEachOptions, FleetListInstanceOptions, FleetListInstancePageOptions, FleetPage, FleetPayload, FleetResource, FleetSolution }
