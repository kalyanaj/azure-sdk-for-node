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
 * @summary Options for enabling automatic scaling on a pool.
  *
 */
class PoolEnableAutoScaleParameter {
  /**
   * Create a PoolEnableAutoScaleParameter.
   * @property {string} [autoScaleFormula] The formula for the desired number
   * of compute nodes in the pool. The formula is checked for validity before
   * it is applied to the pool. If the formula is not valid, the Batch service
   * rejects the request with detailed error information. For more information
   * about specifying this formula, see Automatically scale compute nodes in an
   * Azure Batch pool
   * (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling).
   * @property {moment.duration} [autoScaleEvaluationInterval] The time
   * interval at which to automatically adjust the pool size according to the
   * autoscale formula. The default value is 15 minutes. The minimum and
   * maximum value are 5 minutes and 168 hours respectively. If you specify a
   * value less than 5 minutes or greater than 168 hours, the Batch service
   * rejects the request with an invalid property value error; if you are
   * calling the REST API directly, the HTTP status code is 400 (Bad Request).
   * If you specify a new interval, then the existing autoscale evaluation
   * schedule will be stopped and a new autoscale evaluation schedule will be
   * started, with its starting time being the time when this request was
   * issued.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PoolEnableAutoScaleParameter
   *
   * @returns {object} metadata of PoolEnableAutoScaleParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PoolEnableAutoScaleParameter',
      type: {
        name: 'Composite',
        className: 'PoolEnableAutoScaleParameter',
        modelProperties: {
          autoScaleFormula: {
            required: false,
            serializedName: 'autoScaleFormula',
            type: {
              name: 'String'
            }
          },
          autoScaleEvaluationInterval: {
            required: false,
            serializedName: 'autoScaleEvaluationInterval',
            type: {
              name: 'TimeSpan'
            }
          }
        }
      }
    };
  }
}

module.exports = PoolEnableAutoScaleParameter;
