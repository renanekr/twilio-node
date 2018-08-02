/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./proxy/V1');
import { ServiceListInstance } from './proxy/v1/service';


declare class Proxy extends Domain {
  /**
   * Initialize proxy domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly services: ServiceListInstance;
  readonly v1: V1;
}

export = Proxy;