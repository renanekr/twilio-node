/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type InteractionResourceStatus = 'accepted'|'answered'|'busy'|'canceled'|'completed'|'deleted'|'delivered'|'delivery-unknown'|'failed'|'in-progress'|'initiated'|'no-answer'|'queued'|'received'|'receiving'|'ringing'|'scheduled'|'sending'|'sent'|'undelivered'|'unknown';

type InteractionType = 'message'|'voice'|'unknown';

/**
 * @description Initialize the InteractionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 */
declare function InteractionList(version: V1, serviceSid: string, sessionSid: string): InteractionListInstance;

interface InteractionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): InteractionContext;
  /**
   * Streams InteractionInstance records from the API.
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
  each(opts?: InteractionListInstanceEachOptions, callback?: (item: InteractionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a interaction
   *
   * @param sid - A string that uniquely identifies this Interaction.
   */
  get(sid: string): InteractionContext;
  /**
   * Retrieve a single target page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: InteractionPage) => any): Promise<InteractionPage>;
  /**
   * Lists InteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: InteractionListInstanceOptions, callback?: (error: Error | null, items: InteractionInstance[]) => any): Promise<InteractionInstance[]>;
  /**
   * Retrieve a single page of InteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: InteractionListInstancePageOptions, callback?: (error: Error | null, items: InteractionPage) => any): Promise<InteractionPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property inboundParticipantStatus - The inbound_participant_status
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property outboundParticipantStatus - The outbound_participant_status
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface InteractionListInstanceEachOptions {
  callback?: (item: InteractionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  inboundParticipantStatus?: InteractionResourceStatus;
  limit?: number;
  outboundParticipantStatus?: InteractionResourceStatus;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property inboundParticipantStatus - The inbound_participant_status
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property outboundParticipantStatus - The outbound_participant_status
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface InteractionListInstanceOptions {
  inboundParticipantStatus?: InteractionResourceStatus;
  limit?: number;
  outboundParticipantStatus?: InteractionResourceStatus;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property inboundParticipantStatus - The inbound_participant_status
 * @property outboundParticipantStatus - The outbound_participant_status
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface InteractionListInstancePageOptions {
  inboundParticipantStatus?: InteractionResourceStatus;
  outboundParticipantStatus?: InteractionResourceStatus;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface InteractionPayload extends InteractionResource, Page.TwilioResponsePayload {
}

interface InteractionResource {
  account_sid: string;
  data: string;
  date_created: Date;
  date_updated: Date;
  inbound_participant_sid: string;
  inbound_resource_sid: string;
  inbound_resource_status: InteractionResourceStatus;
  inbound_resource_type: string;
  inbound_resource_url: string;
  outbound_participant_sid: string;
  outbound_resource_sid: string;
  outbound_resource_status: InteractionResourceStatus;
  outbound_resource_type: string;
  outbound_resource_url: string;
  service_sid: string;
  session_sid: string;
  sid: string;
  type: InteractionType;
  url: string;
}

interface InteractionSolution {
  serviceSid?: string;
  sessionSid?: string;
}


declare class InteractionPage extends Page<V1, InteractionPayload, InteractionResource, InteractionInstance> {
  /**
   * Initialize the InteractionPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: InteractionSolution);

  /**
   * Build an instance of InteractionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: InteractionPayload): InteractionInstance;
}


declare class InteractionInstance extends SerializableClass {
  /**
   * Initialize the InteractionContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Interaction.
   * @property sessionSid - Session Sid.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property data - Further details about an interaction.
   * @property type - The Type of this Interaction
   * @property inboundParticipantSid - Inbound Participant Sid.
   * @property inboundResourceSid - Inbound Resource Sid.
   * @property inboundResourceStatus - The Inbound Resource Status of this Interaction
   * @property inboundResourceType - The type of the Inbound Resource, Call or Message.
   * @property inboundResourceUrl - The URL of the Twilio inbound resource.
   * @property outboundParticipantSid - Outbound Participant Sid.
   * @property outboundResourceSid - Outbound Resource Sid.
   * @property outboundResourceStatus - The Outbound Resource Status of this Interaction
   * @property outboundResourceType - The type of the Outbound Resource, Call or Message.
   * @property outboundResourceUrl - The URL of the Twilio outbound resource.
   * @property dateCreated - The date this Interaction was created
   * @property dateUpdated - The date this Interaction was last updated
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: V1, payload: InteractionPayload, serviceSid: string, sessionSid: string, sid: string);

  private _proxy: InteractionContext;
  accountSid: string;
  data: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InteractionInstance) => any): void;
  inboundParticipantSid: string;
  inboundResourceSid: string;
  inboundResourceStatus: InteractionResourceStatus;
  inboundResourceType: string;
  inboundResourceUrl: string;
  outboundParticipantSid: string;
  outboundResourceSid: string;
  outboundResourceStatus: InteractionResourceStatus;
  outboundResourceType: string;
  outboundResourceUrl: string;
  /**
   * remove a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: InteractionInstance) => any): void;
  serviceSid: string;
  sessionSid: string;
  sid: string;
  /**
   * Produce a plain JSON object version of the InteractionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  type: InteractionType;
  url: string;
}


declare class InteractionContext {
  /**
   * Initialize the InteractionContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param sid - A string that uniquely identifies this Interaction.
   */
  constructor(version: V1, serviceSid: string, sessionSid: string, sid: string);

  /**
   * fetch a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: InteractionInstance) => any): Promise<InteractionInstance>;
  /**
   * remove a InteractionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: InteractionInstance) => any): void;
}

export { InteractionContext, InteractionInstance, InteractionList, InteractionListInstance, InteractionListInstanceEachOptions, InteractionListInstanceOptions, InteractionListInstancePageOptions, InteractionPage, InteractionPayload, InteractionResource, InteractionSolution }
