'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require(
    '../../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var TaskQueueCumulativeStatisticsList;
var TaskQueueCumulativeStatisticsPage;
var TaskQueueCumulativeStatisticsInstance;
var TaskQueueCumulativeStatisticsContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsList
 * @description Initialize the TaskQueueCumulativeStatisticsList
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {string} workspaceSid - The workspace_sid
 * @param {string} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
TaskQueueCumulativeStatisticsList = function
    TaskQueueCumulativeStatisticsList(version, workspaceSid, taskQueueSid) {
  /* jshint ignore:start */
  /**
   * @function cumulativeStatistics
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsContext}
   */
  /* jshint ignore:end */
  function TaskQueueCumulativeStatisticsListInstance(sid) {
    return TaskQueueCumulativeStatisticsListInstance.get(sid);
  }

  TaskQueueCumulativeStatisticsListInstance._version = version;
  // Path Solution
  TaskQueueCumulativeStatisticsListInstance._solution = {
    workspaceSid: workspaceSid,
    taskQueueSid: taskQueueSid
  };
  /* jshint ignore:start */
  /**
   * Constructs a task_queue_cumulative_statistics
   *
   * @function get
   * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsList
   * @instance
   *
   * @returns {Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsContext}
   */
  /* jshint ignore:end */
  TaskQueueCumulativeStatisticsListInstance.get = function get() {
    return new TaskQueueCumulativeStatisticsContext(
      this._version,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    );
  };

  return TaskQueueCumulativeStatisticsListInstance;
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsPage
 * @augments Page
 * @description Initialize the TaskQueueCumulativeStatisticsPage
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {object} solution - Path solution
 *
 * @returns TaskQueueCumulativeStatisticsPage
 */
/* jshint ignore:end */
TaskQueueCumulativeStatisticsPage = function
    TaskQueueCumulativeStatisticsPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(TaskQueueCumulativeStatisticsPage.prototype, Page.prototype);
TaskQueueCumulativeStatisticsPage.prototype.constructor = TaskQueueCumulativeStatisticsPage;

/* jshint ignore:start */
/**
 * Build an instance of TaskQueueCumulativeStatisticsInstance
 *
 * @function getInstance
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TaskQueueCumulativeStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueCumulativeStatisticsPage.prototype.getInstance = function
    getInstance(payload) {
  return new TaskQueueCumulativeStatisticsInstance(
    this._version,
    payload,
    this._solution.workspaceSid,
    this._solution.taskQueueSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsInstance
 * @description Initialize the TaskQueueCumulativeStatisticsContext
 *
 * @property {string} accountSid - The account_sid
 * @property {number} avgTaskAcceptanceTime - The avg_task_acceptance_time
 * @property {Date} startTime - The start_time
 * @property {Date} endTime - The end_time
 * @property {number} reservationsCreated - The reservations_created
 * @property {number} reservationsAccepted - The reservations_accepted
 * @property {number} reservationsRejected - The reservations_rejected
 * @property {number} reservationsTimedOut - The reservations_timed_out
 * @property {number} reservationsCanceled - The reservations_canceled
 * @property {number} reservationsRescinded - The reservations_rescinded
 * @property {string} splitByWaitTime - The split_by_wait_time
 * @property {string} taskQueueSid - The task_queue_sid
 * @property {string} waitDurationUntilAccepted - The wait_duration_until_accepted
 * @property {string} waitDurationUntilCanceled - The wait_duration_until_canceled
 * @property {number} tasksCanceled - The tasks_canceled
 * @property {number} tasksCompleted - The tasks_completed
 * @property {number} tasksDeleted - The tasks_deleted
 * @property {number} tasksEntered - The tasks_entered
 * @property {number} tasksMoved - The tasks_moved
 * @property {string} workspaceSid - The workspace_sid
 * @property {string} url - The url
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
TaskQueueCumulativeStatisticsInstance = function
    TaskQueueCumulativeStatisticsInstance(version, payload, workspaceSid,
    taskQueueSid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.avgTaskAcceptanceTime = deserialize.integer(payload.avg_task_acceptance_time); // jshint ignore:line
  this.startTime = deserialize.iso8601DateTime(payload.start_time); // jshint ignore:line
  this.endTime = deserialize.iso8601DateTime(payload.end_time); // jshint ignore:line
  this.reservationsCreated = deserialize.integer(payload.reservations_created); // jshint ignore:line
  this.reservationsAccepted = deserialize.integer(payload.reservations_accepted); // jshint ignore:line
  this.reservationsRejected = deserialize.integer(payload.reservations_rejected); // jshint ignore:line
  this.reservationsTimedOut = deserialize.integer(payload.reservations_timed_out); // jshint ignore:line
  this.reservationsCanceled = deserialize.integer(payload.reservations_canceled); // jshint ignore:line
  this.reservationsRescinded = deserialize.integer(payload.reservations_rescinded); // jshint ignore:line
  this.splitByWaitTime = payload.split_by_wait_time; // jshint ignore:line
  this.taskQueueSid = payload.task_queue_sid; // jshint ignore:line
  this.waitDurationUntilAccepted = payload.wait_duration_until_accepted; // jshint ignore:line
  this.waitDurationUntilCanceled = payload.wait_duration_until_canceled; // jshint ignore:line
  this.tasksCanceled = deserialize.integer(payload.tasks_canceled); // jshint ignore:line
  this.tasksCompleted = deserialize.integer(payload.tasks_completed); // jshint ignore:line
  this.tasksDeleted = deserialize.integer(payload.tasks_deleted); // jshint ignore:line
  this.tasksEntered = deserialize.integer(payload.tasks_entered); // jshint ignore:line
  this.tasksMoved = deserialize.integer(payload.tasks_moved); // jshint ignore:line
  this.workspaceSid = payload.workspace_sid; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {workspaceSid: workspaceSid, taskQueueSid: taskQueueSid, };
};

Object.defineProperty(TaskQueueCumulativeStatisticsInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TaskQueueCumulativeStatisticsContext(
        this._version,
        this._solution.workspaceSid,
        this._solution.taskQueueSid
      );
    }

    return this._context;
  }
});

/* jshint ignore:start */
/**
 * fetch a TaskQueueCumulativeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {Date} [opts.endDate] - The end_date
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {string} [opts.splitByWaitTime] - The split_by_wait_time
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueCumulativeStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueCumulativeStatisticsInstance.prototype.fetch = function fetch(opts,
    callback) {
  return this._proxy.fetch(opts, callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsContext
 * @description Initialize the TaskQueueCumulativeStatisticsContext
 *
 * @param {Twilio.Taskrouter.V1} version - Version of the resource
 * @param {sid} workspaceSid - The workspace_sid
 * @param {sid} taskQueueSid - The task_queue_sid
 */
/* jshint ignore:end */
TaskQueueCumulativeStatisticsContext = function
    TaskQueueCumulativeStatisticsContext(version, workspaceSid, taskQueueSid) {
  this._version = version;

  // Path Solution
  this._solution = {workspaceSid: workspaceSid, taskQueueSid: taskQueueSid, };
  this._uri = _.template(
    '/Workspaces/<%= workspaceSid %>/TaskQueues/<%= taskQueueSid %>/CumulativeStatistics' // jshint ignore:line
  )(this._solution);
};

/* jshint ignore:start */
/**
 * fetch a TaskQueueCumulativeStatisticsInstance
 *
 * @function fetch
 * @memberof Twilio.Taskrouter.V1.WorkspaceContext.TaskQueueContext.TaskQueueCumulativeStatisticsContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {Date} [opts.endDate] - The end_date
 * @param {number} [opts.minutes] - The minutes
 * @param {Date} [opts.startDate] - The start_date
 * @param {string} [opts.taskChannel] - The task_channel
 * @param {string} [opts.splitByWaitTime] - The split_by_wait_time
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TaskQueueCumulativeStatisticsInstance
 */
/* jshint ignore:end */
TaskQueueCumulativeStatisticsContext.prototype.fetch = function fetch(opts,
    callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'EndDate': serialize.iso8601DateTime(_.get(opts, 'endDate')),
    'Minutes': _.get(opts, 'minutes'),
    'StartDate': serialize.iso8601DateTime(_.get(opts, 'startDate')),
    'TaskChannel': _.get(opts, 'taskChannel'),
    'SplitByWaitTime': _.get(opts, 'splitByWaitTime')
  });

  var promise = this._version.fetch({uri: this._uri, method: 'GET', params: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new TaskQueueCumulativeStatisticsInstance(
      this._version,
      payload,
      this._solution.workspaceSid,
      this._solution.taskQueueSid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  TaskQueueCumulativeStatisticsList: TaskQueueCumulativeStatisticsList,
  TaskQueueCumulativeStatisticsPage: TaskQueueCumulativeStatisticsPage,
  TaskQueueCumulativeStatisticsInstance: TaskQueueCumulativeStatisticsInstance,
  TaskQueueCumulativeStatisticsContext: TaskQueueCumulativeStatisticsContext
};