/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the TokenList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function TokenList(version: V2010, accountSid: string): TokenListInstance;

interface TokenListInstance {
  /**
   * create a TokenInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: TokenListInstanceCreateOptions, callback?: (error: Error | null, item: TokenInstance) => any): Promise<TokenInstance>;
}

/**
 * Options to pass to create
 *
 * @property ttl - The duration in seconds the credentials are valid
 */
interface TokenListInstanceCreateOptions {
  ttl?: number;
}

interface TokenPayload extends TokenResource, Page.TwilioResponsePayload {
}

interface TokenResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  ice_servers: string;
  password: string;
  ttl: string;
  username: string;
}

interface TokenSolution {
  accountSid?: string;
}


declare class TokenPage extends Page<V2010, TokenPayload, TokenResource, TokenInstance> {
  /**
   * Initialize the TokenPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: TokenSolution);

  /**
   * Build an instance of TokenInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: TokenPayload): TokenInstance;
}


declare class TokenInstance extends SerializableClass {
  /**
   * Initialize the TokenContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property iceServers - An array representing the ephemeral credentials
   * @property password - The temporary password used for authenticating
   * @property ttl - The duration in seconds the credentials are valid
   * @property username - The temporary username that uniquely identifies a Token.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   */
  constructor(version: V2010, payload: TokenPayload, accountSid: string);

  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  iceServers: string;
  password: string;
  /**
   * Produce a plain JSON object version of the TokenInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  ttl: string;
  username: string;
}

export { TokenInstance, TokenList, TokenListInstance, TokenListInstanceCreateOptions, TokenPage, TokenPayload, TokenResource, TokenSolution }
