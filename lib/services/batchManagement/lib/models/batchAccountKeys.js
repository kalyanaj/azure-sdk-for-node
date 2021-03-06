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

/**
 * A set of Azure Batch account keys.
 *
 */
class BatchAccountKeys {
  /**
   * Create a BatchAccountKeys.
   * @property {string} [accountName] The Batch account name.
   * @property {string} [primary] The primary key associated with the account.
   * @property {string} [secondary] The secondary key associated with the
   * account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of BatchAccountKeys
   *
   * @returns {object} metadata of BatchAccountKeys
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'BatchAccountKeys',
      type: {
        name: 'Composite',
        className: 'BatchAccountKeys',
        modelProperties: {
          accountName: {
            required: false,
            readOnly: true,
            serializedName: 'accountName',
            type: {
              name: 'String'
            }
          },
          primary: {
            required: false,
            readOnly: true,
            serializedName: 'primary',
            type: {
              name: 'String'
            }
          },
          secondary: {
            required: false,
            readOnly: true,
            serializedName: 'secondary',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = BatchAccountKeys;
