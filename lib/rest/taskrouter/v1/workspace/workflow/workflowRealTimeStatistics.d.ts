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

/**
 * @description Initialize the WorkflowRealTimeStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param workflowSid - The workflow_sid
 */
declare function WorkflowRealTimeStatisticsList(version: V1, workspaceSid: string, workflowSid: string): WorkflowRealTimeStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
interface WorkflowRealTimeStatisticsInstanceFetchOptions {
  taskChannel?: string;
}

interface WorkflowRealTimeStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkflowRealTimeStatisticsContext;
  /**
   * Constructs a workflow_real_time_statistics
   */
  get(): WorkflowRealTimeStatisticsContext;
}

interface WorkflowRealTimeStatisticsPayload extends WorkflowRealTimeStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkflowRealTimeStatisticsResource {
  account_sid: string;
  longest_task_waiting_age: number;
  tasks_by_priority: string;
  tasks_by_status: string;
  total_tasks: number;
  url: string;
  workflow_sid: string;
  workspace_sid: string;
}

interface WorkflowRealTimeStatisticsSolution {
  workflowSid?: string;
  workspaceSid?: string;
}


declare class WorkflowRealTimeStatisticsPage extends Page<V1, WorkflowRealTimeStatisticsPayload, WorkflowRealTimeStatisticsResource, WorkflowRealTimeStatisticsInstance> {
  /**
   * Initialize the WorkflowRealTimeStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkflowRealTimeStatisticsSolution);

  /**
   * Build an instance of WorkflowRealTimeStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkflowRealTimeStatisticsPayload): WorkflowRealTimeStatisticsInstance;
}


declare class WorkflowRealTimeStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkflowRealTimeStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property longestTaskWaitingAge - The age of the longest waiting Task
   * @property tasksByPriority - The tasks_by_priority
   * @property tasksByStatus - The Tasks broken down by status
   * @property totalTasks - The total number of Tasks
   * @property workflowSid - The workflow_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: V1, payload: WorkflowRealTimeStatisticsPayload, workspaceSid: string, workflowSid: string);

  private _proxy: WorkflowRealTimeStatisticsContext;
  accountSid: string;
  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowRealTimeStatisticsInstance) => any): void;
  longestTaskWaitingAge: number;
  tasksByPriority: string;
  tasksByStatus: string;
  /**
   * Produce a plain JSON object version of the WorkflowRealTimeStatisticsInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  totalTasks: number;
  url: string;
  workflowSid: string;
  workspaceSid: string;
}


declare class WorkflowRealTimeStatisticsContext {
  /**
   * Initialize the WorkflowRealTimeStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: V1, workspaceSid: string, workflowSid: string);

  /**
   * fetch a WorkflowRealTimeStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowRealTimeStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowRealTimeStatisticsInstance) => any): Promise<WorkflowRealTimeStatisticsInstance>;
}

export { WorkflowRealTimeStatisticsContext, WorkflowRealTimeStatisticsInstance, WorkflowRealTimeStatisticsList, WorkflowRealTimeStatisticsListInstance, WorkflowRealTimeStatisticsPage, WorkflowRealTimeStatisticsPayload, WorkflowRealTimeStatisticsResource, WorkflowRealTimeStatisticsSolution }
