import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Stack extends pulumi.CustomResource {
    /**
     * Get an existing Stack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StackState, opts?: pulumi.CustomResourceOptions): Stack;
    /**
     * Returns true if the given object is an instance of Stack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Stack;
    /**
     * Project globs is an optional list of paths to track changes of in addition to the project root.
     */
    readonly additionalProjectGlobs: pulumi.Output<string[] | undefined>;
    /**
     * Indicates whether this stack can manage others. Defaults to `false`.
     */
    readonly administrative: pulumi.Output<boolean | undefined>;
    /**
     * List of after-apply scripts
     */
    readonly afterApplies: pulumi.Output<string[] | undefined>;
    /**
     * List of after-destroy scripts
     */
    readonly afterDestroys: pulumi.Output<string[] | undefined>;
    /**
     * List of after-init scripts
     */
    readonly afterInits: pulumi.Output<string[] | undefined>;
    /**
     * List of after-perform scripts
     */
    readonly afterPerforms: pulumi.Output<string[] | undefined>;
    /**
     * List of after-plan scripts
     */
    readonly afterPlans: pulumi.Output<string[] | undefined>;
    /**
     * List of after-run scripts
     */
    readonly afterRuns: pulumi.Output<string[] | undefined>;
    /**
     * Ansible-specific configuration. Presence means this Stack is an Ansible Stack.
     */
    readonly ansible: pulumi.Output<outputs.StackAnsible | undefined>;
    /**
     * Indicates whether changes to this stack can be automatically deployed. Defaults to `false`.
     */
    readonly autodeploy: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether obsolete proposed changes should automatically be retried. Defaults to `false`.
     */
    readonly autoretry: pulumi.Output<boolean | undefined>;
    /**
     * AWS IAM assume role policy statement setting up trust relationship
     */
    readonly awsAssumeRolePolicyStatement: pulumi.Output<string>;
    /**
     * Azure DevOps VCS settings
     */
    readonly azureDevops: pulumi.Output<outputs.StackAzureDevops | undefined>;
    /**
     * List of before-apply scripts
     */
    readonly beforeApplies: pulumi.Output<string[] | undefined>;
    /**
     * List of before-destroy scripts
     */
    readonly beforeDestroys: pulumi.Output<string[] | undefined>;
    /**
     * List of before-init scripts
     */
    readonly beforeInits: pulumi.Output<string[] | undefined>;
    /**
     * List of before-perform scripts
     */
    readonly beforePerforms: pulumi.Output<string[] | undefined>;
    /**
     * List of before-plan scripts
     */
    readonly beforePlans: pulumi.Output<string[] | undefined>;
    /**
     * Bitbucket Cloud VCS settings
     */
    readonly bitbucketCloud: pulumi.Output<outputs.StackBitbucketCloud | undefined>;
    /**
     * Bitbucket Datacenter VCS settings
     */
    readonly bitbucketDatacenter: pulumi.Output<outputs.StackBitbucketDatacenter | undefined>;
    /**
     * Git branch to apply changes to
     */
    readonly branch: pulumi.Output<string>;
    /**
     * CloudFormation-specific configuration. Presence means this Stack is a CloudFormation Stack.
     */
    readonly cloudformation: pulumi.Output<outputs.StackCloudformation | undefined>;
    /**
     * Free-form stack description for users
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Indicates whether local preview runs can be triggered on this Stack. Defaults to `false`.
     */
    readonly enableLocalPreview: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether sensitive outputs created by this stack can be uploaded to Spacelift to be used by Stack Dependency
     * references. Triggered only when corresponding option is enabled on the Worker Pool used by the Stack as well. Defaults
     * to `true`.
     */
    readonly enableSensitiveOutputsUpload: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether well-known secret masking is enabled.
     */
    readonly enableWellKnownSecretMasking: pulumi.Output<boolean | undefined>;
    /**
     * Indicates whether GitHub users can deploy from the Checks API. Defaults to `true`. This is called allow run promotion in
     * the UI.
     */
    readonly githubActionDeploy: pulumi.Output<boolean | undefined>;
    /**
     * VCS settings for [GitHub custom
     * application](https://docs.spacelift.io/integrations/source-control/github#setting-up-the-custom-application)
     */
    readonly githubEnterprise: pulumi.Output<outputs.StackGithubEnterprise | undefined>;
    /**
     * GitLab VCS settings
     */
    readonly gitlab: pulumi.Output<outputs.StackGitlab | undefined>;
    /**
     * State file to upload when creating a new stack
     */
    readonly importState: pulumi.Output<string | undefined>;
    /**
     * Path to the state file to upload when creating a new stack
     */
    readonly importStateFile: pulumi.Output<string | undefined>;
    /**
     * Kubernetes-specific configuration. Presence means this Stack is a Kubernetes Stack.
     */
    readonly kubernetes: pulumi.Output<outputs.StackKubernetes | undefined>;
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * Determines if Spacelift should manage state for this stack. Defaults to `true`.
     */
    readonly manageState: pulumi.Output<boolean | undefined>;
    /**
     * Name of the stack - should be unique in one account
     */
    readonly name: pulumi.Output<string>;
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    readonly projectRoot: pulumi.Output<string | undefined>;
    /**
     * Protect this stack from accidental deletion. If set, attempts to delete this stack will fail. Defaults to `false`.
     */
    readonly protectFromDeletion: pulumi.Output<boolean | undefined>;
    /**
     * Pulumi-specific configuration. Presence means this Stack is a Pulumi Stack.
     */
    readonly pulumiInfo: pulumi.Output<outputs.StackPulumiInfo | undefined>;
    /**
     * One-way VCS integration using a raw Git repository link
     */
    readonly rawGit: pulumi.Output<outputs.StackRawGit | undefined>;
    /**
     * Name of the repository, without the owner part
     */
    readonly repository: pulumi.Output<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    readonly runnerImage: pulumi.Output<string | undefined>;
    readonly showcase: pulumi.Output<outputs.StackShowcase | undefined>;
    /**
     * Allows setting the custom ID (slug) for the stack
     */
    readonly slug: pulumi.Output<string>;
    /**
     * ID (slug) of the space the stack is in. Defaults to `legacy` if it exists, otherwise `root`.
     */
    readonly spaceId: pulumi.Output<string>;
    readonly stackId: pulumi.Output<string>;
    /**
     * Indicates whether you can access the Stack state file from other stacks or outside of Spacelift. Defaults to `false`.
     */
    readonly terraformExternalStateAccess: pulumi.Output<boolean | undefined>;
    readonly terraformSmartSanitization: pulumi.Output<boolean | undefined>;
    readonly terraformVersion: pulumi.Output<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or
     * `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    readonly terraformWorkflowTool: pulumi.Output<string>;
    readonly terraformWorkspace: pulumi.Output<string | undefined>;
    /**
     * Terragrunt-specific configuration. Presence means this Stack is an Terragrunt Stack.
     */
    readonly terragrunt: pulumi.Output<outputs.StackTerragrunt | undefined>;
    /**
     * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
     */
    readonly workerPoolId: pulumi.Output<string | undefined>;
    /**
     * Create a Stack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StackArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Stack resources.
 */
export interface StackState {
    /**
     * Project globs is an optional list of paths to track changes of in addition to the project root.
     */
    additionalProjectGlobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether this stack can manage others. Defaults to `false`.
     */
    administrative?: pulumi.Input<boolean>;
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
     * Ansible-specific configuration. Presence means this Stack is an Ansible Stack.
     */
    ansible?: pulumi.Input<inputs.StackAnsible>;
    /**
     * Indicates whether changes to this stack can be automatically deployed. Defaults to `false`.
     */
    autodeploy?: pulumi.Input<boolean>;
    /**
     * Indicates whether obsolete proposed changes should automatically be retried. Defaults to `false`.
     */
    autoretry?: pulumi.Input<boolean>;
    /**
     * AWS IAM assume role policy statement setting up trust relationship
     */
    awsAssumeRolePolicyStatement?: pulumi.Input<string>;
    /**
     * Azure DevOps VCS settings
     */
    azureDevops?: pulumi.Input<inputs.StackAzureDevops>;
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
     * Bitbucket Cloud VCS settings
     */
    bitbucketCloud?: pulumi.Input<inputs.StackBitbucketCloud>;
    /**
     * Bitbucket Datacenter VCS settings
     */
    bitbucketDatacenter?: pulumi.Input<inputs.StackBitbucketDatacenter>;
    /**
     * Git branch to apply changes to
     */
    branch?: pulumi.Input<string>;
    /**
     * CloudFormation-specific configuration. Presence means this Stack is a CloudFormation Stack.
     */
    cloudformation?: pulumi.Input<inputs.StackCloudformation>;
    /**
     * Free-form stack description for users
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether local preview runs can be triggered on this Stack. Defaults to `false`.
     */
    enableLocalPreview?: pulumi.Input<boolean>;
    /**
     * Indicates whether sensitive outputs created by this stack can be uploaded to Spacelift to be used by Stack Dependency
     * references. Triggered only when corresponding option is enabled on the Worker Pool used by the Stack as well. Defaults
     * to `true`.
     */
    enableSensitiveOutputsUpload?: pulumi.Input<boolean>;
    /**
     * Indicates whether well-known secret masking is enabled.
     */
    enableWellKnownSecretMasking?: pulumi.Input<boolean>;
    /**
     * Indicates whether GitHub users can deploy from the Checks API. Defaults to `true`. This is called allow run promotion in
     * the UI.
     */
    githubActionDeploy?: pulumi.Input<boolean>;
    /**
     * VCS settings for [GitHub custom
     * application](https://docs.spacelift.io/integrations/source-control/github#setting-up-the-custom-application)
     */
    githubEnterprise?: pulumi.Input<inputs.StackGithubEnterprise>;
    /**
     * GitLab VCS settings
     */
    gitlab?: pulumi.Input<inputs.StackGitlab>;
    /**
     * State file to upload when creating a new stack
     */
    importState?: pulumi.Input<string>;
    /**
     * Path to the state file to upload when creating a new stack
     */
    importStateFile?: pulumi.Input<string>;
    /**
     * Kubernetes-specific configuration. Presence means this Stack is a Kubernetes Stack.
     */
    kubernetes?: pulumi.Input<inputs.StackKubernetes>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines if Spacelift should manage state for this stack. Defaults to `true`.
     */
    manageState?: pulumi.Input<boolean>;
    /**
     * Name of the stack - should be unique in one account
     */
    name?: pulumi.Input<string>;
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    projectRoot?: pulumi.Input<string>;
    /**
     * Protect this stack from accidental deletion. If set, attempts to delete this stack will fail. Defaults to `false`.
     */
    protectFromDeletion?: pulumi.Input<boolean>;
    /**
     * Pulumi-specific configuration. Presence means this Stack is a Pulumi Stack.
     */
    pulumiInfo?: pulumi.Input<inputs.StackPulumiInfo>;
    /**
     * One-way VCS integration using a raw Git repository link
     */
    rawGit?: pulumi.Input<inputs.StackRawGit>;
    /**
     * Name of the repository, without the owner part
     */
    repository?: pulumi.Input<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: pulumi.Input<string>;
    showcase?: pulumi.Input<inputs.StackShowcase>;
    /**
     * Allows setting the custom ID (slug) for the stack
     */
    slug?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the stack is in. Defaults to `legacy` if it exists, otherwise `root`.
     */
    spaceId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
    /**
     * Indicates whether you can access the Stack state file from other stacks or outside of Spacelift. Defaults to `false`.
     */
    terraformExternalStateAccess?: pulumi.Input<boolean>;
    terraformSmartSanitization?: pulumi.Input<boolean>;
    terraformVersion?: pulumi.Input<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or
     * `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    terraformWorkflowTool?: pulumi.Input<string>;
    terraformWorkspace?: pulumi.Input<string>;
    /**
     * Terragrunt-specific configuration. Presence means this Stack is an Terragrunt Stack.
     */
    terragrunt?: pulumi.Input<inputs.StackTerragrunt>;
    /**
     * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
     */
    workerPoolId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Stack resource.
 */
export interface StackArgs {
    /**
     * Project globs is an optional list of paths to track changes of in addition to the project root.
     */
    additionalProjectGlobs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Indicates whether this stack can manage others. Defaults to `false`.
     */
    administrative?: pulumi.Input<boolean>;
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
     * Ansible-specific configuration. Presence means this Stack is an Ansible Stack.
     */
    ansible?: pulumi.Input<inputs.StackAnsible>;
    /**
     * Indicates whether changes to this stack can be automatically deployed. Defaults to `false`.
     */
    autodeploy?: pulumi.Input<boolean>;
    /**
     * Indicates whether obsolete proposed changes should automatically be retried. Defaults to `false`.
     */
    autoretry?: pulumi.Input<boolean>;
    /**
     * Azure DevOps VCS settings
     */
    azureDevops?: pulumi.Input<inputs.StackAzureDevops>;
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
     * Bitbucket Cloud VCS settings
     */
    bitbucketCloud?: pulumi.Input<inputs.StackBitbucketCloud>;
    /**
     * Bitbucket Datacenter VCS settings
     */
    bitbucketDatacenter?: pulumi.Input<inputs.StackBitbucketDatacenter>;
    /**
     * Git branch to apply changes to
     */
    branch: pulumi.Input<string>;
    /**
     * CloudFormation-specific configuration. Presence means this Stack is a CloudFormation Stack.
     */
    cloudformation?: pulumi.Input<inputs.StackCloudformation>;
    /**
     * Free-form stack description for users
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether local preview runs can be triggered on this Stack. Defaults to `false`.
     */
    enableLocalPreview?: pulumi.Input<boolean>;
    /**
     * Indicates whether sensitive outputs created by this stack can be uploaded to Spacelift to be used by Stack Dependency
     * references. Triggered only when corresponding option is enabled on the Worker Pool used by the Stack as well. Defaults
     * to `true`.
     */
    enableSensitiveOutputsUpload?: pulumi.Input<boolean>;
    /**
     * Indicates whether well-known secret masking is enabled.
     */
    enableWellKnownSecretMasking?: pulumi.Input<boolean>;
    /**
     * Indicates whether GitHub users can deploy from the Checks API. Defaults to `true`. This is called allow run promotion in
     * the UI.
     */
    githubActionDeploy?: pulumi.Input<boolean>;
    /**
     * VCS settings for [GitHub custom
     * application](https://docs.spacelift.io/integrations/source-control/github#setting-up-the-custom-application)
     */
    githubEnterprise?: pulumi.Input<inputs.StackGithubEnterprise>;
    /**
     * GitLab VCS settings
     */
    gitlab?: pulumi.Input<inputs.StackGitlab>;
    /**
     * State file to upload when creating a new stack
     */
    importState?: pulumi.Input<string>;
    /**
     * Path to the state file to upload when creating a new stack
     */
    importStateFile?: pulumi.Input<string>;
    /**
     * Kubernetes-specific configuration. Presence means this Stack is a Kubernetes Stack.
     */
    kubernetes?: pulumi.Input<inputs.StackKubernetes>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Determines if Spacelift should manage state for this stack. Defaults to `true`.
     */
    manageState?: pulumi.Input<boolean>;
    /**
     * Name of the stack - should be unique in one account
     */
    name?: pulumi.Input<string>;
    /**
     * Project root is the optional directory relative to the workspace root containing the entrypoint to the Stack.
     */
    projectRoot?: pulumi.Input<string>;
    /**
     * Protect this stack from accidental deletion. If set, attempts to delete this stack will fail. Defaults to `false`.
     */
    protectFromDeletion?: pulumi.Input<boolean>;
    /**
     * Pulumi-specific configuration. Presence means this Stack is a Pulumi Stack.
     */
    pulumiInfo?: pulumi.Input<inputs.StackPulumiInfo>;
    /**
     * One-way VCS integration using a raw Git repository link
     */
    rawGit?: pulumi.Input<inputs.StackRawGit>;
    /**
     * Name of the repository, without the owner part
     */
    repository: pulumi.Input<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: pulumi.Input<string>;
    showcase?: pulumi.Input<inputs.StackShowcase>;
    /**
     * Allows setting the custom ID (slug) for the stack
     */
    slug?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the stack is in. Defaults to `legacy` if it exists, otherwise `root`.
     */
    spaceId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
    /**
     * Indicates whether you can access the Stack state file from other stacks or outside of Spacelift. Defaults to `false`.
     */
    terraformExternalStateAccess?: pulumi.Input<boolean>;
    terraformSmartSanitization?: pulumi.Input<boolean>;
    terraformVersion?: pulumi.Input<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or
     * `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    terraformWorkflowTool?: pulumi.Input<string>;
    terraformWorkspace?: pulumi.Input<string>;
    /**
     * Terragrunt-specific configuration. Presence means this Stack is an Terragrunt Stack.
     */
    terragrunt?: pulumi.Input<inputs.StackTerragrunt>;
    /**
     * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
     */
    workerPoolId?: pulumi.Input<string>;
}
