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
 * @class
 * Initializes a new instance of the CommitmentPlanListResult class.
 * @constructor
 * A page of commitment plan resources.
 *
 * @member {string} [nextLink] A URI to retrieve the next page of results.
 *
 */
class CommitmentPlanListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of CommitmentPlanListResult
   *
   * @returns {object} metadata of CommitmentPlanListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CommitmentPlanListResult',
      type: {
        name: 'Composite',
        className: 'CommitmentPlanListResult',
        modelProperties: {
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CommitmentPlanElementType',
                  type: {
                    name: 'Composite',
                    className: 'CommitmentPlan'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CommitmentPlanListResult;