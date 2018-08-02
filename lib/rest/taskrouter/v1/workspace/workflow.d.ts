/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';
import { WorkflowCumulativeStatisticsList } from './workflow/workflowCumulativeStatistics';
import { WorkflowRealTimeStatisticsList } from './workflow/workflowRealTimeStatistics';
import { WorkflowStatisticsList } from './workflow/workflowStatistics';

/**
 * @description Initialize the WorkflowList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The ID of the Workspace that contains this Workflow
 */
declare function WorkflowList(version: V1, workspaceSid: string): WorkflowListInstance;

/**
 * Options to pass to update
 *
 * @property assignmentCallbackUrl - A valid URL for the application that will process task assignment events.
 * @property configuration - JSON document configuring the rules for this Workflow.
 * @property fallbackAssignmentCallbackUrl - If the request to the AssignmentCallbackUrl fails, the assignment callback will be made to this URL.
 * @property friendlyName - A string representing a human readable name for this Workflow.
 * @property taskReservationTimeout - An integer value controlling how long in seconds TaskRouter will wait for a confirmation response from your application after assigning a Task to a worker.
 */
interface WorkflowInstanceUpdateOptions {
  assignmentCallbackUrl?: string;
  configuration?: string;
  fallbackAssignmentCallbackUrl?: string;
  friendlyName?: string;
  taskReservationTimeout?: number;
}

interface WorkflowListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkflowContext;
  /**
   * create a WorkflowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: WorkflowListInstanceCreateOptions, callback?: (error: Error | null, item: WorkflowInstance) => any): Promise<WorkflowInstance>;
  /**
   * Streams WorkflowInstance records from the API.
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
  each(opts?: WorkflowListInstanceEachOptions, callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a workflow
   *
   * @param sid - The sid
   */
  get(sid: string): WorkflowContext;
  /**
   * Retrieve a single target page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
  /**
   * Lists WorkflowInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: WorkflowListInstanceOptions, callback?: (error: Error | null, items: WorkflowInstance[]) => any): Promise<WorkflowInstance[]>;
  /**
   * Retrieve a single page of WorkflowInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: WorkflowListInstancePageOptions, callback?: (error: Error | null, items: WorkflowPage) => any): Promise<WorkflowPage>;
}

/**
 * Options to pass to create
 *
 * @property assignmentCallbackUrl - A valid URL for the application that will process task assignment events.
 * @property configuration - JSON document configuring the rules for this Workflow.
 * @property fallbackAssignmentCallbackUrl - If the request to the AssignmentCallbackUrl fails, the assignment callback will be made to this URL.
 * @property friendlyName - A string representing a human readable name for this Workflow.
 * @property taskReservationTimeout - An integer value controlling how long in seconds TaskRouter will wait for a confirmation response from your application after assigning a Task to a worker.
 */
interface WorkflowListInstanceCreateOptions {
  assignmentCallbackUrl?: string;
  configuration: string;
  fallbackAssignmentCallbackUrl?: string;
  friendlyName: string;
  taskReservationTimeout?: number;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property friendlyName - Human readable description of this Workflow
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
interface WorkflowListInstanceEachOptions {
  callback?: (item: WorkflowInstance, done: (err?: Error) => void) => void;
  done?: Function;
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property friendlyName - Human readable description of this Workflow
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
interface WorkflowListInstanceOptions {
  friendlyName?: string;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property friendlyName - Human readable description of this Workflow
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface WorkflowListInstancePageOptions {
  friendlyName?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface WorkflowPayload extends WorkflowResource, Page.TwilioResponsePayload {
}

interface WorkflowResource {
  account_sid: string;
  assignment_callback_url: string;
  configuration: string;
  date_created: Date;
  date_updated: Date;
  document_content_type: string;
  fallback_assignment_callback_url: string;
  friendly_name: string;
  links: string;
  sid: string;
  task_reservation_timeout: number;
  url: string;
  workspace_sid: string;
}

interface WorkflowSolution {
  workspaceSid?: string;
}


declare class WorkflowPage extends Page<V1, WorkflowPayload, WorkflowResource, WorkflowInstance> {
  /**
   * Initialize the WorkflowPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkflowSolution);

  /**
   * Build an instance of WorkflowInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkflowPayload): WorkflowInstance;
}


declare class WorkflowInstance extends SerializableClass {
  /**
   * Initialize the WorkflowContext
   *
   * @property accountSid - The ID of the account that owns this Workflow
   * @property assignmentCallbackUrl - The URL that will be called whenever a task managed by this Workflow is assigned to a Worker.
   * @property configuration - JSON document configuring the rules for this Workflow.
   * @property dateCreated - The date this workflow was created.
   * @property dateUpdated - The date this workflow was last updated.
   * @property documentContentType - The document_content_type
   * @property fallbackAssignmentCallbackUrl - If the request to the AssignmentCallbackUrl fails, the assignment callback will be made to this URL.
   * @property friendlyName - Human readable description of this Workflow
   * @property sid - The unique ID of the Workflow
   * @property taskReservationTimeout - Determines how long TaskRouter will wait for a confirmation response from your application after assigning a Task to a worker.
   * @property workspaceSid - The ID of the Workspace that contains this Workflow
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The ID of the Workspace that contains this Workflow
   * @param sid - The sid
   */
  constructor(version: V1, payload: WorkflowPayload, workspaceSid: string, sid: string);

  private _proxy: WorkflowContext;
  accountSid: string;
  assignmentCallbackUrl: string;
  configuration: string;
  /**
   * Access the cumulativeStatistics
   */
  cumulativeStatistics();
  dateCreated: Date;
  dateUpdated: Date;
  documentContentType: string;
  fallbackAssignmentCallbackUrl: string;
  /**
   * fetch a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkflowInstance) => any): void;
  friendlyName: string;
  links: string;
  /**
   * Access the realTimeStatistics
   */
  realTimeStatistics();
  /**
   * remove a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkflowInstance) => any): void;
  sid: string;
  /**
   * Access the statistics
   */
  statistics();
  taskReservationTimeout: number;
  /**
   * Produce a plain JSON object version of the WorkflowInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  /**
   * update a WorkflowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkflowInstanceUpdateOptions, callback?: (error: Error | null, items: WorkflowInstance) => any): void;
  url: string;
  workspaceSid: string;
}


declare class WorkflowContext {
  /**
   * Initialize the WorkflowContext
   *
   * @property statistics - statistics resource
   * @property realTimeStatistics - realTimeStatistics resource
   * @property cumulativeStatistics - cumulativeStatistics resource
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param sid - The sid
   */
  constructor(version: V1, workspaceSid: string, sid: string);

  cumulativeStatistics?: WorkflowCumulativeStatisticsList;
  /**
   * fetch a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WorkflowInstance) => any): void;
  realTimeStatistics?: WorkflowRealTimeStatisticsList;
  /**
   * remove a WorkflowInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: WorkflowInstance) => any): void;
  statistics?: WorkflowStatisticsList;
  /**
   * update a WorkflowInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WorkflowInstanceUpdateOptions, callback?: (error: Error | null, items: WorkflowInstance) => any): void;
}

export { WorkflowContext, WorkflowInstance, WorkflowList, WorkflowListInstance, WorkflowListInstanceCreateOptions, WorkflowListInstanceEachOptions, WorkflowListInstanceOptions, WorkflowListInstancePageOptions, WorkflowPage, WorkflowPayload, WorkflowResource, WorkflowSolution }
