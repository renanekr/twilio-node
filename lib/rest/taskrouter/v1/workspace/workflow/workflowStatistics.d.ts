/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the WorkflowStatisticsList
 *
 * @param version - Version of the resource
 * @param workspaceSid - The workspace_sid
 * @param workflowSid - The workflow_sid
 */
declare function WorkflowStatisticsList(version: V1, workspaceSid: string, workflowSid: string): WorkflowStatisticsListInstance;

/**
 * Options to pass to fetch
 *
 * @property endDate - Filter cumulative statistics by an end date.
 * @property minutes - Filter cumulative statistics by up to 'x' minutes in the past.
 * @property splitByWaitTime - A comma separated values for viewing splits of tasks canceled and accepted above the given threshold in seconds.
 * @property startDate - Filter cumulative statistics by a start date.
 * @property taskChannel - Filter real-time and cumulative statistics by TaskChannel.
 */
interface WorkflowStatisticsInstanceFetchOptions {
  endDate?: Date;
  minutes?: number;
  splitByWaitTime?: string;
  startDate?: Date;
  taskChannel?: string;
}

interface WorkflowStatisticsListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WorkflowStatisticsContext;
  /**
   * Constructs a workflow_statistics
   */
  get(): WorkflowStatisticsContext;
}

interface WorkflowStatisticsPayload extends WorkflowStatisticsResource, Page.TwilioResponsePayload {
}

interface WorkflowStatisticsResource {
  account_sid: string;
  cumulative: string;
  realtime: string;
  url: string;
  workflow_sid: string;
  workspace_sid: string;
}

interface WorkflowStatisticsSolution {
  workflowSid?: string;
  workspaceSid?: string;
}


declare class WorkflowStatisticsPage extends Page<V1, WorkflowStatisticsPayload, WorkflowStatisticsResource, WorkflowStatisticsInstance> {
  /**
   * Initialize the WorkflowStatisticsPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WorkflowStatisticsSolution);

  /**
   * Build an instance of WorkflowStatisticsInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WorkflowStatisticsPayload): WorkflowStatisticsInstance;
}


declare class WorkflowStatisticsInstance extends SerializableClass {
  /**
   * Initialize the WorkflowStatisticsContext
   *
   * @property accountSid - The account_sid
   * @property cumulative - The cumulative
   * @property realtime - The realtime
   * @property workflowSid - The workflow_sid
   * @property workspaceSid - The workspace_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: V1, payload: WorkflowStatisticsPayload, workspaceSid: string, workflowSid: string);

  private _proxy: WorkflowStatisticsContext;
  accountSid: string;
  cumulative: string;
  /**
   * fetch a WorkflowStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowStatisticsInstance) => any): void;
  realtime: string;
  /**
   * Produce a plain JSON object version of the WorkflowStatisticsInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
  workflowSid: string;
  workspaceSid: string;
}


declare class WorkflowStatisticsContext {
  /**
   * Initialize the WorkflowStatisticsContext
   *
   * @param version - Version of the resource
   * @param workspaceSid - The workspace_sid
   * @param workflowSid - The workflow_sid
   */
  constructor(version: V1, workspaceSid: string, workflowSid: string);

  /**
   * fetch a WorkflowStatisticsInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  fetch(opts?: WorkflowStatisticsInstanceFetchOptions, callback?: (error: Error | null, items: WorkflowStatisticsInstance) => any): Promise<WorkflowStatisticsInstance>;
}

export { WorkflowStatisticsContext, WorkflowStatisticsInstance, WorkflowStatisticsList, WorkflowStatisticsListInstance, WorkflowStatisticsPage, WorkflowStatisticsPayload, WorkflowStatisticsResource, WorkflowStatisticsSolution }
