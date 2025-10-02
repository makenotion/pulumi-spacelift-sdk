import * as outputs from "../types/output";
export interface GetAwsIntegrationsIntegration {
    durationSeconds: number;
    externalId: string;
    generateCredentialsInWorker: boolean;
    integrationId: string;
    labels: string[];
    name: string;
    region: string;
    roleArn: string;
    spaceId: string;
}
export interface GetAzureIntegrationsIntegration {
    adminConsentProvided: boolean;
    adminConsentUrl: string;
    applicationId: string;
    defaultSubscriptionId: string;
    displayName: string;
    integrationId: string;
    labels: string[];
    name: string;
    spaceId: string;
    tenantId: string;
}
export interface GetContextsContext {
    contextId: string;
    description: string;
    labels: string[];
    name: string;
    spaceId: string;
}
export interface GetContextsLabel {
    anyOfs: string[];
}
export interface GetModuleAzureDevop {
    id: string;
    isDefault: boolean;
    project: string;
}
export interface GetModuleBitbucketCloud {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetModuleBitbucketDatacenter {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetModuleGithubEnterprise {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetModuleGitlab {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetModuleRawGit {
    namespace: string;
    url: string;
}
export interface GetPoliciesPolicy {
    description: string;
    id: string;
    labels: string[];
    name: string;
    spaceId: string;
    type: string;
}
export interface GetSavedFiltersFilter {
    createdBy: string;
    data: string;
    id: string;
    isPublic: boolean;
    name: string;
    type: string;
}
export interface GetScheduledRunRuntimeConfig {
    /**
     * List of after-apply scripts
     */
    afterApplies: string[];
    /**
     * List of after-destroy scripts
     */
    afterDestroys: string[];
    /**
     * List of after-init scripts
     */
    afterInits: string[];
    /**
     * List of after-perform scripts
     */
    afterPerforms: string[];
    /**
     * List of after-plan scripts
     */
    afterPlans: string[];
    /**
     * List of after-run scripts
     */
    afterRuns: string[];
    /**
     * List of before-apply scripts
     */
    beforeApplies: string[];
    /**
     * List of before-destroy scripts
     */
    beforeDestroys: string[];
    /**
     * List of before-init scripts
     */
    beforeInits: string[];
    /**
     * List of before-perform scripts
     */
    beforePerforms: string[];
    /**
     * List of before-plan scripts
     */
    beforePlans: string[];
    /**
     * Environment variables for the run
     */
    environments?: outputs.GetScheduledRunRuntimeConfigEnvironment[];
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    projectRoot: string;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage: string;
    terraformVersion: string;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    terraformWorkflowTool: string;
}
export interface GetScheduledRunRuntimeConfigEnvironment {
    /**
     * Environment variable key
     */
    key: string;
    /**
     * Environment variable value
     */
    value: string;
}
export interface GetSpacesSpace {
    description: string;
    inheritEntities: boolean;
    labels: string[];
    name: string;
    parentSpaceId: string;
    spaceId: string;
}
export interface GetStackAnsible {
    playbook: string;
}
export interface GetStackAzureDevop {
    id: string;
    isDefault: boolean;
    project: string;
}
export interface GetStackBitbucketCloud {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStackBitbucketDatacenter {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStackCloudformation {
    entryTemplateFile: string;
    region: string;
    stackName: string;
    templateBucket: string;
}
export interface GetStackGithubEnterprise {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStackGitlab {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStackKubernete {
    kubectlVersion: string;
    kubernetesWorkflowTool: string;
    namespace: string;
}
export interface GetStackPulumi {
    loginUrl: string;
    stackName: string;
}
export interface GetStackRawGit {
    namespace: string;
    url: string;
}
export interface GetStackShowcase {
    namespace: string;
}
export interface GetStackTerragrunt {
    terraformVersion: string;
    terragruntVersion: string;
    tool: string;
    useRunAll: boolean;
    useSmartSanitization: boolean;
}
export interface GetStacksAdministrative {
    equals?: boolean;
}
export interface GetStacksBranch {
    anyOfs: string[];
}
export interface GetStacksCommit {
    anyOfs: string[];
}
export interface GetStacksLabel {
    anyOfs: string[];
}
export interface GetStacksLocked {
    equals?: boolean;
}
export interface GetStacksName {
    anyOfs: string[];
}
export interface GetStacksProjectRoot {
    anyOfs: string[];
}
export interface GetStacksRepository {
    anyOfs: string[];
}
export interface GetStacksStack {
    additionalProjectGlobs: string[];
    administrative: boolean;
    afterApplies: string[];
    afterDestroys: string[];
    afterInits: string[];
    afterPerforms: string[];
    afterPlans: string[];
    afterRuns: string[];
    ansibles: outputs.GetStacksStackAnsible[];
    autodeploy: boolean;
    autoretry: boolean;
    awsAssumeRolePolicyStatement: string;
    azureDevops: outputs.GetStacksStackAzureDevop[];
    beforeApplies: string[];
    beforeDestroys: string[];
    beforeInits: string[];
    beforePerforms: string[];
    beforePlans: string[];
    bitbucketClouds: outputs.GetStacksStackBitbucketCloud[];
    bitbucketDatacenters: outputs.GetStacksStackBitbucketDatacenter[];
    branch: string;
    cloudformations: outputs.GetStacksStackCloudformation[];
    description: string;
    enableLocalPreview: boolean;
    enableSensitiveOutputsUpload: boolean;
    enableWellKnownSecretMasking: boolean;
    gitSparseCheckoutPaths: string[];
    githubEnterprises: outputs.GetStacksStackGithubEnterprise[];
    gitlabs: outputs.GetStacksStackGitlab[];
    kubernetes: outputs.GetStacksStackKubernete[];
    labels: string[];
    manageState: boolean;
    name: string;
    projectRoot: string;
    protectFromDeletion: boolean;
    pulumis: outputs.GetStacksStackPulumi[];
    rawGits: outputs.GetStacksStackRawGit[];
    repository: string;
    runnerImage: string;
    showcases: outputs.GetStacksStackShowcase[];
    spaceId: string;
    stackId: string;
    terraformExternalStateAccess: boolean;
    terraformSmartSanitization: boolean;
    terraformVersion: string;
    terraformWorkflowTool: string;
    terraformWorkspace: string;
    terragrunts: outputs.GetStacksStackTerragrunt[];
    workerPoolId: string;
}
export interface GetStacksStackAnsible {
    playbook: string;
}
export interface GetStacksStackAzureDevop {
    id: string;
    isDefault: boolean;
    project: string;
}
export interface GetStacksStackBitbucketCloud {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStacksStackBitbucketDatacenter {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStacksStackCloudformation {
    entryTemplateFile: string;
    region: string;
    stackName: string;
    templateBucket: string;
}
export interface GetStacksStackGithubEnterprise {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStacksStackGitlab {
    id: string;
    isDefault: boolean;
    namespace: string;
}
export interface GetStacksStackKubernete {
    kubectlVersion: string;
    kubernetesWorkflowTool: string;
    namespace: string;
}
export interface GetStacksStackPulumi {
    loginUrl: string;
    stackName: string;
}
export interface GetStacksStackRawGit {
    namespace: string;
    url: string;
}
export interface GetStacksStackShowcase {
    namespace: string;
}
export interface GetStacksStackTerragrunt {
    terraformVersion: string;
    terragruntVersion: string;
    tool: string;
    useRunAll: boolean;
    useSmartSanitization: boolean;
}
export interface GetStacksState {
    anyOfs: string[];
}
export interface GetStacksVendor {
    anyOfs: string[];
}
export interface GetStacksWorkerPool {
    anyOfs: string[];
}
export interface GetUserPolicy {
    role: string;
    spaceId: string;
}
export interface GetVcsAgentPoolsVcsAgentPool {
    description: string;
    name: string;
    vcsAgentPoolId: string;
}
export interface GetWorkerPoolsWorkerPool {
    config: string;
    description: string;
    driftDetectionRunLimit: number;
    name: string;
    spaceId: string;
    workerPoolId: string;
}
export interface IdpGroupMappingPolicy {
    /**
     * Type of access to the space. Possible values are: READ, WRITE, ADMIN
     */
    role: string;
    /**
     * ID (slug) of the space the IdP group mapping has access to
     */
    spaceId: string;
}
export interface ModuleAzureDevops {
    /**
     * ID of the Azure Devops integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default Azure DevOps integration
     */
    isDefault: boolean;
    /**
     * The name of the Azure DevOps project
     */
    project: string;
}
export interface ModuleBitbucketCloud {
    /**
     * The ID of the Bitbucket Cloud integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default Bitbucket Cloud integration
     */
    isDefault: boolean;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: string;
}
export interface ModuleBitbucketDatacenter {
    /**
     * The ID of the Bitbucket Datacenter integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default Bitbucket Datacenter integration
     */
    isDefault: boolean;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: string;
}
export interface ModuleGithubEnterprise {
    /**
     * The ID of the GitHub Enterprise integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default GitHub Enterprise integration
     */
    isDefault: boolean;
    /**
     * The GitHub organization / user the repository belongs to
     */
    namespace: string;
}
export interface ModuleGitlab {
    /**
     * ID of the Gitlab integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default GitLab integration
     */
    isDefault: boolean;
    /**
     * The GitLab namespace containing the repository
     */
    namespace: string;
}
export interface ModuleRawGit {
    /**
     * User-friendly namespace for the repository, this is for cosmetic purposes only
     */
    namespace: string;
    /**
     * HTTPS URL of the Git repository
     */
    url: string;
}
export interface RunTimeouts {
    create?: string;
}
export interface RunWait {
    /**
     * Continue on the specified states of a finished run. If not specified, the default is `[ 'finished' ]`. You can use following states: `applying`, `canceled`, `confirmed`, `destroying`, `discarded`, `failed`, `finished`, `initializing`, `pending_review`, `performing`, `planning`, `preparing_apply`, `preparing_replan`, `preparing`, `queued`, `ready`, `replan_requested`, `skipped`, `stopped`, `unconfirmed`.
     */
    continueOnStates?: string[];
    /**
     * Continue if run timed out, i.e. did not reach any defined end state in time. Default: `false`
     */
    continueOnTimeout?: boolean;
    /**
     * Whether waiting for a job is disabled or not. Default: `false`
     */
    disabled?: boolean;
}
export interface ScheduledRunRuntimeConfig {
    /**
     * List of after-apply scripts
     */
    afterApplies?: string[];
    /**
     * List of after-destroy scripts
     */
    afterDestroys?: string[];
    /**
     * List of after-init scripts
     */
    afterInits?: string[];
    /**
     * List of after-perform scripts
     */
    afterPerforms?: string[];
    /**
     * List of after-plan scripts
     */
    afterPlans?: string[];
    /**
     * List of after-run scripts
     */
    afterRuns?: string[];
    /**
     * List of before-apply scripts
     */
    beforeApplies?: string[];
    /**
     * List of before-destroy scripts
     */
    beforeDestroys?: string[];
    /**
     * List of before-init scripts
     */
    beforeInits?: string[];
    /**
     * List of before-perform scripts
     */
    beforePerforms?: string[];
    /**
     * List of before-plan scripts
     */
    beforePlans?: string[];
    /**
     * Environment variables for the run
     */
    environments?: outputs.ScheduledRunRuntimeConfigEnvironment[];
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    projectRoot?: string;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: string;
    terraformVersion: string;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    terraformWorkflowTool: string;
}
export interface ScheduledRunRuntimeConfigEnvironment {
    /**
     * Environment variable key
     */
    key: string;
    /**
     * Environment variable value
     */
    value: string;
}
export interface StackAnsible {
    /**
     * The playbook Ansible should run.
     */
    playbook: string;
}
export interface StackAzureDevops {
    /**
     * The ID of the Azure Devops integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default Azure DevOps integration
     */
    isDefault: boolean;
    /**
     * The name of the Azure DevOps project
     */
    project: string;
}
export interface StackBitbucketCloud {
    /**
     * The ID of the Bitbucket Cloud integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default Bitbucket Cloud integration
     */
    isDefault: boolean;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: string;
}
export interface StackBitbucketDatacenter {
    /**
     * The ID of the Bitbucket Datacenter integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default Bitbucket Datacenter integration
     */
    isDefault: boolean;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: string;
}
export interface StackCloudformation {
    /**
     * Template file `cloudformation package` will be called on
     */
    entryTemplateFile: string;
    /**
     * AWS region to use
     */
    region: string;
    /**
     * CloudFormation stack name
     */
    stackName: string;
    /**
     * S3 bucket to save CloudFormation templates to
     */
    templateBucket: string;
}
export interface StackDestructorTimeouts {
    delete?: string;
}
export interface StackGithubEnterprise {
    /**
     * The ID of the GitHub Enterprise integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default GitHub Enterprise integration
     */
    isDefault: boolean;
    /**
     * The GitHub organization / user the repository belongs to
     */
    namespace: string;
}
export interface StackGitlab {
    /**
     * The ID of the Gitlab integration. If not specified, the default integration will be used.
     */
    id?: string;
    /**
     * Indicates whether this is the default GitLab integration
     */
    isDefault: boolean;
    /**
     * The GitLab namespace containing the repository
     */
    namespace: string;
}
export interface StackKubernetes {
    /**
     * Kubectl version.
     */
    kubectlVersion: string;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `KUBERNETES` or `CUSTOM`. Defaults to `KUBERNETES`.
     */
    kubernetesWorkflowTool: string;
    /**
     * Namespace of the Kubernetes cluster to run commands on. Leave empty for multi-namespace Stacks.
     */
    namespace?: string;
}
export interface StackPulumiInfo {
    /**
     * State backend to log into on Run initialize.
     */
    loginUrl: string;
    /**
     * Pulumi stack name to use with the state backend.
     */
    stackName: string;
}
export interface StackRawGit {
    /**
     * User-friendly namespace for the repository, this is for cosmetic purposes only
     */
    namespace: string;
    /**
     * HTTPS URL of the Git repository
     */
    url: string;
}
export interface StackShowcase {
    namespace: string;
}
export interface StackTerragrunt {
    terraformVersion: string;
    /**
     * The Terragrunt version. Defaults to the latest Terragrunt version.
     */
    terragruntVersion: string;
    /**
     * The IaC tool used by Terragrunt. Valid values are OPEN_TOFU, TERRAFORM_FOSS or MANUALLY_PROVISIONED. Defaults to TERRAFORM_FOSS if not specified.
     */
    tool: string;
    /**
     * Whether to use `terragrunt run-all` instead of `terragrunt`.
     */
    useRunAll?: boolean;
    useSmartSanitization?: boolean;
}
export interface TaskTimeouts {
    create?: string;
}
export interface TaskWait {
    /**
     * Continue on the specified states of a finished run. If not specified, the default is `[ 'finished' ]`. You can use following states: `applying`, `canceled`, `confirmed`, `destroying`, `discarded`, `failed`, `finished`, `initializing`, `pending_review`, `performing`, `planning`, `preparing_apply`, `preparing_replan`, `preparing`, `queued`, `ready`, `replan_requested`, `skipped`, `stopped`, `unconfirmed`.
     */
    continueOnStates?: string[];
    /**
     * Continue if task timed out, i.e. did not reach any defined end state in time. Default: `false`
     */
    continueOnTimeout?: boolean;
    /**
     * Whether waiting for the task is disabled or not. Default: `false`
     */
    disabled?: boolean;
}
export interface UserPolicy {
    /**
     * Type of access to the space. Possible values are: READ, WRITE, ADMIN
     */
    role: string;
    /**
     * ID (slug) of the space the user has access to
     */
    spaceId: string;
}
