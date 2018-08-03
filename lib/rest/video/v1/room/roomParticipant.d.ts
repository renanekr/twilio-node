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
import { PublishedTrackList } from './roomParticipant/roomParticipantPublishedTrack';
import { PublishedTrackListInstance } from './roomParticipant/roomParticipantPublishedTrack';
import { SerializableClass } from '../../../../interfaces';
import { SubscribedTrackList } from './roomParticipant/roomParticipantSubscribedTrack';
import { SubscribedTrackListInstance } from './roomParticipant/roomParticipantSubscribedTrack';

type ParticipantStatus = 'connected'|'disconnected';

/**
 * @description Initialize the ParticipantList
 *
 * @param version - Version of the resource
 * @param roomSid - A system-generated 34-character string that uniquely identifies.
 */
declare function ParticipantList(version: V1, roomSid: string): ParticipantListInstance;

/**
 * Options to pass to update
 *
 * @property status - Set to disconnected to remove participant.
 */
interface ParticipantInstanceUpdateOptions {
  status?: ParticipantStatus;
}

interface ParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ParticipantContext;
  /**
   * Streams ParticipantInstance records from the API.
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
  each(opts?: ParticipantListInstanceEachOptions, callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a participant
   *
   * @param sid - The sid
   */
  get(sid: string): ParticipantContext;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: ParticipantListInstanceOptions, callback?: (error: Error | null, items: ParticipantInstance[]) => any): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: ParticipantListInstancePageOptions, callback?: (error: Error | null, items: ParticipantPage) => any): Promise<ParticipantPage>;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property dateCreatedAfter - Only show Participants that started after this date, given as an UTC ISO 8601 Timestamp.
 * @property dateCreatedBefore - Only show Participants that started before this date, given as an UTC ISO 8601 Timestamp.
 * @property done - Function to be called upon completion of streaming
 * @property identity - Only show Participants that connected to the Room using the provided Identity.
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
 * @property status - Only show Participants with the given Status.
 */
interface ParticipantListInstanceEachOptions {
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  done?: Function;
  identity?: string;
  limit?: number;
  pageSize?: number;
  status?: ParticipantStatus;
}

/**
 * Options to pass to list
 *
 * @property dateCreatedAfter - Only show Participants that started after this date, given as an UTC ISO 8601 Timestamp.
 * @property dateCreatedBefore - Only show Participants that started before this date, given as an UTC ISO 8601 Timestamp.
 * @property identity - Only show Participants that connected to the Room using the provided Identity.
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
 * @property status - Only show Participants with the given Status.
 */
interface ParticipantListInstanceOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  identity?: string;
  limit?: number;
  pageSize?: number;
  status?: ParticipantStatus;
}

/**
 * Options to pass to page
 *
 * @property dateCreatedAfter - Only show Participants that started after this date, given as an UTC ISO 8601 Timestamp.
 * @property dateCreatedBefore - Only show Participants that started before this date, given as an UTC ISO 8601 Timestamp.
 * @property identity - Only show Participants that connected to the Room using the provided Identity.
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - Only show Participants with the given Status.
 */
interface ParticipantListInstancePageOptions {
  dateCreatedAfter?: Date;
  dateCreatedBefore?: Date;
  identity?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: ParticipantStatus;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  duration: number;
  end_time: Date;
  identity: string;
  links: string;
  room_sid: string;
  sid: string;
  start_time: Date;
  status: ParticipantStatus;
  url: string;
}

interface ParticipantSolution {
  roomSid?: string;
}


declare class ParticipantPage extends Page<V1, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: ParticipantSolution);

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantPayload): ParticipantInstance;
}


declare class ParticipantInstance extends SerializableClass {
  /**
   * Initialize the ParticipantContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property roomSid - A system-generated 34-character string that uniquely identifies.
   * @property accountSid - The unique ID of the Account associated with this Room.
   * @property status - A string representing the status of the Participant.
   * @property identity - The unique name identifier that is assigned to this Participant.
   * @property dateCreated - The date that this resource was created, given as a UTC ISO 8601 Timestamp.
   * @property dateUpdated - The date that this resource was last updated, given as a UTC ISO 8601 Timestamp.
   * @property startTime - The time of Participant connected to the Room, given as a UTC ISO 8601 Timestamp.
   * @property endTime - The time of Participant disconnected from the Room, given as a UTC ISO 8601 Timestamp.
   * @property duration - Duration of time in seconds this Participant was connected.
   * @property url - The absolute URL for this resource.
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - A system-generated 34-character string that uniquely identifies.
   * @param sid - The sid
   */
  constructor(version: V1, payload: ParticipantPayload, roomSid: string, sid: string);

  private _proxy: ParticipantContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  duration: number;
  endTime: Date;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  identity: string;
  links: string;
  /**
   * Access the publishedTracks
   */
  publishedTracks(): PublishedTrackListInstance;
  roomSid: string;
  sid: string;
  startTime: Date;
  status: ParticipantStatus;
  /**
   * Access the subscribedTracks
   */
  subscribedTracks(): SubscribedTrackListInstance;
  /**
   * Produce a plain JSON object version of the ParticipantInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  url: string;
}


declare class ParticipantContext {
  /**
   * Initialize the ParticipantContext
   *
   * @property publishedTracks - publishedTracks resource
   * @property subscribedTracks - subscribedTracks resource
   *
   * @param version - Version of the resource
   * @param roomSid - The room_sid
   * @param sid - The sid
   */
  constructor(version: V1, roomSid: string, sid: string);

  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<ParticipantInstance>;
  publishedTracks: PublishedTrackListInstance;
  subscribedTracks: SubscribedTrackListInstance;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: ParticipantInstance) => any): Promise<ParticipantInstance>;
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantListInstanceEachOptions, ParticipantListInstanceOptions, ParticipantListInstancePageOptions, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution }
