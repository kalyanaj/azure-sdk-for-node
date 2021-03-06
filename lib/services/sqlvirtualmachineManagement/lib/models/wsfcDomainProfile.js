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
 * Active Directory account details to operate Windows Server Failover Cluster.
 *
 */
class WsfcDomainProfile {
  /**
   * Create a WsfcDomainProfile.
   * @property {string} [domainFqdn] Fully qualified name of the domain.
   * @property {string} [ouPath] Organizational Unit path in which the nodes
   * and cluster will be present.
   * @property {string} [clusterBootstrapAccount] Account name used for
   * creating cluster (at minimum needs permissions to 'Create Computer
   * Objects' in domain).
   * @property {string} [clusterOperatorAccount] Account name used for
   * operating cluster i.e. will be part of administrators group on all the
   * participating virtual machines in the cluster.
   * @property {string} [sqlServiceAccount] Account name under which SQL
   * service will run on all participating SQL virtual machines in the cluster.
   * @property {string} [fileShareWitnessPath] Optional path for fileshare
   * witness.
   * @property {string} [storageAccountUrl] Fully qualified ARM resource id of
   * the witness storage account.
   * @property {string} [storageAccountPrimaryKey] Primary key of the witness
   * storage account.
   */
  constructor() {
  }

  /**
   * Defines the metadata of WsfcDomainProfile
   *
   * @returns {object} metadata of WsfcDomainProfile
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WsfcDomainProfile',
      type: {
        name: 'Composite',
        className: 'WsfcDomainProfile',
        modelProperties: {
          domainFqdn: {
            required: false,
            serializedName: 'domainFqdn',
            type: {
              name: 'String'
            }
          },
          ouPath: {
            required: false,
            serializedName: 'ouPath',
            type: {
              name: 'String'
            }
          },
          clusterBootstrapAccount: {
            required: false,
            serializedName: 'clusterBootstrapAccount',
            type: {
              name: 'String'
            }
          },
          clusterOperatorAccount: {
            required: false,
            serializedName: 'clusterOperatorAccount',
            type: {
              name: 'String'
            }
          },
          sqlServiceAccount: {
            required: false,
            serializedName: 'sqlServiceAccount',
            type: {
              name: 'String'
            }
          },
          fileShareWitnessPath: {
            required: false,
            serializedName: 'fileShareWitnessPath',
            type: {
              name: 'String'
            }
          },
          storageAccountUrl: {
            required: false,
            serializedName: 'storageAccountUrl',
            type: {
              name: 'String'
            }
          },
          storageAccountPrimaryKey: {
            required: false,
            serializedName: 'storageAccountPrimaryKey',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = WsfcDomainProfile;
