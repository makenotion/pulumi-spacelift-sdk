import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Module extends pulumi.CustomResource {
    /**
     * Get an existing Module resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ModuleState, opts?: pulumi.CustomResourceOptions): Module;
    /**
     * Returns true if the given object is an instance of Module.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Module;
    /**
     * Indicates whether this module can manage others. Defaults to `false`.
     */
    readonly administrative: pulumi.Output<boolean | undefined>;
    /**
     * AWS IAM assume role policy statement setting up trust relationship
     */
    readonly awsAssumeRolePolicyStatement: pulumi.Output<string>;
    /**
     * Azure DevOps VCS settings
     */
    readonly azureDevops: pulumi.Output<outputs.ModuleAzureDevops | undefined>;
    /**
     * Bitbucket Cloud VCS settings
     */
    readonly bitbucketCloud: pulumi.Output<outputs.ModuleBitbucketCloud | undefined>;
    /**
     * Bitbucket Datacenter VCS settings
     */
    readonly bitbucketDatacenter: pulumi.Output<outputs.ModuleBitbucketDatacenter | undefined>;
    /**
     * GitHub branch to apply changes to
     */
    readonly branch: pulumi.Output<string>;
    /**
     * Free-form module description for users
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Indicates whether local preview versions can be triggered on this Module. Defaults to `false`.
     */
    readonly enableLocalPreview: pulumi.Output<boolean | undefined>;
    /**
     * Git sparse checkout paths is an optional list of paths to use for sparse checkout. If not set, the entire repository
     * will be checked out.
     */
    readonly gitSparseCheckoutPaths: pulumi.Output<string[] | undefined>;
    /**
     * GitHub Enterprise (self-hosted) VCS settings
     */
    readonly githubEnterprise: pulumi.Output<outputs.ModuleGithubEnterprise | undefined>;
    /**
     * GitLab VCS settings
     */
    readonly gitlab: pulumi.Output<outputs.ModuleGitlab | undefined>;
    readonly labels: pulumi.Output<string[] | undefined>;
    readonly moduleId: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    /**
     * Project root is the optional directory relative to the repository root containing the module source code.
     */
    readonly projectRoot: pulumi.Output<string | undefined>;
    /**
     * Protect this module from accidental deletion. If set, attempts to delete this module will fail. Defaults to `false`.
     */
    readonly protectFromDeletion: pulumi.Output<boolean | undefined>;
    /**
     * Make this module publicly accessible. Can only be set at creation time. Defaults to `false`.
     */
    readonly public: pulumi.Output<boolean | undefined>;
    /**
     * One-way VCS integration using a raw Git repository link
     */
    readonly rawGit: pulumi.Output<outputs.ModuleRawGit | undefined>;
    /**
     * Name of the repository, without the owner part
     */
    readonly repository: pulumi.Output<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    readonly runnerImage: pulumi.Output<string | undefined>;
    /**
     * List of the accounts (subdomains) which should have access to the Module
     */
    readonly sharedAccounts: pulumi.Output<string[] | undefined>;
    /**
     * ID (slug) of the space the module is in
     */
    readonly spaceId: pulumi.Output<string>;
    readonly terraformProvider: pulumi.Output<string>;
    /**
     * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
     */
    readonly workerPoolId: pulumi.Output<string | undefined>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or
     * `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    readonly workflowTool: pulumi.Output<string>;
    /**
     * Create a Module resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ModuleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Module resources.
 */
export interface ModuleState {
    /**
     * Indicates whether this module can manage others. Defaults to `false`.
     */
    administrative?: pulumi.Input<boolean>;
    /**
     * AWS IAM assume role policy statement setting up trust relationship
     */
    awsAssumeRolePolicyStatement?: pulumi.Input<string>;
    /**
     * Azure DevOps VCS settings
     */
    azureDevops?: pulumi.Input<inputs.ModuleAzureDevops>;
    /**
     * Bitbucket Cloud VCS settings
     */
    bitbucketCloud?: pulumi.Input<inputs.ModuleBitbucketCloud>;
    /**
     * Bitbucket Datacenter VCS settings
     */
    bitbucketDatacenter?: pulumi.Input<inputs.ModuleBitbucketDatacenter>;
    /**
     * GitHub branch to apply changes to
     */
    branch?: pulumi.Input<string>;
    /**
     * Free-form module description for users
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether local preview versions can be triggered on this Module. Defaults to `false`.
     */
    enableLocalPreview?: pulumi.Input<boolean>;
    /**
     * Git sparse checkout paths is an optional list of paths to use for sparse checkout. If not set, the entire repository
     * will be checked out.
     */
    gitSparseCheckoutPaths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * GitHub Enterprise (self-hosted) VCS settings
     */
    githubEnterprise?: pulumi.Input<inputs.ModuleGithubEnterprise>;
    /**
     * GitLab VCS settings
     */
    gitlab?: pulumi.Input<inputs.ModuleGitlab>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    moduleId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Project root is the optional directory relative to the repository root containing the module source code.
     */
    projectRoot?: pulumi.Input<string>;
    /**
     * Protect this module from accidental deletion. If set, attempts to delete this module will fail. Defaults to `false`.
     */
    protectFromDeletion?: pulumi.Input<boolean>;
    /**
     * Make this module publicly accessible. Can only be set at creation time. Defaults to `false`.
     */
    public?: pulumi.Input<boolean>;
    /**
     * One-way VCS integration using a raw Git repository link
     */
    rawGit?: pulumi.Input<inputs.ModuleRawGit>;
    /**
     * Name of the repository, without the owner part
     */
    repository?: pulumi.Input<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: pulumi.Input<string>;
    /**
     * List of the accounts (subdomains) which should have access to the Module
     */
    sharedAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID (slug) of the space the module is in
     */
    spaceId?: pulumi.Input<string>;
    terraformProvider?: pulumi.Input<string>;
    /**
     * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
     */
    workerPoolId?: pulumi.Input<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or
     * `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    workflowTool?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Module resource.
 */
export interface ModuleArgs {
    /**
     * Indicates whether this module can manage others. Defaults to `false`.
     */
    administrative?: pulumi.Input<boolean>;
    /**
     * Azure DevOps VCS settings
     */
    azureDevops?: pulumi.Input<inputs.ModuleAzureDevops>;
    /**
     * Bitbucket Cloud VCS settings
     */
    bitbucketCloud?: pulumi.Input<inputs.ModuleBitbucketCloud>;
    /**
     * Bitbucket Datacenter VCS settings
     */
    bitbucketDatacenter?: pulumi.Input<inputs.ModuleBitbucketDatacenter>;
    /**
     * GitHub branch to apply changes to
     */
    branch: pulumi.Input<string>;
    /**
     * Free-form module description for users
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether local preview versions can be triggered on this Module. Defaults to `false`.
     */
    enableLocalPreview?: pulumi.Input<boolean>;
    /**
     * Git sparse checkout paths is an optional list of paths to use for sparse checkout. If not set, the entire repository
     * will be checked out.
     */
    gitSparseCheckoutPaths?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * GitHub Enterprise (self-hosted) VCS settings
     */
    githubEnterprise?: pulumi.Input<inputs.ModuleGithubEnterprise>;
    /**
     * GitLab VCS settings
     */
    gitlab?: pulumi.Input<inputs.ModuleGitlab>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    moduleId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * Project root is the optional directory relative to the repository root containing the module source code.
     */
    projectRoot?: pulumi.Input<string>;
    /**
     * Protect this module from accidental deletion. If set, attempts to delete this module will fail. Defaults to `false`.
     */
    protectFromDeletion?: pulumi.Input<boolean>;
    /**
     * Make this module publicly accessible. Can only be set at creation time. Defaults to `false`.
     */
    public?: pulumi.Input<boolean>;
    /**
     * One-way VCS integration using a raw Git repository link
     */
    rawGit?: pulumi.Input<inputs.ModuleRawGit>;
    /**
     * Name of the repository, without the owner part
     */
    repository: pulumi.Input<string>;
    /**
     * Name of the Docker image used to process Runs
     */
    runnerImage?: pulumi.Input<string>;
    /**
     * List of the accounts (subdomains) which should have access to the Module
     */
    sharedAccounts?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID (slug) of the space the module is in
     */
    spaceId?: pulumi.Input<string>;
    terraformProvider?: pulumi.Input<string>;
    /**
     * ID of the worker pool to use. NOTE: worker_pool_id is required when using a self-hosted instance of Spacelift.
     */
    workerPoolId?: pulumi.Input<string>;
    /**
     * Defines the tool that will be used to execute the workflow. This can be one of `OPEN_TOFU`, `TERRAFORM_FOSS` or
     * `CUSTOM`. Defaults to `TERRAFORM_FOSS`.
     */
    workflowTool?: pulumi.Input<string>;
}
