/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Preview = require('../Preview');
import Version = require('../../base/Version');
import { FlowList } from './studio/flow';


declare class Studio extends Version {
  /**
   * Initialize the Studio version of Preview
   *
   * @property flows - flows resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Preview);

  readonly flows: FlowList;
}

export = Studio;