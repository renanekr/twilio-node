/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V2010 = require('../V2010');
import { AddressList } from './account/address';
import { ApplicationList } from './account/application';
import { AuthorizedConnectAppList } from './account/authorizedConnectApp';
import { AvailablePhoneNumberCountryList } from './account/availablePhoneNumber';
import { CallList } from './account/call';
import { ConferenceList } from './account/conference';
import { ConnectAppList } from './account/connectApp';
import { IncomingPhoneNumberList } from './account/incomingPhoneNumber';
import { KeyList } from './account/key';
import { MessageList } from './account/message';
import { NewKeyList } from './account/newKey';
import { NewSigningKeyList } from './account/newSigningKey';
import { NotificationList } from './account/notification';
import { OutgoingCallerIdList } from './account/outgoingCallerId';
import { QueueList } from './account/queue';
import { RecordingList } from './account/recording';
import { SerializableClass } from '../../../interfaces';
import { ShortCodeList } from './account/shortCode';
import { SigningKeyList } from './account/signingKey';
import { SipList } from './account/sip';
import { TokenList } from './account/token';
import { TranscriptionList } from './account/transcription';
import { UsageList } from './account/usage';
import { ValidationRequestList } from './account/validationRequest';

/**
 * @description Initialize the AccountList
 *
 * @param version - Version of the resource
 */
declare function AccountList(version: V2010): AccountListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - FriendlyName to update
 * @property status - Status to update the Account with
 */
interface AccountInstanceUpdateOptions {
  friendlyName?: string;
  status?: AccountStatus;
}

interface AccountListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AccountContext;
  /**
   * create a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: AccountListInstanceCreateOptions, callback?: (error: Error | null, items: AccountListInstance) => any): Promise<AccountInstance>;
  /**
   * Streams AccountInstance records from the API.
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
  each(opts?: AccountListInstanceEachOptions, callback?: (item: AccountInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a account
   *
   * @param sid - Fetch by unique Account Sid
   */
  get(sid: string): AccountContext;
  /**
   * Retrieve a single target page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
  /**
   * Lists AccountInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AccountListInstanceOptions, callback?: (error: Error | null, items: AccountInstance[]) => any): Promise<AccountInstance[]>;
  /**
   * Retrieve a single page of AccountInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AccountListInstancePageOptions, callback?: (error: Error | null, items: AccountPage) => any): Promise<AccountPage>;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - A human readable description of the account
 */
interface AccountListInstanceCreateOptions {
  friendlyName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - FriendlyName to filter on
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
 * @property status - Status to filter on
 */
interface AccountListInstanceEachOptions {
  callback?: (item: AccountInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  status?: AccountStatus;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - FriendlyName to filter on
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
 * @property status - Status to filter on
 */
interface AccountListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
  status?: AccountStatus;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - FriendlyName to filter on
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property status - Status to filter on
 */
interface AccountListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  status?: AccountStatus;
}

interface AccountPayload extends AccountResource, Page.TwilioResponsePayload {
}

interface AccountResource {
  auth_token: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  owner_account_sid: string;
  sid: string;
  status: AccountStatus;
  subresource_uris: string;
  type: AccountType;
  uri: string;
}

interface AccountSolution {
}


declare class AccountPage extends Page<V2010, AccountPayload, AccountResource, AccountInstance> {
  /**
   * Initialize the AccountPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: AccountSolution);

  /**
   * Build an instance of AccountInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AccountPayload): AccountInstance;
}


declare class AccountInstance extends SerializableClass {
  /**
   * Initialize the AccountContext
   *
   * @property authToken - The authorization token for this account
   * @property dateCreated - The date this account was created
   * @property dateUpdated - The date this account was last updated
   * @property friendlyName - A human readable description of this account
   * @property ownerAccountSid - The unique 34 character id representing the parent of this account
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property status - The status of this account
   * @property subresourceUris - Account Instance Subresources
   * @property type - The type of this account
   * @property uri - The URI for this resource, relative to `https://api.twilio.com`
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - Fetch by unique Account Sid
   */
  constructor(version: V2010, payload: AccountPayload, sid: string);

  private _proxy: AccountContext;
  /**
   * Access the addresses
   */
  addresses();
  /**
   * Access the applications
   */
  applications();
  authToken: string;
  /**
   * Access the authorizedConnectApps
   */
  authorizedConnectApps();
  /**
   * Access the availablePhoneNumbers
   */
  availablePhoneNumbers();
  /**
   * Access the calls
   */
  calls();
  /**
   * Access the conferences
   */
  conferences();
  /**
   * Access the connectApps
   */
  connectApps();
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AccountInstance) => any): void;
  friendlyName: string;
  /**
   * Access the incomingPhoneNumbers
   */
  incomingPhoneNumbers();
  /**
   * Access the keys
   */
  keys();
  /**
   * Access the messages
   */
  messages();
  /**
   * Access the newKeys
   */
  newKeys();
  /**
   * Access the newSigningKeys
   */
  newSigningKeys();
  /**
   * Access the notifications
   */
  notifications();
  /**
   * Access the outgoingCallerIds
   */
  outgoingCallerIds();
  ownerAccountSid: string;
  /**
   * Access the queues
   */
  queues();
  /**
   * Access the recordings
   */
  recordings();
  /**
   * Access the shortCodes
   */
  shortCodes();
  sid: string;
  /**
   * Access the signingKeys
   */
  signingKeys();
  /**
   * Access the sip
   */
  sip();
  status: account.status;
  subresourceUris: string;
  /**
   * Produce a plain JSON object version of the AccountInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * Access the tokens
   */
  tokens();
  /**
   * Access the transcriptions
   */
  transcriptions();
  type: account.type;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AccountInstanceUpdateOptions, callback?: (error: Error | null, items: AccountInstance) => any): void;
  uri: string;
  /**
   * Access the usage
   */
  usage();
  /**
   * Access the validationRequests
   */
  validationRequests();
}


declare class AccountContext {
  /**
   * Initialize the AccountContext
   *
   * @property addresses - addresses resource
   * @property applications - applications resource
   * @property authorizedConnectApps - authorizedConnectApps resource
   * @property availablePhoneNumbers - availablePhoneNumbers resource
   * @property calls - calls resource
   * @property conferences - conferences resource
   * @property connectApps - connectApps resource
   * @property incomingPhoneNumbers - incomingPhoneNumbers resource
   * @property keys - keys resource
   * @property messages - messages resource
   * @property newKeys - newKeys resource
   * @property newSigningKeys - newSigningKeys resource
   * @property notifications - notifications resource
   * @property outgoingCallerIds - outgoingCallerIds resource
   * @property queues - queues resource
   * @property recordings - recordings resource
   * @property signingKeys - signingKeys resource
   * @property sip - sip resource
   * @property shortCodes - shortCodes resource
   * @property tokens - tokens resource
   * @property transcriptions - transcriptions resource
   * @property usage - usage resource
   * @property validationRequests - validationRequests resource
   *
   * @param version - Version of the resource
   * @param sid - Fetch by unique Account Sid
   */
  constructor(version: V2010, sid: string);

  addresses?: Twilio.Api.V2010.AccountContext.AddressList;
  applications?: Twilio.Api.V2010.AccountContext.ApplicationList;
  authorizedConnectApps?: Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList;
  availablePhoneNumbers?: Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList;
  calls?: Twilio.Api.V2010.AccountContext.CallList;
  conferences?: Twilio.Api.V2010.AccountContext.ConferenceList;
  connectApps?: Twilio.Api.V2010.AccountContext.ConnectAppList;
  /**
   * fetch a AccountInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AccountInstance) => any): void;
  incomingPhoneNumbers?: Twilio.Api.V2010.AccountContext.IncomingPhoneNumberList;
  keys?: Twilio.Api.V2010.AccountContext.KeyList;
  messages?: Twilio.Api.V2010.AccountContext.MessageList;
  newKeys?: Twilio.Api.V2010.AccountContext.NewKeyList;
  newSigningKeys?: Twilio.Api.V2010.AccountContext.NewSigningKeyList;
  notifications?: Twilio.Api.V2010.AccountContext.NotificationList;
  outgoingCallerIds?: Twilio.Api.V2010.AccountContext.OutgoingCallerIdList;
  queues?: Twilio.Api.V2010.AccountContext.QueueList;
  recordings?: Twilio.Api.V2010.AccountContext.RecordingList;
  shortCodes?: Twilio.Api.V2010.AccountContext.ShortCodeList;
  signingKeys?: Twilio.Api.V2010.AccountContext.SigningKeyList;
  sip?: Twilio.Api.V2010.AccountContext.SipList;
  tokens?: Twilio.Api.V2010.AccountContext.TokenList;
  transcriptions?: Twilio.Api.V2010.AccountContext.TranscriptionList;
  /**
   * update a AccountInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: AccountInstanceUpdateOptions, callback?: (error: Error | null, items: AccountInstance) => any): void;
  usage?: Twilio.Api.V2010.AccountContext.UsageList;
  validationRequests?: Twilio.Api.V2010.AccountContext.ValidationRequestList;
}

export { AccountContext, AccountInstance, AccountList, AccountListInstance, AccountListInstanceCreateOptions, AccountListInstanceEachOptions, AccountListInstanceOptions, AccountListInstancePageOptions, AccountPage, AccountPayload, AccountResource, AccountSolution }