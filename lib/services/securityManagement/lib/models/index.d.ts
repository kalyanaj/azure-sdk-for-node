/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Describes an Azure resource.
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the Kind class.
 * @constructor
 * Describes an Azure resource with kind
 *
 * @member {string} [kind] Kind of the resource
 */
export interface Kind {
  kind?: string;
}

/**
 * @class
 * Initializes a new instance of the SecurityContact class.
 * @constructor
 * Contact details for security issues
 *
 * @member {string} email The email of this security contact
 * @member {string} [phone] The phone number of this security contact
 * @member {string} alertNotifications Whether to send security alerts
 * notifications to the security contact. Possible values include: 'On', 'Off'
 * @member {string} alertsToAdmins Whether to send security alerts
 * notifications to subscription admins. Possible values include: 'On', 'Off'
 */
export interface SecurityContact extends Resource {
  email: string;
  phone?: string;
  alertNotifications: string;
  alertsToAdmins: string;
}

/**
 * @class
 * Initializes a new instance of the Pricing class.
 * @constructor
 * Pricing tier will be applied for the scope based on the resource ID
 *
 * @member {string} pricingTier Pricing tier type. Possible values include:
 * 'Free', 'Standard'
 */
export interface Pricing extends Resource {
  pricingTier: string;
}

/**
 * @class
 * Initializes a new instance of the WorkspaceSetting class.
 * @constructor
 * Configures where to store the OMS agent data for workspaces under a scope
 *
 * @member {string} workspaceId The full Azure ID of the workspace to save the
 * data in
 * @member {string} scope All the VMs in this scope will send their security
 * data to the mentioned workspace unless overridden by a setting with more
 * specific scope
 */
export interface WorkspaceSetting extends Resource {
  workspaceId: string;
  scope: string;
}

/**
 * @class
 * Initializes a new instance of the AutoProvisioningSetting class.
 * @constructor
 * Auto provisioning setting
 *
 * @member {string} autoProvision Describes what kind of security agent
 * provisioning action to take. Possible values include: 'On', 'Off'
 */
export interface AutoProvisioningSetting extends Resource {
  autoProvision: string;
}

/**
 * @class
 * Initializes a new instance of the ComplianceSegment class.
 * @constructor
 * A segment of a compliance assessment.
 *
 * @member {string} [segmentType] The segment type, e.g. compliant,
 * non-compliance, insufficient coverage, N/A, etc.
 * @member {number} [percentage] The size (%) of the segment.
 */
export interface ComplianceSegment {
  readonly segmentType?: string;
  readonly percentage?: number;
}

/**
 * @class
 * Initializes a new instance of the Compliance class.
 * @constructor
 * Compliance of a scope
 *
 * @member {date} [assessmentTimestampUtcDate] The timestamp when the
 * Compliance calculation was conducted.
 * @member {number} [resourceCount] The resource count of the given
 * subscription for which the Compliance calculation was conducted (needed for
 * Management Group Compliance calculation).
 * @member {array} [assessmentResult] An array of segment, which is the
 * actually the compliance assessment.
 */
export interface Compliance extends Resource {
  readonly assessmentTimestampUtcDate?: Date;
  readonly resourceCount?: number;
  readonly assessmentResult?: ComplianceSegment[];
}

/**
 * @class
 * Initializes a new instance of the AdvancedThreatProtectionSetting class.
 * @constructor
 * The Advanced Threat Protection resource.
 *
 * @member {boolean} [isEnabled] Indicates whether Advanced Threat Protection
 * is enabled.
 */
export interface AdvancedThreatProtectionSetting extends Resource {
  isEnabled?: boolean;
}

/**
 * @class
 * Initializes a new instance of the Setting class.
 * @constructor
 * Represents a security setting in Azure Security Center.
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} kind Polymorphic Discriminator
 */
export interface Setting {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  kind: string;
}

/**
 * @class
 * Initializes a new instance of the DataExportSetting class.
 * @constructor
 * Represents a data export setting
 *
 * @member {boolean} enabled Is the data export setting is enabled
 */
export interface DataExportSetting extends Setting {
  enabled: boolean;
}

/**
 * @class
 * Initializes a new instance of the SettingKind1 class.
 * @constructor
 * The kind of the security setting
 *
 * @member {string} [kind] the kind of the settings string. Possible values
 * include: 'DataExportSetting'
 */
export interface SettingKind1 {
  kind?: string;
}

/**
 * @class
 * Initializes a new instance of the SensitivityLabel class.
 * @constructor
 * The sensitivity label.
 *
 * @member {string} [displayName] The name of the sensitivity label.
 * @member {number} [order] The order of the sensitivity label.
 * @member {boolean} [enabled] Indicates whether the label is enabled or not.
 */
export interface SensitivityLabel {
  displayName?: string;
  order?: number;
  enabled?: boolean;
}

/**
 * @class
 * Initializes a new instance of the InformationProtectionKeyword class.
 * @constructor
 * The information type keyword.
 *
 * @member {string} [pattern] The keyword pattern.
 * @member {boolean} [custom] Indicates whether the keyword is custom or not.
 * @member {boolean} [canBeNumeric] Indicates whether the keyword can be
 * applied on numeric types or not.
 * @member {boolean} [excluded] Indicates whether the keyword is excluded or
 * not.
 */
export interface InformationProtectionKeyword {
  pattern?: string;
  custom?: boolean;
  canBeNumeric?: boolean;
  excluded?: boolean;
}

/**
 * @class
 * Initializes a new instance of the InformationType class.
 * @constructor
 * The information type.
 *
 * @member {string} [displayName] The name of the information type.
 * @member {number} [order] The order of the information type.
 * @member {uuid} [recommendedLabelId] The recommended label id to be
 * associated with this information type.
 * @member {boolean} [enabled] Indicates whether the information type is
 * enabled or not.
 * @member {boolean} [custom] Indicates whether the information type is custom
 * or not.
 * @member {array} [keywords] The information type keywords.
 */
export interface InformationType {
  displayName?: string;
  order?: number;
  recommendedLabelId?: string;
  enabled?: boolean;
  custom?: boolean;
  keywords?: InformationProtectionKeyword[];
}

/**
 * @class
 * Initializes a new instance of the InformationProtectionPolicy class.
 * @constructor
 * Information protection policy.
 *
 * @member {date} [lastModifiedUtc] Describes the last UTC time the policy was
 * modified.
 * @member {object} [labels] Dictionary of sensitivity labels.
 * @member {object} [informationTypes] The sensitivity information types.
 */
export interface InformationProtectionPolicy extends Resource {
  readonly lastModifiedUtc?: Date;
  labels?: { [propertyName: string]: SensitivityLabel };
  informationTypes?: { [propertyName: string]: InformationType };
}

/**
 * @class
 * Initializes a new instance of the Location class.
 * @constructor
 * Describes an Azure resource with location
 *
 * @member {string} [location] Location where the resource is stored
 */
export interface Location {
  readonly location?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationDisplay class.
 * @constructor
 * Security operation display
 *
 * @member {string} [provider] The resource provider for the operation.
 * @member {string} [resource] The display name of the resource the operation
 * applies to.
 * @member {string} [operation] The display name of the security operation.
 * @member {string} [description] The description of the operation.
 */
export interface OperationDisplay {
  readonly provider?: string;
  readonly resource?: string;
  readonly operation?: string;
  readonly description?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * Possible operation in the REST API of Microsoft.Security
 *
 * @member {string} [name] Name of the operation
 * @member {string} [origin] Where the operation is originated
 * @member {object} [display]
 * @member {string} [display.provider] The resource provider for the operation.
 * @member {string} [display.resource] The display name of the resource the
 * operation applies to.
 * @member {string} [display.operation] The display name of the security
 * operation.
 * @member {string} [display.description] The description of the operation.
 */
export interface Operation {
  readonly name?: string;
  readonly origin?: string;
  display?: OperationDisplay;
}

/**
 * @class
 * Initializes a new instance of the SecurityTaskParameters class.
 * @constructor
 * Changing set of properties, depending on the task type that is derived from
 * the name field
 *
 * @member {string} [name] Name of the task type
 */
export interface SecurityTaskParameters {
  readonly name?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the SecurityTask class.
 * @constructor
 * Security task that we recommend to do in order to strengthen security
 *
 * @member {string} [state] State of the task (Active, Resolved etc.)
 * @member {date} [creationTimeUtc] The time this task was discovered in UTC
 * @member {object} [securityTaskParameters]
 * @member {string} [securityTaskParameters.name] Name of the task type
 * @member {date} [lastStateChangeTimeUtc] The time this task's details were
 * last changed in UTC
 * @member {string} [subState] Additional data on the state of the task
 */
export interface SecurityTask extends Resource {
  readonly state?: string;
  readonly creationTimeUtc?: Date;
  securityTaskParameters?: SecurityTaskParameters;
  readonly lastStateChangeTimeUtc?: Date;
  readonly subState?: string;
}

/**
 * @class
 * Initializes a new instance of the AscLocation class.
 * @constructor
 * The ASC location of the subscription is in the "name" field
 *
 * @member {object} [properties]
 */
export interface AscLocation extends Resource {
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the AlertEntity class.
 * @constructor
 * Changing set of properties depending on the entity type.
 *
 * @member {string} [type] Type of entity
 */
export interface AlertEntity {
  readonly type?: string;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the AlertConfidenceReason class.
 * @constructor
 * Factors that increase our confidence that the alert is a true positive
 *
 * @member {string} [type] Type of confidence factor
 * @member {string} [reason] description of the confidence reason
 */
export interface AlertConfidenceReason {
  readonly type?: string;
  readonly reason?: string;
}

/**
 * @class
 * Initializes a new instance of the Alert class.
 * @constructor
 * Security alert
 *
 * @member {string} [state] State of the alert (Active, Dismissed etc.)
 * @member {date} [reportedTimeUtc] The time the incident was reported to
 * Microsoft.Security in UTC
 * @member {string} [vendorName] Name of the vendor that discovered the
 * incident
 * @member {string} [alertName] Name of the alert type
 * @member {string} [alertDisplayName] Display name of the alert type
 * @member {date} [detectedTimeUtc] The time the incident was detected by the
 * vendor
 * @member {string} [description] Description of the incident and what it means
 * @member {string} [remediationSteps] Recommended steps to reradiate the
 * incident
 * @member {string} [actionTaken] The action that was taken as a response to
 * the alert (Active, Blocked etc.)
 * @member {string} [reportedSeverity] Estimated severity of this alert
 * @member {string} [compromisedEntity] The entity that the incident happened
 * on
 * @member {string} [associatedResource] Azure resource ID of the associated
 * resource
 * @member {object} [extendedProperties]
 * @member {string} [systemSource] The type of the alerted resource (Azure,
 * Non-Azure)
 * @member {boolean} [canBeInvestigated] Whether this alert can be investigated
 * with Azure Security Center
 * @member {array} [entities] objects that are related to this alerts
 * @member {number} [confidenceScore] level of confidence we have on the alert
 * @member {array} [confidenceReasons] reasons the alert got the
 * confidenceScore value
 * @member {string} [subscriptionId] Azure subscription ID of the resource that
 * had the security alert or the subscription ID of the workspace that this
 * resource reports to
 * @member {string} [instanceId] Instance ID of the alert.
 * @member {string} [workspaceArmId] Azure resource ID of the workspace that
 * the alert was reported to.
 */
export interface Alert extends Resource {
  readonly state?: string;
  readonly reportedTimeUtc?: Date;
  readonly vendorName?: string;
  readonly alertName?: string;
  readonly alertDisplayName?: string;
  readonly detectedTimeUtc?: Date;
  readonly description?: string;
  readonly remediationSteps?: string;
  readonly actionTaken?: string;
  readonly reportedSeverity?: string;
  readonly compromisedEntity?: string;
  readonly associatedResource?: string;
  extendedProperties?: { [propertyName: string]: any };
  readonly systemSource?: string;
  readonly canBeInvestigated?: boolean;
  entities?: AlertEntity[];
  readonly confidenceScore?: number;
  confidenceReasons?: AlertConfidenceReason[];
  readonly subscriptionId?: string;
  readonly instanceId?: string;
  readonly workspaceArmId?: string;
}

/**
 * @class
 * Initializes a new instance of the DiscoveredSecuritySolution class.
 * @constructor
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [location] Location where the resource is stored
 * @member {string} securityFamily The security family of the discovered
 * solution. Possible values include: 'Waf', 'Ngfw', 'SaasWaf', 'Va'
 * @member {string} offer The security solutions' image offer
 * @member {string} publisher The security solutions' image publisher
 * @member {string} sku The security solutions' image sku
 */
export interface DiscoveredSecuritySolution {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly location?: string;
  securityFamily: string;
  offer: string;
  publisher: string;
  sku: string;
}

/**
 * @class
 * Initializes a new instance of the TopologySingleResourceParent class.
 * @constructor
 * @member {string} [resourceId] Azure resource id which serves as parent
 * resource in topology view
 */
export interface TopologySingleResourceParent {
  readonly resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the TopologySingleResourceChild class.
 * @constructor
 * @member {string} [resourceId] Azure resource id which serves as child
 * resource in topology view
 */
export interface TopologySingleResourceChild {
  readonly resourceId?: string;
}

/**
 * @class
 * Initializes a new instance of the TopologySingleResource class.
 * @constructor
 * @member {string} [resourceId] Azure resource id
 * @member {string} [severity] The security severity of the resource
 * @member {boolean} [recommendationsExist] Indicates if the resource has
 * security recommendations
 * @member {string} [networkZones] Indicates the resource connectivity level to
 * the Internet (InternetFacing, Internal ,etc.)
 * @member {number} [topologyScore] Score of the resource based on its security
 * severity
 * @member {string} [location] The location of this resource
 * @member {array} [parents] Azure resources connected to this resource which
 * are in higher level in the topology view
 * @member {array} [children] Azure resources connected to this resource which
 * are in lower level in the topology view
 */
export interface TopologySingleResource {
  readonly resourceId?: string;
  readonly severity?: string;
  readonly recommendationsExist?: boolean;
  readonly networkZones?: string;
  readonly topologyScore?: number;
  readonly location?: string;
  readonly parents?: TopologySingleResourceParent[];
  readonly children?: TopologySingleResourceChild[];
}

/**
 * @class
 * Initializes a new instance of the TopologyResource class.
 * @constructor
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [location] Location where the resource is stored
 * @member {date} [calculatedDateTime] The UTC time on which the topology was
 * calculated
 * @member {array} [topologyResources] Azure resources which are part of this
 * topology resource
 */
export interface TopologyResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly location?: string;
  readonly calculatedDateTime?: Date;
  readonly topologyResources?: TopologySingleResource[];
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessPortRule class.
 * @constructor
 * @member {number} number
 * @member {string} protocol Possible values include: 'TCP', 'UDP', 'All'
 * @member {string} [allowedSourceAddressPrefix] Mutually exclusive with the
 * "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR,
 * for example "192.168.0.3" or "192.168.0.0/16".
 * @member {array} [allowedSourceAddressPrefixes] Mutually exclusive with the
 * "allowedSourceAddressPrefix" parameter.
 * @member {string} maxRequestAccessDuration Maximum duration requests can be
 * made for. In ISO 8601 duration format. Minimum 5 minutes, maximum 1 day
 */
export interface JitNetworkAccessPortRule {
  number: number;
  protocol: string;
  allowedSourceAddressPrefix?: string;
  allowedSourceAddressPrefixes?: string[];
  maxRequestAccessDuration: string;
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessPolicyVirtualMachine class.
 * @constructor
 * @member {string} id Resource ID of the virtual machine that is linked to
 * this policy
 * @member {array} ports Port configurations for the virtual machine
 */
export interface JitNetworkAccessPolicyVirtualMachine {
  id: string;
  ports: JitNetworkAccessPortRule[];
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessRequestPort class.
 * @constructor
 * @member {number} number
 * @member {string} [allowedSourceAddressPrefix] Mutually exclusive with the
 * "allowedSourceAddressPrefixes" parameter. Should be an IP address or CIDR,
 * for example "192.168.0.3" or "192.168.0.0/16".
 * @member {array} [allowedSourceAddressPrefixes] Mutually exclusive with the
 * "allowedSourceAddressPrefix" parameter.
 * @member {date} endTimeUtc The date & time at which the request ends in UTC
 * @member {string} status The status of the port. Possible values include:
 * 'Revoked', 'Initiated'
 * @member {string} statusReason A description of why the `status` has its
 * value. Possible values include: 'Expired', 'UserRequested',
 * 'NewerRequestInitiated'
 */
export interface JitNetworkAccessRequestPort {
  number: number;
  allowedSourceAddressPrefix?: string;
  allowedSourceAddressPrefixes?: string[];
  endTimeUtc: Date;
  status: string;
  statusReason: string;
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessRequestVirtualMachine class.
 * @constructor
 * @member {string} id Resource ID of the virtual machine that is linked to
 * this policy
 * @member {array} ports The ports that were opened for the virtual machine
 */
export interface JitNetworkAccessRequestVirtualMachine {
  id: string;
  ports: JitNetworkAccessRequestPort[];
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessRequest class.
 * @constructor
 * @member {array} virtualMachines
 * @member {date} startTimeUtc The start time of the request in UTC
 * @member {string} requestor The identity of the person who made the request
 */
export interface JitNetworkAccessRequest {
  virtualMachines: JitNetworkAccessRequestVirtualMachine[];
  startTimeUtc: Date;
  requestor: string;
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessPolicy class.
 * @constructor
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [kind] Kind of the resource
 * @member {string} [location] Location where the resource is stored
 * @member {array} virtualMachines Configurations for
 * Microsoft.Compute/virtualMachines resource type.
 * @member {array} [requests]
 * @member {string} [provisioningState] Gets the provisioning state of the
 * Just-in-Time policy.
 */
export interface JitNetworkAccessPolicy {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  kind?: string;
  readonly location?: string;
  virtualMachines: JitNetworkAccessPolicyVirtualMachine[];
  requests?: JitNetworkAccessRequest[];
  readonly provisioningState?: string;
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessPolicyInitiatePort class.
 * @constructor
 * @member {number} number
 * @member {string} [allowedSourceAddressPrefix] Source of the allowed traffic.
 * If omitted, the request will be for the source IP address of the initiate
 * request.
 * @member {date} endTimeUtc The time to close the request in UTC
 */
export interface JitNetworkAccessPolicyInitiatePort {
  number: number;
  allowedSourceAddressPrefix?: string;
  endTimeUtc: Date;
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessPolicyInitiateVirtualMachine class.
 * @constructor
 * @member {string} id Resource ID of the virtual machine that is linked to
 * this policy
 * @member {array} ports The ports to open for the resource with the `id`
 */
export interface JitNetworkAccessPolicyInitiateVirtualMachine {
  id: string;
  ports: JitNetworkAccessPolicyInitiatePort[];
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessPolicyInitiateRequest class.
 * @constructor
 * @member {array} virtualMachines A list of virtual machines & ports to open
 * access for
 */
export interface JitNetworkAccessPolicyInitiateRequest {
  virtualMachines: JitNetworkAccessPolicyInitiateVirtualMachine[];
}

/**
 * @class
 * Initializes a new instance of the ExternalSecuritySolution class.
 * @constructor
 * Represents a security solution external to Azure Security Center which sends
 * information to an OMS workspace and whos data is displayed by Azure Security
 * Center.
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [location] Location where the resource is stored
 * @member {string} kind Polymorphic Discriminator
 */
export interface ExternalSecuritySolution {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly location?: string;
  kind: string;
}

/**
 * @class
 * Initializes a new instance of the ExternalSecuritySolutionProperties class.
 * @constructor
 * The solution properties (correspond to the solution kind)
 *
 * @member {string} [deviceVendor]
 * @member {string} [deviceType]
 * @member {object} [workspace]
 * @member {string} [workspace.id] Azure resource ID of the connected OMS
 * workspace
 */
export interface ExternalSecuritySolutionProperties {
  deviceVendor?: string;
  deviceType?: string;
  workspace?: ConnectedWorkspace;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @class
 * Initializes a new instance of the CefSolutionProperties class.
 * @constructor
 * @summary The external security solution properties for CEF solutions
 *
 * @member {string} [hostname]
 * @member {string} [agent]
 * @member {string} [lastEventReceived]
 */
export interface CefSolutionProperties extends ExternalSecuritySolutionProperties {
  hostname?: string;
  agent?: string;
  lastEventReceived?: string;
}

/**
 * @class
 * Initializes a new instance of the CefExternalSecuritySolution class.
 * @constructor
 * Represents a security solution which sends CEF logs to an OMS workspace
 *
 * @member {object} [properties]
 * @member {string} [properties.hostname]
 * @member {string} [properties.agent]
 * @member {string} [properties.lastEventReceived]
 */
export interface CefExternalSecuritySolution extends ExternalSecuritySolution {
  properties?: CefSolutionProperties;
}

/**
 * @class
 * Initializes a new instance of the AtaSolutionProperties class.
 * @constructor
 * @summary The external security solution properties for ATA solutions
 *
 * @member {string} [lastEventReceived]
 */
export interface AtaSolutionProperties extends ExternalSecuritySolutionProperties {
  lastEventReceived?: string;
}

/**
 * @class
 * Initializes a new instance of the AtaExternalSecuritySolution class.
 * @constructor
 * Represents an ATA security solution which sends logs to an OMS workspace
 *
 * @member {object} [properties]
 * @member {string} [properties.lastEventReceived]
 */
export interface AtaExternalSecuritySolution extends ExternalSecuritySolution {
  properties?: AtaSolutionProperties;
}

/**
 * @class
 * Initializes a new instance of the ConnectedWorkspace class.
 * @constructor
 * @summary Represents an OMS workspace to which the solution is connected
 *
 * @member {string} [id] Azure resource ID of the connected OMS workspace
 */
export interface ConnectedWorkspace {
  id?: string;
}

/**
 * @class
 * Initializes a new instance of the AadSolutionProperties class.
 * @constructor
 * @summary The external security solution properties for AAD solutions
 *
 * @member {string} [deviceVendor]
 * @member {string} [deviceType]
 * @member {object} [workspace]
 * @member {string} [workspace.id] Azure resource ID of the connected OMS
 * workspace
 * @member {string} [connectivityState] The connectivity state of the external
 * AAD solution . Possible values include: 'Discovered', 'NotLicensed',
 * 'Connected'
 */
export interface AadSolutionProperties {
  deviceVendor?: string;
  deviceType?: string;
  workspace?: ConnectedWorkspace;
  connectivityState?: string;
}

/**
 * @class
 * Initializes a new instance of the AadExternalSecuritySolution class.
 * @constructor
 * Represents an AAD identity protection solution which sends logs to an OMS
 * workspace.
 *
 * @member {object} [properties]
 * @member {string} [properties.deviceVendor]
 * @member {string} [properties.deviceType]
 * @member {object} [properties.workspace]
 * @member {string} [properties.workspace.id] Azure resource ID of the
 * connected OMS workspace
 * @member {string} [properties.connectivityState] Possible values include:
 * 'Discovered', 'NotLicensed', 'Connected'
 */
export interface AadExternalSecuritySolution extends ExternalSecuritySolution {
  properties?: AadSolutionProperties;
}

/**
 * @class
 * Initializes a new instance of the ExternalSecuritySolutionKind1 class.
 * @constructor
 * Describes an Azure resource with kind
 *
 * @member {string} [kind] The kind of the external solution. Possible values
 * include: 'CEF', 'ATA', 'AAD'
 */
export interface ExternalSecuritySolutionKind1 {
  kind?: string;
}

/**
 * @class
 * Initializes a new instance of the AadConnectivityState1 class.
 * @constructor
 * Describes an Azure resource with kind
 *
 * @member {string} [connectivityState] The connectivity state of the external
 * AAD solution . Possible values include: 'Discovered', 'NotLicensed',
 * 'Connected'
 */
export interface AadConnectivityState1 {
  connectivityState?: string;
}

/**
 * @class
 * Initializes a new instance of the ConnectedResource class.
 * @constructor
 * Describes properties of a connected resource
 *
 * @member {string} [connectedResourceId] The Azure resource id of the
 * connected resource
 * @member {string} [tcpPorts] The allowed tcp ports
 * @member {string} [udpPorts] The allowed udp ports
 */
export interface ConnectedResource {
  readonly connectedResourceId?: string;
  readonly tcpPorts?: string;
  readonly udpPorts?: string;
}

/**
 * @class
 * Initializes a new instance of the ConnectableResource class.
 * @constructor
 * Describes the allowed inbound and outbound traffic of an Azure resource
 *
 * @member {string} [id] The Azure resource id
 * @member {array} [inboundConnectedResources] The list of Azure resources that
 * the resource has inbound allowed connection from
 * @member {array} [outboundConnectedResources] The list of Azure resources
 * that the resource has outbound allowed connection to
 */
export interface ConnectableResource {
  readonly id?: string;
  readonly inboundConnectedResources?: ConnectedResource[];
  readonly outboundConnectedResources?: ConnectedResource[];
}

/**
 * @class
 * Initializes a new instance of the AllowedConnectionsResource class.
 * @constructor
 * The resource whose properties describes the allowed traffic between Azure
 * resources
 *
 * @member {string} [id] Resource Id
 * @member {string} [name] Resource name
 * @member {string} [type] Resource type
 * @member {string} [location] Location where the resource is stored
 * @member {date} [calculatedDateTime] The UTC time on which the allowed
 * connections resource was calculated
 * @member {array} [connectableResources] List of connectable resources
 */
export interface AllowedConnectionsResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  readonly location?: string;
  readonly calculatedDateTime?: Date;
  readonly connectableResources?: ConnectableResource[];
}


/**
 * @class
 * Initializes a new instance of the PricingList class.
 * @constructor
 * List of pricing configurations response
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface PricingList extends Array<Pricing> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SecurityContactList class.
 * @constructor
 * List of security contacts response
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface SecurityContactList extends Array<SecurityContact> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkspaceSettingList class.
 * @constructor
 * List of workspace settings response
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface WorkspaceSettingList extends Array<WorkspaceSetting> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AutoProvisioningSettingList class.
 * @constructor
 * List of all the auto provisioning settings response
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface AutoProvisioningSettingList extends Array<AutoProvisioningSetting> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ComplianceList class.
 * @constructor
 * List of Compliance objects response
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface ComplianceList extends Array<Compliance> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SettingsList class.
 * @constructor
 * Subscription settings list.
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface SettingsList extends Array<Setting> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the InformationProtectionPolicyList class.
 * @constructor
 * Information protection policies response.
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface InformationProtectionPolicyList extends Array<InformationProtectionPolicy> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OperationList class.
 * @constructor
 * List of possible operations for Microsoft.Security resource provider
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface OperationList extends Array<Operation> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AscLocationList class.
 * @constructor
 * List of locations where ASC saves your data
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface AscLocationList extends Array<AscLocation> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SecurityTaskList class.
 * @constructor
 * List of security task recommendations
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface SecurityTaskList extends Array<SecurityTask> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AlertList class.
 * @constructor
 * List of security alerts
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface AlertList extends Array<Alert> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DiscoveredSecuritySolutionList class.
 * @constructor
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface DiscoveredSecuritySolutionList extends Array<DiscoveredSecuritySolution> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the JitNetworkAccessPoliciesList class.
 * @constructor
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface JitNetworkAccessPoliciesList extends Array<JitNetworkAccessPolicy> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ExternalSecuritySolutionList class.
 * @constructor
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface ExternalSecuritySolutionList extends Array<ExternalSecuritySolution> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the TopologyList class.
 * @constructor
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface TopologyList extends Array<TopologyResource> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the AllowedConnectionsList class.
 * @constructor
 * List of all possible traffic between Azure resources
 *
 * @member {string} [nextLink] The URI to fetch the next page.
 */
export interface AllowedConnectionsList extends Array<AllowedConnectionsResource> {
  readonly nextLink?: string;
}