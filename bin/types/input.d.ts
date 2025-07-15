import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export interface GetContextsLabel {
    anyOfs: string[];
}
export interface GetContextsLabelArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetScheduledRunRuntimeConfig {
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
    environments?: inputs.GetScheduledRunRuntimeConfigEnvironment[];
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    projectRoot?: string;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: string;
    terraformVersion?: string;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    terraformWorkflowTool?: string;
}
export interface GetScheduledRunRuntimeConfigArgs {
    /**
     * List of after-apply scripts
     */
    afterApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-destroy scripts
     */
    afterDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-init scripts
     */
    afterInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-perform scripts
     */
    afterPerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-plan scripts
     */
    afterPlans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-run scripts
     */
    afterRuns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-apply scripts
     */
    beforeApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-destroy scripts
     */
    beforeDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-init scripts
     */
    beforeInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-perform scripts
     */
    beforePerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-plan scripts
     */
    beforePlans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Environment variables for the run
     */
    environments?: pulumi.Input<pulumi.Input<inputs.GetScheduledRunRuntimeConfigEnvironmentArgs>[]>;
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    projectRoot?: pulumi.Input<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: pulumi.Input<string>;
    terraformVersion?: pulumi.Input<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    terraformWorkflowTool?: pulumi.Input<string>;
}
export interface GetScheduledRunRuntimeConfigEnvironment {
    /**
     * Environment variable key
     */
    key?: string;
    /**
     * Environment variable value
     */
    value?: string;
}
export interface GetScheduledRunRuntimeConfigEnvironmentArgs {
    /**
     * Environment variable key
     */
    key?: pulumi.Input<string>;
    /**
     * Environment variable value
     */
    value?: pulumi.Input<string>;
}
export interface GetStacksAdministrative {
    equals?: boolean;
}
export interface GetStacksAdministrativeArgs {
    equals?: pulumi.Input<boolean>;
}
export interface GetStacksBranch {
    anyOfs: string[];
}
export interface GetStacksBranchArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksCommit {
    anyOfs: string[];
}
export interface GetStacksCommitArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksLabel {
    anyOfs: string[];
}
export interface GetStacksLabelArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksLocked {
    equals?: boolean;
}
export interface GetStacksLockedArgs {
    equals?: pulumi.Input<boolean>;
}
export interface GetStacksName {
    anyOfs: string[];
}
export interface GetStacksNameArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksProjectRoot {
    anyOfs: string[];
}
export interface GetStacksProjectRootArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksRepository {
    anyOfs: string[];
}
export interface GetStacksRepositoryArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksState {
    anyOfs: string[];
}
export interface GetStacksStateArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksVendor {
    anyOfs: string[];
}
export interface GetStacksVendorArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface GetStacksWorkerPool {
    anyOfs: string[];
}
export interface GetStacksWorkerPoolArgs {
    anyOfs: pulumi.Input<pulumi.Input<string>[]>;
}
export interface IdpGroupMappingPolicy {
    /**
     * Type of access to the space. Possible values are: READ, WRITE, ADMIN
     */
    role: pulumi.Input<string>;
    /**
     * ID (slug) of the space the user group has access to
     */
    spaceId: pulumi.Input<string>;
}
export interface ModuleAzureDevops {
    /**
     * ID of the Azure Devops integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default Azure DevOps integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The name of the Azure DevOps project
     */
    project: pulumi.Input<string>;
}
export interface ModuleBitbucketCloud {
    /**
     * The ID of the Bitbucket Cloud integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default Bitbucket Cloud integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: pulumi.Input<string>;
}
export interface ModuleBitbucketDatacenter {
    /**
     * The ID of the Bitbucket Datacenter integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default Bitbucket Datacenter integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: pulumi.Input<string>;
}
export interface ModuleGithubEnterprise {
    /**
     * The ID of the GitHub Enterprise integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default GitHub Enterprise integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The GitHub organization / user the repository belongs to
     */
    namespace: pulumi.Input<string>;
}
export interface ModuleGitlab {
    /**
     * ID of the Gitlab integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default GitLab integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The GitLab namespace containing the repository
     */
    namespace: pulumi.Input<string>;
}
export interface ModuleRawGit {
    /**
     * User-friendly namespace for the repository, this is for cosmetic purposes only
     */
    namespace: pulumi.Input<string>;
    /**
     * HTTPS URL of the Git repository
     */
    url: pulumi.Input<string>;
}
export interface RunTimeouts {
    create?: pulumi.Input<string>;
}
export interface RunWait {
    /**
     * Continue on the specified states of a finished run. If not specified, the default is `[ 'finished' ]`. You can use following states: `applying`, `canceled`, `confirmed`, `destroying`, `discarded`, `failed`, `finished`, `initializing`, `pending_review`, `performing`, `planning`, `preparing_apply`, `preparing_replan`, `preparing`, `queued`, `ready`, `replan_requested`, `skipped`, `stopped`, `unconfirmed`.
     */
    continueOnStates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Continue if run timed out, i.e. did not reach any defined end state in time. Default: `false`
     */
    continueOnTimeout?: pulumi.Input<boolean>;
    /**
     * Whether waiting for a job is disabled or not. Default: `false`
     */
    disabled?: pulumi.Input<boolean>;
}
export interface ScheduledRunRuntimeConfig {
    /**
     * List of after-apply scripts
     */
    afterApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-destroy scripts
     */
    afterDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-init scripts
     */
    afterInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-perform scripts
     */
    afterPerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-plan scripts
     */
    afterPlans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-run scripts
     */
    afterRuns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-apply scripts
     */
    beforeApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-destroy scripts
     */
    beforeDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-init scripts
     */
    beforeInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-perform scripts
     */
    beforePerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-plan scripts
     */
    beforePlans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Environment variables for the run
     */
    environments?: pulumi.Input<pulumi.Input<inputs.ScheduledRunRuntimeConfigEnvironment>[]>;
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    projectRoot?: pulumi.Input<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: pulumi.Input<string>;
    terraformVersion?: pulumi.Input<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    terraformWorkflowTool?: pulumi.Input<string>;
}
export interface ScheduledRunRuntimeConfigEnvironment {
    /**
     * Environment variable key
     */
    key: pulumi.Input<string>;
    /**
     * Environment variable value
     */
    value: pulumi.Input<string>;
}
export interface StackAnsible {
    /**
     * The playbook Ansible should run.
     */
    playbook: pulumi.Input<string>;
}
export interface StackAzureDevops {
    /**
     * The ID of the Azure Devops integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default Azure DevOps integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The name of the Azure DevOps project
     */
    project: pulumi.Input<string>;
}
export interface StackBitbucketCloud {
    /**
     * The ID of the Bitbucket Cloud integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default Bitbucket Cloud integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: pulumi.Input<string>;
}
export interface StackBitbucketDatacenter {
    /**
     * The ID of the Bitbucket Datacenter integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default Bitbucket Datacenter integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The Bitbucket project containing the repository
     */
    namespace: pulumi.Input<string>;
}
export interface StackCloudformation {
    /**
     * Template file `cloudformation package` will be called on
     */
    entryTemplateFile: pulumi.Input<string>;
    /**
     * AWS region to use
     */
    region: pulumi.Input<string>;
    /**
     * CloudFormation stack name
     */
    stackName: pulumi.Input<string>;
    /**
     * S3 bucket to save CloudFormation templates to
     */
    templateBucket: pulumi.Input<string>;
}
export interface StackDestructorTimeouts {
    delete?: pulumi.Input<string>;
}
export interface StackGithubEnterprise {
    /**
     * The ID of the GitHub Enterprise integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default GitHub Enterprise integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The GitHub organization / user the repository belongs to
     */
    namespace: pulumi.Input<string>;
}
export interface StackGitlab {
    /**
     * The ID of the Gitlab integration. If not specified, the default integration will be used.
     */
    id?: pulumi.Input<string>;
    /**
     * Indicates whether this is the default GitLab integration
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * The GitLab namespace containing the repository
     */
    namespace: pulumi.Input<string>;
}
export interface StackKubernetes {
    /**
     * Kubectl version.
     */
    kubectlVersion?: pulumi.Input<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `KUBERNETES` or `CUSTOM`. Defaults to `KUBERNETES`.
     */
    kubernetesWorkflowTool?: pulumi.Input<string>;
    /**
     * Namespace of the Kubernetes cluster to run commands on. Leave empty for multi-namespace Stacks.
     */
    namespace?: pulumi.Input<string>;
}
export interface StackPulumiInfo {
    /**
     * State backend to log into on Run initialize.
     */
    loginUrl: pulumi.Input<string>;
    /**
     * Pulumi stack name to use with the state backend.
     */
    stackName: pulumi.Input<string>;
}
export interface StackRawGit {
    /**
     * User-friendly namespace for the repository, this is for cosmetic purposes only
     */
    namespace: pulumi.Input<string>;
    /**
     * HTTPS URL of the Git repository
     */
    url: pulumi.Input<string>;
}
export interface StackShowcase {
    namespace: pulumi.Input<string>;
}
export interface StackTerragrunt {
    terraformVersion?: pulumi.Input<string>;
    /**
     * The Terragrunt version. Defaults to the latest Terragrunt version.
     */
    terragruntVersion?: pulumi.Input<string>;
    /**
     * The IaC tool used by Terragrunt. Valid values are OPEN_TOFU, TERRAFORM_FOSS or MANUALLY_PROVISIONED. Defaults to TERRAFORM_FOSS if not specified.
     */
    tool?: pulumi.Input<string>;
    /**
     * Whether to use `terragrunt run-all` instead of `terragrunt`.
     */
    useRunAll?: pulumi.Input<boolean>;
    useSmartSanitization?: pulumi.Input<boolean>;
}
export interface TaskTimeouts {
    create?: pulumi.Input<string>;
}
export interface TaskWait {
    /**
     * Continue on the specified states of a finished run. If not specified, the default is `[ 'finished' ]`. You can use following states: `applying`, `canceled`, `confirmed`, `destroying`, `discarded`, `failed`, `finished`, `initializing`, `pending_review`, `performing`, `planning`, `preparing_apply`, `preparing_replan`, `preparing`, `queued`, `ready`, `replan_requested`, `skipped`, `stopped`, `unconfirmed`.
     */
    continueOnStates?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Continue if task timed out, i.e. did not reach any defined end state in time. Default: `false`
     */
    continueOnTimeout?: pulumi.Input<boolean>;
    /**
     * Whether waiting for the task is disabled or not. Default: `false`
     */
    disabled?: pulumi.Input<boolean>;
}
export interface UserPolicy {
    /**
     * Type of access to the space. Possible values are: READ, WRITE, ADMIN
     */
    role: pulumi.Input<string>;
    /**
     * ID (slug) of the space the user has access to
     */
    spaceId: pulumi.Input<string>;
}
