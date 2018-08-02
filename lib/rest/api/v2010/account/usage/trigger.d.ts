/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V2010 = require('../../../V2010');
import { SerializableClass } from '../../../../../interfaces';

type TriggerRecurring = 'daily'|'monthly'|'yearly'|'alltime';

type TriggerTriggerField = 'count'|'usage'|'price';

type TriggerUsageCategory = 'answering-machine-detection'|'authy-authentications'|'authy-calls-outbound'|'authy-monthly-fees'|'authy-phone-intelligence'|'authy-phone-verifications'|'authy-sms-outbound'|'call-progess-events'|'calleridlookups'|'calls'|'calls-client'|'calls-globalconference'|'calls-inbound'|'calls-inbound-local'|'calls-inbound-mobile'|'calls-inbound-tollfree'|'calls-outbound'|'calls-recordings'|'calls-sip'|'calls-sip-inbound'|'calls-sip-outbound'|'carrier-lookups'|'conversations'|'conversations-api-requests'|'conversations-conversation-events'|'conversations-endpoint-connectivity'|'conversations-events'|'conversations-participant-events'|'conversations-participants'|'fraud-lookups'|'cps'|'group-rooms'|'group-rooms-data-track'|'group-rooms-encrypted-media-recorded'|'group-rooms-media-downloaded'|'group-rooms-media-recorded'|'group-rooms-media-routed'|'group-rooms-media-stored'|'group-rooms-participant-minutes'|'group-rooms-recorded-minutes'|'ip-messaging'|'ip-messaging-commands'|'ip-messaging-data-storage'|'ip-messaging-data-transfer'|'ip-messaging-endpoint-connectivity'|'lookups'|'marketplace'|'marketplace-algorithmia-named-entity-recognition'|'marketplace-digital-segment-business-info'|'marketplace-google-speech-to-text'|'marketplace-ibm-watson-message-insights'|'marketplace-ibm-watson-message-sentiment'|'marketplace-ibm-watson-recording-analysis'|'marketplace-icehook-systems-scout'|'marketplace-infogroup-dataaxle-bizinfo'|'marketplace-cadence-transcription'|'marketplace-cadence-translation'|'marketplace-capio-speech-to-text'|'marketplace-facebook-offline-conversions'|'marketplace-keen-io-contact-center-analytics'|'marketplace-marchex-cleancall'|'marketplace-marchex-sentiment-analysis-for-sms'|'marketplace-marketplace-nextcaller-social-id'|'marketplace-mobile-commons-opt-out-classifier'|'marketplace-nexiwave-voicemail-to-text'|'marketplace-nextcaller-advanced-caller-identification'|'marketplace-nomorobo-spam-score'|'marketplace-payfone-tcpa-compliance'|'marketplace-telo-opencnam'|'marketplace-truecnam-true-spam'|'marketplace-twilio-caller-name-lookup-us'|'marketplace-twilio-carrier-information-lookup'|'marketplace-voicebase-pci'|'marketplace-voicebase-transcription'|'marketplace-whitepages-pro-caller-identification'|'marketplace-whitepages-pro-phone-intelligence'|'marketplace-whitepages-pro-phone-reputation'|'marketplace-wolfram-short-answer'|'marketplace-wolfarm-spoken-results'|'marketplace-deepgram-phrase-detector'|'marketplace-convriza-ababa'|'marketplace-ibm-watson-tone-analyzer'|'marketplace-remeeting-automatic-speech-recognition'|'marketplace-tcpa-defense-solutions-blacklist-feed'|'marketplace-voicebase-transcription-custom-vocabulary'|'marketplace-ytica-contact-center-reporting-analytics'|'mediastorage'|'mms'|'mms-inbound'|'mms-inbound-longcode'|'mms-inbound-shortcode'|'mms-outbound'|'mms-outbound-longcode'|'mms-outbound-shortcode'|'monitor-reads'|'monitor-storage'|'monitor-writes'|'notify'|'notify-actions-attempts'|'notify-channels'|'number-format-lookups'|'pchat'|'pchat-actions'|'pchat-aps'|'pchat-notifications'|'pchat-reads'|'pchat-users'|'pchat-messages'|'peer-to-peer-rooms-participant-minutes'|'pfax'|'pfax-minutes'|'pfax-minutes-inbound'|'pfax-minutes-outbound'|'pfax-pages'|'phonenumbers'|'phonenumbers-cps'|'phonenumbers-emergency'|'phonenumbers-local'|'phonenumbers-mobile'|'phonenumbers-setups'|'phonenumbers-tollfree'|'premiumsupport'|'proxy'|'pv'|'pv-composition-media-downloaded'|'pv-composition-media-encrypted'|'pv-composition-media-stored'|'pv-composition-minutes'|'pv-recording-compositions'|'pv-room-participants'|'pv-room-participants-au1'|'pv-room-participants-br1'|'pv-room-participants-ie1'|'pv-room-participants-jp1'|'pv-room-participants-sg1'|'pv-room-participants-us1'|'pv-room-participants-us2'|'pv-rooms'|'pv-sip-endpoint-registrations'|'recordings'|'recordingstorage'|'rooms-group-minutes'|'rooms-group-bandwidth'|'rooms-peer-to-peer-minutes'|'shortcodes'|'shortcodes-customerowned'|'shortcodes-mms-enablement'|'shortcodes-mps'|'shortcodes-random'|'shortcodes-uk'|'shortcodes-vanity'|'sms'|'sms-inbound'|'sms-inbound-longcode'|'sms-inbound-shortcode'|'sms-outbound'|'sms-outbound-content-inspection'|'sms-outbound-longcode'|'sms-outbound-shortcode'|'sms-messages-features'|'sms-messages-features-senderid'|'speech-recognition'|'studio-engagements'|'sync'|'sync-actions'|'sync-endpoint-hours'|'sync-endpoint-hours-above-daily-cap'|'taskrouter-tasks'|'totalprice'|'transcriptions'|'trunking-cps'|'trunking-emergency-calls'|'trunking-origination'|'trunking-origination-local'|'trunking-origination-mobile'|'trunking-origination-tollfree'|'trunking-recordings'|'trunking-secure'|'trunking-termination'|'turnmegabytes'|'turnmegabytes-australia'|'turnmegabytes-brasil'|'turnmegabytes-india'|'turnmegabytes-ireland'|'turnmegabytes-japan'|'turnmegabytes-singapore'|'turnmegabytes-useast'|'turnmegabytes-uswest'|'twilio-interconnect'|'video-recordings'|'voice-insights'|'voice-insights-client-insights-on-demand-minute'|'voice-insights-ptsn-insights-on-demand-minute'|'voice-insights-sip-interface-insights-on-demand-minute'|'voice-insights-sip-trunking-insights-on-demand-minute'|'wireless'|'wireless-orders'|'wireless-orders-artwork'|'wireless-orders-bulk'|'wireless-orders-esim'|'wireless-orders-starter'|'wireless-usage'|'wireless-usage-commands'|'wireless-usage-commands-africa'|'wireless-usage-commands-asia'|'wireless-usage-commands-centralandsouthamerica'|'wireless-usage-commands-europe'|'wireless-usage-commands-home'|'wireless-usage-commands-northamerica'|'wireless-usage-commands-oceania'|'wireless-usage-commands-roaming'|'wireless-usage-data'|'wireless-usage-data-africa'|'wireless-usage-data-asia'|'wireless-usage-data-centralandsouthamerica'|'wireless-usage-data-custom-additionalmb'|'wireless-usage-data-custom-first5mb'|'wireless-usage-data-domestic-roaming'|'wireless-usage-data-europe'|'wireless-usage-data-individual-additionalgb'|'wireless-usage-data-individual-firstgb'|'wireless-usage-data-international-roaming-canada'|'wireless-usage-data-international-roaming-india'|'wireless-usage-data-international-roaming-mexico'|'wireless-usage-data-northamerica'|'wireless-usage-data-oceania'|'wireless-usage-data-pooled'|'wireless-usage-data-pooled-downlink'|'wireless-usage-data-pooled-uplink'|'wireless-usage-mrc'|'wireless-usage-mrc-custom'|'wireless-usage-mrc-individual'|'wireless-usage-mrc-pooled'|'wireless-usage-mrc-suspended'|'wireless-usage-voice'|'wireless-usage-sms';

/**
 * @description Initialize the TriggerList
 *
 * @param version - Version of the resource
 * @param accountSid - A 34 character string that uniquely identifies this resource.
 */
declare function TriggerList(version: V2010, accountSid: string): TriggerListInstance;

/**
 * Options to pass to update
 *
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 */
interface TriggerInstanceUpdateOptions {
  callbackMethod?: string;
  callbackUrl?: string;
  friendlyName?: string;
}

interface TriggerListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): TriggerContext;
  /**
   * create a TriggerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: TriggerListInstanceCreateOptions, callback?: (error: Error | null, item: TriggerInstance) => any): Promise<TriggerInstance>;
  /**
   * Streams TriggerInstance records from the API.
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
  each(opts?: TriggerListInstanceEachOptions, callback?: (item: TriggerInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a trigger
   *
   * @param sid - Fetch by unique usage-trigger Sid
   */
  get(sid: string): TriggerContext;
  /**
   * Retrieve a single target page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
  /**
   * Lists TriggerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: TriggerListInstanceOptions, callback?: (error: Error | null, items: TriggerInstance[]) => any): Promise<TriggerInstance[]>;
  /**
   * Retrieve a single page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: TriggerListInstancePageOptions, callback?: (error: Error | null, items: TriggerPage) => any): Promise<TriggerPage>;
}

/**
 * Options to pass to create
 *
 * @property callbackMethod - HTTP method to use with callback_url
 * @property callbackUrl - URL Twilio will request when the trigger fires
 * @property friendlyName - A user-specified, human-readable name for the trigger.
 * @property recurring - How this trigger recurs
 * @property triggerBy - The field in the UsageRecord that fires the trigger
 * @property triggerValue - the value at which the trigger will fire
 * @property usageCategory - The usage category the trigger watches
 */
interface TriggerListInstanceCreateOptions {
  callbackMethod?: string;
  callbackUrl: string;
  friendlyName?: string;
  recurring?: TriggerRecurring;
  triggerBy?: TriggerTriggerField;
  triggerValue: string;
  usageCategory: TriggerUsageCategory;
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
 * @property recurring - Filter by recurring
 * @property triggerBy - Filter by trigger by
 * @property usageCategory - Filter by Usage Category
 */
interface TriggerListInstanceEachOptions {
  callback?: (item: TriggerInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
  recurring?: TriggerRecurring;
  triggerBy?: TriggerTriggerField;
  usageCategory?: TriggerUsageCategory;
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
 * @property recurring - Filter by recurring
 * @property triggerBy - Filter by trigger by
 * @property usageCategory - Filter by Usage Category
 */
interface TriggerListInstanceOptions {
  limit?: number;
  pageSize?: number;
  recurring?: TriggerRecurring;
  triggerBy?: TriggerTriggerField;
  usageCategory?: TriggerUsageCategory;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property recurring - Filter by recurring
 * @property triggerBy - Filter by trigger by
 * @property usageCategory - Filter by Usage Category
 */
interface TriggerListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  recurring?: TriggerRecurring;
  triggerBy?: TriggerTriggerField;
  usageCategory?: TriggerUsageCategory;
}

interface TriggerPayload extends TriggerResource, Page.TwilioResponsePayload {
}

interface TriggerResource {
  account_sid: string;
  api_version: string;
  callback_method: string;
  callback_url: string;
  current_value: string;
  date_created: Date;
  date_fired: Date;
  date_updated: Date;
  friendly_name: string;
  recurring: TriggerRecurring;
  sid: string;
  trigger_by: TriggerTriggerField;
  trigger_value: string;
  uri: string;
  usage_category: TriggerUsageCategory;
  usage_record_uri: string;
}

interface TriggerSolution {
  accountSid?: string;
}


declare class TriggerPage extends Page<V2010, TriggerPayload, TriggerResource, TriggerInstance> {
  /**
   * Initialize the TriggerPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: TriggerSolution);

  /**
   * Build an instance of TriggerInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TriggerPayload): TriggerInstance;
}


declare class TriggerInstance extends SerializableClass {
  /**
   * Initialize the TriggerContext
   *
   * @property accountSid - The account this trigger monitors.
   * @property apiVersion - The api_version
   * @property callbackMethod - HTTP method to use with callback_url
   * @property callbackUrl - URL Twilio will request when the trigger fires
   * @property currentValue - The current value of the field the trigger is watching.
   * @property dateCreated - The date this resource was created
   * @property dateFired - The date the trigger was last fired
   * @property dateUpdated - The date this resource was last updated
   * @property friendlyName - A user-specified, human-readable name for the trigger.
   * @property recurring - How this trigger recurs
   * @property sid - The trigger's unique Sid
   * @property triggerBy - The field in the UsageRecord that fires the trigger
   * @property triggerValue - the value at which the trigger will fire
   * @property uri - The URI for this resource
   * @property usageCategory - The usage category the trigger watches
   * @property usageRecordUri - The URI of the UsageRecord this trigger is watching
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - A 34 character string that uniquely identifies this resource.
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: V2010, payload: TriggerPayload, accountSid: string, sid: string);

  private _proxy: TriggerContext;
  accountSid: string;
  apiVersion: string;
  callbackMethod: string;
  callbackUrl: string;
  currentValue: string;
  dateCreated: Date;
  dateFired: Date;
  dateUpdated: Date;
  /**
   * fetch a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  friendlyName: string;
  recurring: TriggerRecurring;
  /**
   * remove a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  sid: string;
  /**
   * Produce a plain JSON object version of the TriggerInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  triggerBy: TriggerTriggerField;
  triggerValue: string;
  /**
   * update a TriggerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TriggerInstanceUpdateOptions, callback?: (error: Error | null, items: TriggerInstance) => any): void;
  uri: string;
  usageCategory: TriggerUsageCategory;
  usageRecordUri: string;
}


declare class TriggerContext {
  /**
   * Initialize the TriggerContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param sid - Fetch by unique usage-trigger Sid
   */
  constructor(version: V2010, accountSid: string, sid: string);

  /**
   * fetch a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  /**
   * remove a TriggerInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: TriggerInstance) => any): void;
  /**
   * update a TriggerInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: TriggerInstanceUpdateOptions, callback?: (error: Error | null, items: TriggerInstance) => any): void;
}

export { TriggerContext, TriggerInstance, TriggerList, TriggerListInstance, TriggerListInstanceCreateOptions, TriggerListInstanceEachOptions, TriggerListInstanceOptions, TriggerListInstancePageOptions, TriggerPage, TriggerPayload, TriggerResource, TriggerSolution }
