/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Studio = require('../Studio');
import Version = require('../../base/Version');
import { FlowList } from './v1/flow';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Studio
   *
   * @property flows - flows resource
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Studio);

  readonly flows: FlowList;
}

export = V1;