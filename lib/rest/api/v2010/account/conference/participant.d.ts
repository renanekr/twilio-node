/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

type ParticipantStatus = 'queued'|'connecting'|'ringing'|'connected'|'complete'|'failed';

/**
 * @description Initialize the ParticipantList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 * @param conferenceSid - A string that uniquely identifies this conference
 */
declare function ParticipantList(version: V2010, accountSid: string, conferenceSid: string): ParticipantListInstance;

/**
 * Options to pass to update
 *
 * @property announceMethod - Specify GET or POST, defaults to POST
 * @property announceUrl - The 'AnnounceUrl' attribute lets you specify a URL for announcing something to the participant.
 * @property hold - Specifying true will hold the participant, while false will un-hold.
 * @property holdMethod - Specify GET or POST, defaults to GET
 * @property holdUrl - The 'HoldUrl' attribute lets you specify a URL for music that plays when a participant is held.
 * @property muted - Indicates if the participant should be muted
 */
interface ParticipantInstanceUpdateOptions {
  announceMethod?: string;
  announceUrl?: string;
  hold?: boolean;
  holdMethod?: string;
  holdUrl?: string;
  muted?: boolean;
}

interface ParticipantListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): ParticipantContext;
  /**
   * create a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: ParticipantListInstanceCreateOptions, callback?: (error: Error | null, item: ParticipantInstance) => any): Promise<ParticipantInstance>;
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
   * @param callSid - Fetch by unique participant Call SID
   */
  get(callSid: string): ParticipantContext;
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
 * Options to pass to create
 *
 * @property beep - Play a beep when the participant joins the conference.
 * @property conferenceRecord - Record the conference.
 * @property conferenceRecordingStatusCallback - Conference recording callback URL.
 * @property conferenceRecordingStatusCallbackEvent - The conference_recording_status_callback_event
 * @property conferenceRecordingStatusCallbackMethod - Method Twilio should use to request the `ConferenceRecordingStatusCallback` URL.
 * @property conferenceStatusCallback - Callback URL for conference events.
 * @property conferenceStatusCallbackEvent - Set which conference state changes should webhook to the `ConferenceStatusCallback`
 * @property conferenceStatusCallbackMethod - HTTP method for requesting `ConferenceStatusCallback` URL.
 * @property conferenceTrim - Trim silence from audio files.
 * @property earlyMedia - Agents can hear the state of the outbound call.
 * @property endConferenceOnExit - End the conference when the participant leaves.
 * @property from - The `from` phone number used to invite a participant.
 * @property maxParticipants - Maximum number of agent conference participants.
 * @property muted - Mute the agent.
 * @property record - Record the agent and their conferences.
 * @property recordingChannels - Specify `mono` or `dual` recording channels.
 * @property recordingStatusCallback - The absolute URL for Twilio's webhook with recording status information.
 * @property recordingStatusCallbackEvent - The recording_status_callback_event
 * @property recordingStatusCallbackMethod - HTTP method for `RecordingStatusCallback`
 * @property region - The region where Twilio should mix the conference audio.
 * @property sipAuthPassword - SIP password for authentication.
 * @property sipAuthUsername - SIP username used for authenticating.
 * @property startConferenceOnEnter - Begin the conference when the participant joins.
 * @property statusCallback - URL for conference event callback.
 * @property statusCallbackEvent - Set state change events that will trigger a callback.
 * @property statusCallbackMethod - Method Twilio should use to reach the status callback URL.
 * @property timeout - Number of seconds Twilio will wait for an answer.
 * @property to - The number, client id, or sip address of the new participant.
 * @property waitMethod - The method Twilio should use to request `WaitUrl`.
 * @property waitUrl - URL that hosts pre-conference hold music
 */
interface ParticipantListInstanceCreateOptions {
  beep?: string;
  conferenceRecord?: string;
  conferenceRecordingStatusCallback?: string;
  conferenceRecordingStatusCallbackEvent?: string[];
  conferenceRecordingStatusCallbackMethod?: string;
  conferenceStatusCallback?: string;
  conferenceStatusCallbackEvent?: string[];
  conferenceStatusCallbackMethod?: string;
  conferenceTrim?: string;
  earlyMedia?: boolean;
  endConferenceOnExit?: boolean;
  from: string;
  maxParticipants?: number;
  muted?: boolean;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackEvent?: string[];
  recordingStatusCallbackMethod?: string;
  region?: string;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  startConferenceOnEnter?: boolean;
  statusCallback?: string;
  statusCallbackEvent?: string[];
  statusCallbackMethod?: string;
  timeout?: number;
  to: string;
  waitMethod?: string;
  waitUrl?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property hold - Only show participants that are held or unheld.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property muted - Filter by muted participants
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface ParticipantListInstanceEachOptions {
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
  done?: Function;
  hold?: boolean;
  limit?: number;
  muted?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property hold - Only show participants that are held or unheld.
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property muted - Filter by muted participants
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface ParticipantListInstanceOptions {
  hold?: boolean;
  limit?: number;
  muted?: boolean;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property hold - Only show participants that are held or unheld.
 * @property muted - Filter by muted participants
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface ParticipantListInstancePageOptions {
  hold?: boolean;
  muted?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface ParticipantPayload extends ParticipantResource, Page.TwilioResponsePayload {
}

interface ParticipantResource {
  account_sid: string;
  call_sid: string;
  conference_sid: string;
  date_created: Date;
  date_updated: Date;
  end_conference_on_exit: boolean;
  hold: boolean;
  muted: boolean;
  start_conference_on_enter: boolean;
  status: ParticipantStatus;
  uri: string;
}

interface ParticipantSolution {
  accountSid?: string;
  conferenceSid?: string;
}


declare class ParticipantPage extends Page<V2010, ParticipantPayload, ParticipantResource, ParticipantInstance> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: ParticipantSolution);

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
   * @property accountSid - The unique sid that identifies this account
   * @property callSid - A string that uniquely identifies this call
   * @property conferenceSid - A string that uniquely identifies this conference
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property endConferenceOnExit - Indicates if the endConferenceOnExit was set
   * @property muted - Indicates if the participant is muted
   * @property hold - true if this participant is currently held.
   * @property startConferenceOnEnter - Indicates if the startConferenceOnEnter attribute was set
   * @property status - The status
   * @property uri - The URI for this resource
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   * @param conferenceSid - A string that uniquely identifies this conference
   * @param callSid - Fetch by unique participant Call SID
   */
  constructor(version: V2010, payload: ParticipantPayload, accountSid: string, conferenceSid: string, callSid: string);

  private _proxy: ParticipantContext;
  accountSid: string;
  callSid: string;
  conferenceSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  endConferenceOnExit: boolean;
  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  hold: boolean;
  muted: boolean;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  startConferenceOnEnter: boolean;
  status: ParticipantStatus;
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
  uri: string;
}


declare class ParticipantContext {
  /**
   * Initialize the ParticipantContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param conferenceSid - The string that uniquely identifies this conference
   * @param callSid - Fetch by unique participant Call SID
   */
  constructor(version: V2010, accountSid: string, conferenceSid: string, callSid: string);

  /**
   * fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * remove a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: ParticipantInstance) => any): void;
  /**
   * update a ParticipantInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: ParticipantInstanceUpdateOptions, callback?: (error: Error | null, items: ParticipantInstance) => any): void;
}

export { ParticipantContext, ParticipantInstance, ParticipantList, ParticipantListInstance, ParticipantListInstanceCreateOptions, ParticipantListInstanceEachOptions, ParticipantListInstanceOptions, ParticipantListInstancePageOptions, ParticipantPage, ParticipantPayload, ParticipantResource, ParticipantSolution }
