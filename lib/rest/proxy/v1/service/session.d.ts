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
import { InteractionList } from './session/interaction';
import { ParticipantList } from './session/participant';
import { SerializableClass } from '../../../../interfaces';

type SessionMode = 'message-only'|'voice-only'|'voice-and-message';

type SessionStatus = 'in-progress'|'closed'|'failed'|'unknown'|'completed';

/**
 * @description Initialize the SessionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 */
declare function SessionList(version: V1, serviceSid: string): SessionListInstance;

/**
 * Options to pass to update
 *
 * @property dateExpiry - The date this Session should expire
 * @property mode - The mode
 * @property participants - The participants
 * @property status - The Status of this Session
 * @property ttl - TTL for a Session, in seconds.
 */
interface SessionInstanceUpdateOptions {
  dateExpiry?: Date;
  mode?: SessionMode;
  participants?: string[];
  status?: SessionStatus;
  ttl?: number;
}

interface SessionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SessionContext;
  /**
   * create a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: SessionListInstanceCreateOptions, callback?: (error: Error | null, item: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * Streams SessionInstance records from the API.
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
  each(opts?: SessionListInstanceEachOptions, callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a session
   *
   * @param sid - A string that uniquely identifies this Session.
   */
  get(sid: string): SessionContext;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SessionListInstanceOptions, callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SessionListInstancePageOptions, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
}

/**
 * Options to pass to create
 *
 * @property dateExpiry - The date this Session should expire
 * @property mode - The Mode of this Session
 * @property participants - The participants
 * @property status - Session status
 * @property ttl - TTL for a Session, in seconds.
 * @property uniqueName - A unique, developer assigned name of this Session.
 */
interface SessionListInstanceCreateOptions {
  dateExpiry?: Date;
  mode?: SessionMode;
  participants?: string[];
  status?: SessionStatus;
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
 * @property status - The Status of this Session
 * @property uniqueName - The unique_name
 */
interface SessionListInstanceEachOptions {
  callback?: (item: SessionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  status?: SessionStatus;
  uniqueName?: string;
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
 * @property status - The Status of this Session
 * @property uniqueName - The unique_name
 */
interface SessionListInstanceOptions {
  limit?: number;
  pageSize?: number;
  status?: SessionStatus;
  uniqueName?: string;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - The Status of this Session
 * @property uniqueName - The unique_name
 */
interface SessionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: SessionStatus;
  uniqueName?: string;
}

interface SessionPayload extends SessionResource, Page.TwilioResponsePayload {
}

interface SessionResource {
  account_sid: string;
  closed_reason: string;
  date_created: Date;
  date_ended: Date;
  date_expiry: Date;
  date_last_interaction: Date;
  date_started: Date;
  date_updated: Date;
  links: string;
  mode: SessionMode;
  service_sid: string;
  sid: string;
  status: SessionStatus;
  ttl: number;
  unique_name: string;
  url: string;
}

interface SessionSolution {
  serviceSid?: string;
}


declare class SessionPage extends Page<V1, SessionPayload, SessionResource, SessionInstance> {
  /**
   * Initialize the SessionPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SessionSolution);

  /**
   * Build an instance of SessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SessionPayload): SessionInstance;
}


declare class SessionInstance extends SerializableClass {
  /**
   * Initialize the SessionContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Session.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property dateStarted - The date this Session was started
   * @property dateEnded - The date this Session was ended
   * @property dateLastInteraction - The date this Session last had an interaction
   * @property dateExpiry - The date this Session should expire
   * @property uniqueName - A unique, developer assigned identifier for this Session.
   * @property status - The Status of this Session
   * @property closedReason - Reason Session ended.
   * @property ttl - TTL for a Session, in seconds.
   * @property mode - The Mode of this Session
   * @property dateCreated - The date this Session was created
   * @property dateUpdated - The date this Session was last updated
   * @property url - The URL of this resource.
   * @property links - Nested resource URLs.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Session.
   */
  constructor(version: V1, payload: SessionPayload, serviceSid: string, sid: string);

  private _proxy: SessionContext;
  accountSid: string;
  closedReason: string;
  dateCreated: Date;
  dateEnded: Date;
  dateExpiry: Date;
  dateLastInteraction: Date;
  dateStarted: Date;
  dateUpdated: Date;
  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * Access the interactions
   */
  interactions();
  links: string;
  mode: SessionMode;
  /**
   * Access the participants
   */
  participants();
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SessionInstance) => any): void;
  serviceSid: string;
  sid: string;
  status: SessionStatus;
  /**
   * Produce a plain JSON object version of the SessionInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  ttl: number;
  uniqueName: string;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SessionInstanceUpdateOptions, callback?: (error: Error | null, items: SessionInstance) => any): void;
  url: string;
}


declare class SessionContext {
  /**
   * Initialize the SessionContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property interactions - interactions resource
   * @property participants - participants resource
   *
   * @param version - Version of the resource
   * @param serviceSid - Service Sid.
   * @param sid - A string that uniquely identifies this Session.
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SessionInstance) => any): void;
  interactions?: InteractionList;
  participants?: ParticipantList;
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SessionInstance) => any): void;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SessionInstanceUpdateOptions, callback?: (error: Error | null, items: SessionInstance) => any): void;
}

export { SessionContext, SessionInstance, SessionList, SessionListInstance, SessionListInstanceCreateOptions, SessionListInstanceEachOptions, SessionListInstanceOptions, SessionListInstancePageOptions, SessionPage, SessionPayload, SessionResource, SessionSolution }