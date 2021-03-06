/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The session object.
 *
 * @extends models['Resource']
 */
class SessionResource extends models['Resource'] {
  /**
   * Create a SessionResource.
   * @member {string} [userName] The username connecting to the session.
   * @member {date} [created] UTC date and time when node was first added to
   * management service.
   * @member {date} [updated] UTC date and time when node was last updated.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SessionResource
   *
   * @returns {object} metadata of SessionResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SessionResource',
      type: {
        name: 'Composite',
        className: 'SessionResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            readOnly: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          userName: {
            required: false,
            serializedName: 'properties.userName',
            type: {
              name: 'String'
            }
          },
          created: {
            required: false,
            serializedName: 'properties.created',
            type: {
              name: 'DateTime'
            }
          },
          updated: {
            required: false,
            serializedName: 'properties.updated',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = SessionResource;
