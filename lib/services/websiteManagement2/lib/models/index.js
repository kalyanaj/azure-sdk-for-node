/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.AppServiceCertificate = require('./appServiceCertificate');
exports.Resource = require('./resource');
exports.AppServiceCertificateResource = require('./appServiceCertificateResource');
exports.CertificateDetails = require('./certificateDetails');
exports.AppServiceCertificateOrder = require('./appServiceCertificateOrder');
exports.ProxyOnlyResource = require('./proxyOnlyResource');
exports.AppServiceCertificateOrderPatchResource = require('./appServiceCertificateOrderPatchResource');
exports.AppServiceCertificatePatchResource = require('./appServiceCertificatePatchResource');
exports.CertificateEmail = require('./certificateEmail');
exports.CertificateOrderAction = require('./certificateOrderAction');
exports.ReissueCertificateOrderRequest = require('./reissueCertificateOrderRequest');
exports.RenewCertificateOrderRequest = require('./renewCertificateOrderRequest');
exports.SiteSeal = require('./siteSeal');
exports.SiteSealRequest = require('./siteSealRequest');
exports.VnetRoute = require('./vnetRoute');
exports.VnetInfo = require('./vnetInfo');
exports.VnetGateway = require('./vnetGateway');
exports.User = require('./user');
exports.Snapshot = require('./snapshot');
exports.ResourceMetricAvailability = require('./resourceMetricAvailability');
exports.ResourceMetricDefinition = require('./resourceMetricDefinition');
exports.PushSettings = require('./pushSettings');
exports.Identifier = require('./identifier');
exports.HybridConnectionKey = require('./hybridConnectionKey');
exports.HybridConnection = require('./hybridConnection');
exports.DeletedSite = require('./deletedSite');
exports.ManagedServiceIdentity = require('./managedServiceIdentity');
exports.SlotSwapStatus = require('./slotSwapStatus');
exports.CloningInfo = require('./cloningInfo');
exports.HostingEnvironmentProfile = require('./hostingEnvironmentProfile');
exports.IpSecurityRestriction = require('./ipSecurityRestriction');
exports.ApiDefinitionInfo = require('./apiDefinitionInfo');
exports.CorsSettings = require('./corsSettings');
exports.AutoHealCustomAction = require('./autoHealCustomAction');
exports.AutoHealActions = require('./autoHealActions');
exports.SlowRequestsBasedTrigger = require('./slowRequestsBasedTrigger');
exports.StatusCodesBasedTrigger = require('./statusCodesBasedTrigger');
exports.RequestsBasedTrigger = require('./requestsBasedTrigger');
exports.AutoHealTriggers = require('./autoHealTriggers');
exports.AutoHealRules = require('./autoHealRules');
exports.SiteLimits = require('./siteLimits');
exports.RampUpRule = require('./rampUpRule');
exports.Experiments = require('./experiments');
exports.VirtualDirectory = require('./virtualDirectory');
exports.VirtualApplication = require('./virtualApplication');
exports.HandlerMapping = require('./handlerMapping');
exports.SiteMachineKey = require('./siteMachineKey');
exports.ConnStringInfo = require('./connStringInfo');
exports.AzureStorageInfoValue = require('./azureStorageInfoValue');
exports.NameValuePair = require('./nameValuePair');
exports.SiteConfig = require('./siteConfig');
exports.HostNameSslState = require('./hostNameSslState');
exports.Site = require('./site');
exports.Capability = require('./capability');
exports.SkuCapacity = require('./skuCapacity');
exports.SkuDescription = require('./skuDescription');
exports.AppServicePlan = require('./appServicePlan');
exports.DefaultErrorResponseErrorDetailsItem = require('./defaultErrorResponseErrorDetailsItem');
exports.DefaultErrorResponseError = require('./defaultErrorResponseError');
exports.DefaultErrorResponse = require('./defaultErrorResponse');
exports.NameIdentifier = require('./nameIdentifier');
exports.LogSpecification = require('./logSpecification');
exports.MetricAvailability = require('./metricAvailability');
exports.Dimension = require('./dimension');
exports.MetricSpecification = require('./metricSpecification');
exports.ServiceSpecification = require('./serviceSpecification');
exports.CsmOperationDescriptionProperties = require('./csmOperationDescriptionProperties');
exports.CsmOperationDisplay = require('./csmOperationDisplay');
exports.CsmOperationDescription = require('./csmOperationDescription');
exports.Address = require('./address');
exports.Contact = require('./contact');
exports.HostName = require('./hostName');
exports.DomainPurchaseConsent = require('./domainPurchaseConsent');
exports.Domain = require('./domain');
exports.DomainAvailablilityCheckResult = require('./domainAvailablilityCheckResult');
exports.DomainControlCenterSsoRequest = require('./domainControlCenterSsoRequest');
exports.DomainOwnershipIdentifier = require('./domainOwnershipIdentifier');
exports.DomainPatchResource = require('./domainPatchResource');
exports.DomainRecommendationSearchParameters = require('./domainRecommendationSearchParameters');
exports.TldLegalAgreement = require('./tldLegalAgreement');
exports.TopLevelDomain = require('./topLevelDomain');
exports.TopLevelDomainAgreementOption = require('./topLevelDomainAgreementOption');
exports.Certificate = require('./certificate');
exports.CertificatePatchResource = require('./certificatePatchResource');
exports.VirtualNetworkProfile = require('./virtualNetworkProfile');
exports.WorkerPool = require('./workerPool');
exports.VirtualIPMapping = require('./virtualIPMapping');
exports.StampCapacity = require('./stampCapacity');
exports.NetworkAccessControlEntry = require('./networkAccessControlEntry');
exports.AppServiceEnvironment = require('./appServiceEnvironment');
exports.LocalizableString = require('./localizableString');
exports.CsmUsageQuota = require('./csmUsageQuota');
exports.ErrorEntity = require('./errorEntity');
exports.Operation = require('./operation');
exports.ResourceMetricName = require('./resourceMetricName');
exports.ResourceMetricProperty = require('./resourceMetricProperty');
exports.ResourceMetricValue = require('./resourceMetricValue');
exports.ResourceMetric = require('./resourceMetric');
exports.Solution = require('./solution');
exports.DetectorAbnormalTimePeriod = require('./detectorAbnormalTimePeriod');
exports.AbnormalTimePeriod = require('./abnormalTimePeriod');
exports.DetectorDefinition = require('./detectorDefinition');
exports.DiagnosticMetricSample = require('./diagnosticMetricSample');
exports.DiagnosticMetricSet = require('./diagnosticMetricSet');
exports.DataSource = require('./dataSource');
exports.ResponseMetaData = require('./responseMetaData');
exports.AnalysisData = require('./analysisData');
exports.AnalysisDefinition = require('./analysisDefinition');
exports.DataTableResponseColumn = require('./dataTableResponseColumn');
exports.DataTableResponseObject = require('./dataTableResponseObject');
exports.DetectorInfo = require('./detectorInfo');
exports.Rendering = require('./rendering');
exports.DiagnosticData = require('./diagnosticData');
exports.DetectorResponse = require('./detectorResponse');
exports.DiagnosticAnalysis = require('./diagnosticAnalysis');
exports.DiagnosticCategory = require('./diagnosticCategory');
exports.DiagnosticDetectorResponse = require('./diagnosticDetectorResponse');
exports.StackMinorVersion = require('./stackMinorVersion');
exports.StackMajorVersion = require('./stackMajorVersion');
exports.ApplicationStack = require('./applicationStack');
exports.Recommendation = require('./recommendation');
exports.RecommendationRule = require('./recommendationRule');
exports.BillingMeter = require('./billingMeter');
exports.CsmMoveResourceEnvelope = require('./csmMoveResourceEnvelope');
exports.GeoRegion = require('./geoRegion');
exports.HostingEnvironmentDeploymentInfo = require('./hostingEnvironmentDeploymentInfo');
exports.DeploymentLocations = require('./deploymentLocations');
exports.GlobalCsmSkuDescription = require('./globalCsmSkuDescription');
exports.PremierAddOnOffer = require('./premierAddOnOffer');
exports.ResourceNameAvailability = require('./resourceNameAvailability');
exports.ResourceNameAvailabilityRequest = require('./resourceNameAvailabilityRequest');
exports.SkuInfos = require('./skuInfos');
exports.SourceControl = require('./sourceControl');
exports.ValidateRequest = require('./validateRequest');
exports.ValidateResponseError = require('./validateResponseError');
exports.ValidateResponse = require('./validateResponse');
exports.VnetParameters = require('./vnetParameters');
exports.VnetValidationTestFailure = require('./vnetValidationTestFailure');
exports.VnetValidationFailureDetails = require('./vnetValidationFailureDetails');
exports.FileSystemApplicationLogsConfig = require('./fileSystemApplicationLogsConfig');
exports.AzureTableStorageApplicationLogsConfig = require('./azureTableStorageApplicationLogsConfig');
exports.AzureBlobStorageApplicationLogsConfig = require('./azureBlobStorageApplicationLogsConfig');
exports.ApplicationLogsConfig = require('./applicationLogsConfig');
exports.AzureBlobStorageHttpLogsConfig = require('./azureBlobStorageHttpLogsConfig');
exports.AzureStoragePropertyDictionaryResource = require('./azureStoragePropertyDictionaryResource');
exports.DatabaseBackupSetting = require('./databaseBackupSetting');
exports.BackupItem = require('./backupItem');
exports.BackupSchedule = require('./backupSchedule');
exports.BackupRequest = require('./backupRequest');
exports.ConnStringValueTypePair = require('./connStringValueTypePair');
exports.ConnectionStringDictionary = require('./connectionStringDictionary');
exports.ContinuousWebJob = require('./continuousWebJob');
exports.CsmPublishingProfileOptions = require('./csmPublishingProfileOptions');
exports.CsmSlotEntity = require('./csmSlotEntity');
exports.CustomHostnameAnalysisResult = require('./customHostnameAnalysisResult');
exports.DeletedAppRestoreRequest = require('./deletedAppRestoreRequest');
exports.Deployment = require('./deployment');
exports.EnabledConfig = require('./enabledConfig');
exports.FileSystemHttpLogsConfig = require('./fileSystemHttpLogsConfig');
exports.FunctionEnvelope = require('./functionEnvelope');
exports.FunctionSecrets = require('./functionSecrets');
exports.HostNameBinding = require('./hostNameBinding');
exports.HttpLogsConfig = require('./httpLogsConfig');
exports.MSDeploy = require('./mSDeploy');
exports.MSDeployLogEntry = require('./mSDeployLogEntry');
exports.MSDeployLog = require('./mSDeployLog');
exports.MSDeployStatus = require('./mSDeployStatus');
exports.MigrateMySqlRequest = require('./migrateMySqlRequest');
exports.MigrateMySqlStatus = require('./migrateMySqlStatus');
exports.RelayServiceConnectionEntity = require('./relayServiceConnectionEntity');
exports.NetworkFeatures = require('./networkFeatures');
exports.NetworkTrace = require('./networkTrace');
exports.PerfMonSample = require('./perfMonSample');
exports.PerfMonSet = require('./perfMonSet');
exports.PerfMonResponse = require('./perfMonResponse');
exports.PremierAddOn = require('./premierAddOn');
exports.PremierAddOnPatchResource = require('./premierAddOnPatchResource');
exports.PrivateAccessSubnet = require('./privateAccessSubnet');
exports.PrivateAccessVirtualNetwork = require('./privateAccessVirtualNetwork');
exports.PrivateAccess = require('./privateAccess');
exports.ProcessThreadInfo = require('./processThreadInfo');
exports.ProcessModuleInfo = require('./processModuleInfo');
exports.ProcessInfo = require('./processInfo');
exports.PublicCertificate = require('./publicCertificate');
exports.RestoreRequest = require('./restoreRequest');
exports.SiteAuthSettings = require('./siteAuthSettings');
exports.SiteCloneabilityCriterion = require('./siteCloneabilityCriterion');
exports.SiteCloneability = require('./siteCloneability');
exports.SiteConfigResource = require('./siteConfigResource');
exports.SiteConfigurationSnapshotInfo = require('./siteConfigurationSnapshotInfo');
exports.SiteExtensionInfo = require('./siteExtensionInfo');
exports.SiteInstance = require('./siteInstance');
exports.SiteLogsConfig = require('./siteLogsConfig');
exports.SitePatchResource = require('./sitePatchResource');
exports.SitePhpErrorLogFlag = require('./sitePhpErrorLogFlag');
exports.SiteSourceControl = require('./siteSourceControl');
exports.SlotConfigNamesResource = require('./slotConfigNamesResource');
exports.SlotDifference = require('./slotDifference');
exports.SnapshotRecoverySource = require('./snapshotRecoverySource');
exports.SnapshotRestoreRequest = require('./snapshotRestoreRequest');
exports.StorageMigrationOptions = require('./storageMigrationOptions');
exports.StorageMigrationResponse = require('./storageMigrationResponse');
exports.StringDictionary = require('./stringDictionary');
exports.SwiftVirtualNetwork = require('./swiftVirtualNetwork');
exports.TriggeredJobRun = require('./triggeredJobRun');
exports.TriggeredJobHistory = require('./triggeredJobHistory');
exports.TriggeredWebJob = require('./triggeredWebJob');
exports.WebJob = require('./webJob');
exports.AddressResponse = require('./addressResponse');
exports.AppServiceEnvironmentResource = require('./appServiceEnvironmentResource');
exports.AppServiceEnvironmentPatchResource = require('./appServiceEnvironmentPatchResource');
exports.HostingEnvironmentDiagnostics = require('./hostingEnvironmentDiagnostics');
exports.MetricAvailabilily = require('./metricAvailabilily');
exports.MetricDefinition = require('./metricDefinition');
exports.SkuInfo = require('./skuInfo');
exports.Usage = require('./usage');
exports.WorkerPoolResource = require('./workerPoolResource');
exports.AppServicePlanPatchResource = require('./appServicePlanPatchResource');
exports.HybridConnectionLimits = require('./hybridConnectionLimits');
exports.ResourceHealthMetadata = require('./resourceHealthMetadata');
exports.AppServiceCertificateOrderCollection = require('./appServiceCertificateOrderCollection');
exports.AppServiceCertificateCollection = require('./appServiceCertificateCollection');
exports.CsmOperationCollection = require('./csmOperationCollection');
exports.DomainCollection = require('./domainCollection');
exports.NameIdentifierCollection = require('./nameIdentifierCollection');
exports.DomainOwnershipIdentifierCollection = require('./domainOwnershipIdentifierCollection');
exports.TopLevelDomainCollection = require('./topLevelDomainCollection');
exports.TldLegalAgreementCollection = require('./tldLegalAgreementCollection');
exports.CertificateCollection = require('./certificateCollection');
exports.DeletedWebAppCollection = require('./deletedWebAppCollection');
exports.DetectorResponseCollection = require('./detectorResponseCollection');
exports.DiagnosticCategoryCollection = require('./diagnosticCategoryCollection');
exports.DiagnosticAnalysisCollection = require('./diagnosticAnalysisCollection');
exports.DiagnosticDetectorCollection = require('./diagnosticDetectorCollection');
exports.ApplicationStackCollection = require('./applicationStackCollection');
exports.RecommendationCollection = require('./recommendationCollection');
exports.SourceControlCollection = require('./sourceControlCollection');
exports.BillingMeterCollection = require('./billingMeterCollection');
exports.GeoRegionCollection = require('./geoRegionCollection');
exports.IdentifierCollection = require('./identifierCollection');
exports.PremierAddOnOfferCollection = require('./premierAddOnOfferCollection');
exports.WebAppCollection = require('./webAppCollection');
exports.BackupItemCollection = require('./backupItemCollection');
exports.SiteConfigResourceCollection = require('./siteConfigResourceCollection');
exports.SiteConfigurationSnapshotInfoCollection = require('./siteConfigurationSnapshotInfoCollection');
exports.ContinuousWebJobCollection = require('./continuousWebJobCollection');
exports.DeploymentCollection = require('./deploymentCollection');
exports.FunctionEnvelopeCollection = require('./functionEnvelopeCollection');
exports.HostNameBindingCollection = require('./hostNameBindingCollection');
exports.WebAppInstanceCollection = require('./webAppInstanceCollection');
exports.ProcessInfoCollection = require('./processInfoCollection');
exports.ProcessModuleInfoCollection = require('./processModuleInfoCollection');
exports.ProcessThreadInfoCollection = require('./processThreadInfoCollection');
exports.ResourceMetricDefinitionCollection = require('./resourceMetricDefinitionCollection');
exports.ResourceMetricCollection = require('./resourceMetricCollection');
exports.PerfMonCounterCollection = require('./perfMonCounterCollection');
exports.PublicCertificateCollection = require('./publicCertificateCollection');
exports.SiteExtensionInfoCollection = require('./siteExtensionInfoCollection');
exports.SlotDifferenceCollection = require('./slotDifferenceCollection');
exports.SnapshotCollection = require('./snapshotCollection');
exports.TriggeredWebJobCollection = require('./triggeredWebJobCollection');
exports.TriggeredJobHistoryCollection = require('./triggeredJobHistoryCollection');
exports.CsmUsageQuotaCollection = require('./csmUsageQuotaCollection');
exports.WebJobCollection = require('./webJobCollection');
exports.AppServiceEnvironmentCollection = require('./appServiceEnvironmentCollection');
exports.StampCapacityCollection = require('./stampCapacityCollection');
exports.WorkerPoolCollection = require('./workerPoolCollection');
exports.SkuInfoCollection = require('./skuInfoCollection');
exports.UsageCollection = require('./usageCollection');
exports.AppServicePlanCollection = require('./appServicePlanCollection');
exports.ResourceCollection = require('./resourceCollection');
exports.HybridConnectionCollection = require('./hybridConnectionCollection');
exports.ResourceHealthMetadataCollection = require('./resourceHealthMetadataCollection');
