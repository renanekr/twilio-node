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
 * @description Initialize the DataSessionList
 *
 * @param version - Version of the resource
 * @param simSid - The unique id of the SIM resource that this Data Session is for.
 */
declare function DataSessionList(version: V1, simSid: string): DataSessionListInstance;

interface DataSessionListInstance {
  /**
   * Streams DataSessionInstance records from the API.
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
  each(opts?: DataSessionListInstanceEachOptions, callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Retrieve a single target page of DataSessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: DataSessionPage) => any): Promise<DataSessionPage>;
  /**
   * Lists DataSessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: DataSessionListInstanceOptions, callback?: (error: Error | null, items: DataSessionInstance[]) => any): Promise<DataSessionInstance[]>;
  /**
   * Retrieve a single page of DataSessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: DataSessionListInstancePageOptions, callback?: (error: Error | null, items: DataSessionPage) => any): Promise<DataSessionPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property end - The end
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
 * @property start - The start
 */
interface DataSessionListInstanceEachOptions {
  callback?: (item: DataSessionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  end?: Date;
  limit?: number;
  pageSize?: number;
  start?: Date;
}

/**
 * Options to pass to list
 *
 * @property end - The end
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
 * @property start - The start
 */
interface DataSessionListInstanceOptions {
  end?: Date;
  limit?: number;
  pageSize?: number;
  start?: Date;
}

/**
 * Options to pass to page
 *
 * @property end - The end
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property start - The start
 */
interface DataSessionListInstancePageOptions {
  end?: Date;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  start?: Date;
}

interface DataSessionPayload extends DataSessionResource, Page.TwilioResponsePayload {
}

interface DataSessionResource {
  account_sid: string;
  cell_id: string;
  cell_location_estimate: string;
  end: Date;
  last_updated: Date;
  operator_country: string;
  operator_mcc: string;
  operator_mnc: string;
  operator_name: string;
  packets_downloaded: number;
  packets_uploaded: number;
  radio_link: string;
  sid: string;
  sim_sid: string;
  start: Date;
}

interface DataSessionSolution {
  simSid?: string;
}


declare class DataSessionPage extends Page<V1, DataSessionPayload, DataSessionResource, DataSessionInstance> {
  /**
   * Initialize the DataSessionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: DataSessionSolution);

  /**
   * Build an instance of DataSessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: DataSessionPayload): DataSessionInstance;
}


declare class DataSessionInstance extends SerializableClass {
  /**
   * Initialize the DataSessionContext
   *
   * @property sid - The unique id of the Data Session resource that this Data Record is for.
   * @property simSid - The unique id of the SIM resource that this Data Session is for.
   * @property accountSid - The unique id of the Account that the SIM belongs to.
   * @property radioLink - The generation of wireless technology that the device was attached to the cellular tower using.
   * @property operatorMcc - The 'mobile country code' is the unique id of the home country where the Data Session took place.
   * @property operatorMnc - The 'mobile network code' is the unique id specific to the mobile operator network where the Data Session took place.
   * @property operatorCountry - The three letter country code representing where the device's Data Session took place.
   * @property operatorName - The friendly name of the mobile operator network that the SIM-connected device is attached to.
   * @property cellId - The unique id of the cellular tower that the device was attached to at the moment when the Data Session was last updated.
   * @property cellLocationEstimate - An object representing the estimated location where the device's Data Session took place.
   * @property packetsUploaded - The number of packets uploaded by the device between the start time and when the Data Session was last updated.
   * @property packetsDownloaded - The number of packets downloaded by the device between the start time and when the Data Session was last updated.
   * @property lastUpdated - The date that this resource was last updated, given as GMT in ISO 8601 format.
   * @property start - The date that this Data Session started, given as GMT in ISO 8601 format.
   * @property end - The date that this record ended, given as GMT in ISO 8601 format.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param simSid - The unique id of the SIM resource that this Data Session is for.
   */
  constructor(version: V1, payload: DataSessionPayload, simSid: string);

  accountSid: string;
  cellId: string;
  cellLocationEstimate: string;
  end: Date;
  lastUpdated: Date;
  operatorCountry: string;
  operatorMcc: string;
  operatorMnc: string;
  operatorName: string;
  packetsDownloaded: number;
  packetsUploaded: number;
  radioLink: string;
  sid: string;
  simSid: string;
  start: Date;
  /**
   * Produce a plain JSON object version of the DataSessionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
}

export { DataSessionInstance, DataSessionList, DataSessionListInstance, DataSessionListInstanceEachOptions, DataSessionListInstanceOptions, DataSessionListInstancePageOptions, DataSessionPage, DataSessionPayload, DataSessionResource, DataSessionSolution }