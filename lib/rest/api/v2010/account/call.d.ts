/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import serialize = require('../../../../base/serialize');
import { FeedbackList } from './call/feedback';
import { NotificationList } from './call/notification';
import { RecordingList } from './call/recording';
import { SerializableClass } from '../../../../interfaces';

type CallEvent = 'initiated'|'ringing'|'answered'|'completed';

type CallStatus = 'queued'|'ringing'|'in-progress'|'completed'|'busy'|'failed'|'no-answer'|'canceled';

type CallUpdateStatus = 'canceled'|'completed';

/**
 * @description Initialize the CallList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique id of the Account responsible for creating this Call
 */
declare function CallList(version: V2010, accountSid: string): CallListInstance;

/**
 * Options to pass to update
 *
 * @property fallbackMethod - HTTP Method to use with FallbackUrl
 * @property fallbackUrl - Fallback URL in case of error
 * @property method - HTTP method to use to fetch TwiML
 * @property status - Status to update the Call with
 * @property statusCallback - Status Callback URL
 * @property statusCallbackMethod - HTTP Method to use with StatusCallback
 * @property url - URL that returns TwiML
 */
interface CallInstanceUpdateOptions {
  fallbackMethod?: string;
  fallbackUrl?: string;
  method?: string;
  status?: CallUpdateStatus;
  statusCallback?: string;
  statusCallbackMethod?: string;
  url?: string;
}

interface CallListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CallContext;
  /**
   * create a CallInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CallListInstanceCreateOptions, callback?: (error: Error | null, item: CallInstance) => any): Promise<CallInstance>;
  /**
   * Streams CallInstance records from the API.
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
  each(opts?: CallListInstanceEachOptions, callback?: (item: CallInstance, done: (err?: Error) => void) => void): void;
  feedbackSummaries?: object;
  /**
   * Constructs a call
   *
   * @param sid - Call Sid that uniquely identifies the Call to fetch
   */
  get(sid: string): CallContext;
  /**
   * Retrieve a single target page of CallInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
  /**
   * Lists CallInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CallListInstanceOptions, callback?: (error: Error | null, items: CallInstance[]) => any): Promise<CallInstance[]>;
  /**
   * Retrieve a single page of CallInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CallListInstancePageOptions, callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
}

/**
 * Options to pass to create
 *
 * @property applicationSid - ApplicationSid that configures from where to fetch TwiML
 * @property callerId - The phone number, SIP address, or Client identifier that made this Call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`.
 * @property fallbackMethod - HTTP Method to use with FallbackUrl
 * @property fallbackUrl - Fallback URL in case of error
 * @property from - Twilio number from which to originate the call
 * @property ifMachine - The if_machine
 * @property machineDetection - Enable machine detection or end of greeting detection
 * @property machineDetectionTimeout - Number of miliseconds to wait for machine detection
 * @property method - HTTP method to use to fetch TwiML
 * @property record - Whether or not to record the Call
 * @property recordingChannels - mono or dualSet this parameter to specify the number of channels in the final recording.
 * @property recordingStatusCallback - A URL that Twilio will send a webhook request to when the recording is available for access.
 * @property recordingStatusCallbackEvent - The recording status changes that Twilio will send webhooks on to the URL specified in RecordingStatusCallback.
 * @property recordingStatusCallbackMethod - The HTTP method Twilio should use when requesting the `RecordingStatusCallback` URL.
 * @property sendDigits - Digits to send
 * @property sipAuthPassword - The sip_auth_password
 * @property sipAuthUsername - The sip_auth_username
 * @property statusCallback - Status Callback URL
 * @property statusCallbackEvent - The call progress events that Twilio will send webhooks on.
 * @property statusCallbackMethod - HTTP Method to use with StatusCallback
 * @property timeout - Number of seconds to wait for an answer
 * @property to - Phone number, SIP address, or client identifier to call
 * @property trim - Set this parameter to control trimming of silence on the recording.
 * @property url - Url from which to fetch TwiML
 */
interface CallListInstanceCreateOptions {
  applicationSid?: string;
  callerId?: string;
  fallbackMethod?: string;
  fallbackUrl?: string;
  from: string;
  ifMachine?: string;
  machineDetection?: string;
  machineDetectionTimeout?: number;
  method?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackEvent?: string[];
  recordingStatusCallbackMethod?: string;
  sendDigits?: string;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  statusCallback?: string;
  statusCallbackEvent?: string[];
  statusCallbackMethod?: string;
  timeout?: number;
  to: string;
  trim?: string;
  url?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property endTime - EndTime to filter on
 * @property endTimeAfter - EndTime to filter on
 * @property endTimeBefore - EndTime to filter on
 * @property from - Phone number or Client identifier to filter `from` on
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
 * @property parentCallSid - Parent Call Sid to filter on
 * @property startTime - StartTime to filter on
 * @property startTimeAfter - StartTime to filter on
 * @property startTimeBefore - StartTime to filter on
 * @property status - Status to filter on
 * @property to - Phone number or Client identifier to filter `to` on
 */
interface CallListInstanceEachOptions {
  callback?: (item: CallInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endTime?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
  from?: string;
  limit?: number;
  pageSize?: number;
  parentCallSid?: string;
  startTime?: Date;
  startTimeAfter?: Date;
  startTimeBefore?: Date;
  status?: CallStatus;
  to?: string;
}

/**
 * Options to pass to list
 *
 * @property endTime - EndTime to filter on
 * @property endTimeAfter - EndTime to filter on
 * @property endTimeBefore - EndTime to filter on
 * @property from - Phone number or Client identifier to filter `from` on
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
 * @property parentCallSid - Parent Call Sid to filter on
 * @property startTime - StartTime to filter on
 * @property startTimeAfter - StartTime to filter on
 * @property startTimeBefore - StartTime to filter on
 * @property status - Status to filter on
 * @property to - Phone number or Client identifier to filter `to` on
 */
interface CallListInstanceOptions {
  endTime?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
  from?: string;
  limit?: number;
  pageSize?: number;
  parentCallSid?: string;
  startTime?: Date;
  startTimeAfter?: Date;
  startTimeBefore?: Date;
  status?: CallStatus;
  to?: string;
}

/**
 * Options to pass to page
 *
 * @property endTime - EndTime to filter on
 * @property endTimeAfter - EndTime to filter on
 * @property endTimeBefore - EndTime to filter on
 * @property from - Phone number or Client identifier to filter `from` on
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property parentCallSid - Parent Call Sid to filter on
 * @property startTime - StartTime to filter on
 * @property startTimeAfter - StartTime to filter on
 * @property startTimeBefore - StartTime to filter on
 * @property status - Status to filter on
 * @property to - Phone number or Client identifier to filter `to` on
 */
interface CallListInstancePageOptions {
  endTime?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
  from?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  parentCallSid?: string;
  startTime?: Date;
  startTimeAfter?: Date;
  startTimeBefore?: Date;
  status?: CallStatus;
  to?: string;
}

interface CallPayload extends CallResource, Page.TwilioResponsePayload {
}

interface CallResource {
  account_sid: string;
  annotation: string;
  answered_by: string;
  api_version: string;
  caller_name: string;
  date_created: Date;
  date_updated: Date;
  direction: string;
  duration: string;
  end_time: Date;
  forwarded_from: string;
  from: string;
  from_formatted: string;
  group_sid: string;
  parent_call_sid: string;
  phone_number_sid: string;
  price: number;
  price_unit: string;
  sid: string;
  start_time: Date;
  status: CallStatus;
  subresource_uris: string;
  to: string;
  to_formatted: string;
  uri: string;
}

interface CallSolution {
  accountSid?: string;
}


declare class CallPage extends Page<V2010, CallPayload, CallResource, CallInstance> {
  /**
   * Initialize the CallPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: CallSolution);

  /**
   * Build an instance of CallInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CallPayload): CallInstance;
}


declare class CallInstance extends SerializableClass {
  /**
   * Initialize the CallContext
   *
   * @property accountSid - The unique id of the Account responsible for creating this Call
   * @property annotation - The annotation provided for the Call
   * @property answeredBy - Either `human` or `machine` if this Call was initiated with answering machine detection. Empty otherwise.
   * @property apiVersion - The API Version used to create the Call
   * @property callerName - The caller's name if this Call was an incoming call to a phone number with Caller ID Lookup enabled. Empty otherwise.
   * @property dateCreated - The date that this resource was created
   * @property dateUpdated - The date that this resource was last updated
   * @property direction - A string describing the direction of the Call. `inbound` for inbound calls, `outbound-api` for calls initiated via the REST API or `outbound-dial` for calls initiated by a `Dial` verb.
   * @property duration - The length of the Call in seconds.
   * @property endTime - The end time of the Call. Null if the call did not complete successfully.
   * @property forwardedFrom - The forwarding phone number if this Call was an incoming call forwarded from another number (depends on carrier supporting forwarding). Empty otherwise.
   * @property from - The phone number, SIP address or Client identifier that made this Call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   * @property fromFormatted - The phone number, SIP address or Client identifier that made this Call. Formatted for display.
   * @property groupSid - A 34-character Group Sid associated with this Call. Empty if no Group is associated with the Call.
   * @property parentCallSid - A 34-character string that uniquely identifies the Call that created this leg.
   * @property phoneNumberSid - If the call was inbound, this is the Sid of the `IncomingPhoneNumber` that received the call. If the call was outbound, it is the Sid of the `OutgoingCallerId` from which the call was placed.
   * @property price - The charge for this Call, in the currency associated with the account. Populated after the call is completed. May not be immediately available.
   * @property priceUnit - The currency in which `Price` is measured.
   * @property sid - A 34-character string that uniquely identifies the Call resource.
   * @property startTime - The start time of the Call. Null if the call has not yet been dialed.
   * @property status - A string representing the status of the Call.
   * @property subresourceUris - Call Instance Subresources
   * @property to - The phone number, SIP address or Client identifier that received this Call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`. Client identifiers are formatted `client:name`.
   * @property toFormatted - The phone number, SIP address or Client identifier that received this Call. Formatted for display.
   * @property uri - The URI for this resource, relative to `https://api.twilio.com`
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique id of the Account responsible for creating this Call
   * @param sid - Call Sid that uniquely identifies the Call to fetch
   */
  constructor(version: V2010, payload: CallPayload, accountSid: string, sid: string);

  private _proxy: CallContext;
  accountSid: string;
  annotation: string;
  answeredBy: string;
  apiVersion: string;
  callerName: string;
  dateCreated: Date;
  dateUpdated: Date;
  direction: string;
  duration: string;
  endTime: Date;
  /**
   * Access the feedback
   */
  feedback();
  /**
   * fetch a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CallInstance) => any): void;
  forwardedFrom: string;
  from: string;
  fromFormatted: string;
  groupSid: string;
  /**
   * Access the notifications
   */
  notifications();
  parentCallSid: string;
  phoneNumberSid: string;
  price: number;
  priceUnit: string;
  /**
   * Access the recordings
   */
  recordings();
  /**
   * remove a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CallInstance) => any): void;
  sid: string;
  startTime: Date;
  status: CallStatus;
  subresourceUris: string;
  to: string;
  toFormatted: string;
  /**
   * Produce a plain JSON object version of the CallInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a CallInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CallInstanceUpdateOptions, callback?: (error: Error | null, items: CallInstance) => any): void;
  uri: string;
}


declare class CallContext {
  /**
   * Initialize the CallContext
   *
   * @property recordings - recordings resource
   * @property notifications - notifications resource
   * @property feedback - feedback resource
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Call Sid that uniquely identifies the Call to fetch
   */
  constructor(version: V2010, accountSid: string, sid: string);

  feedback?: FeedbackList;
  /**
   * fetch a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CallInstance) => any): void;
  notifications?: NotificationList;
  recordings?: RecordingList;
  /**
   * remove a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CallInstance) => any): void;
  /**
   * update a CallInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CallInstanceUpdateOptions, callback?: (error: Error | null, items: CallInstance) => any): void;
}

export { CallContext, CallInstance, CallList, CallListInstance, CallListInstanceCreateOptions, CallListInstanceEachOptions, CallListInstanceOptions, CallListInstancePageOptions, CallPage, CallPayload, CallResource, CallSolution }
