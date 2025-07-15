import * as pulumi from "@pulumi/pulumi";
export declare class GitlabIntegration extends pulumi.CustomResource {
    /**
     * Get an existing GitlabIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GitlabIntegrationState, opts?: pulumi.CustomResourceOptions): GitlabIntegration;
    /**
     * Returns true if the given object is an instance of GitlabIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is GitlabIntegration;
    /**
     * API host URL
     */
    readonly apiHost: pulumi.Output<string>;
    /**
     * Description of the integration
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Is the GitLab integration the default for all spaces? If set to `true` the space must be set to `root` in `space_id` or
     * left empty which uses the default
     */
    readonly isDefault: pulumi.Output<boolean | undefined>;
    /**
     * Labels to set on the integration
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * The friendly name of the integration
     */
    readonly name: pulumi.Output<string>;
    /**
     * The GitLab API Token
     */
    readonly privateToken: pulumi.Output<string>;
    /**
     * ID (slug) of the space the integration is in; Default: `root`
     */
    readonly spaceId: pulumi.Output<string | undefined>;
    /**
     * User facing host URL.
     */
    readonly userFacingHost: pulumi.Output<string>;
    /**
     * VCS checks configured for GitLab repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to INDIVIDUAL.
     */
    readonly vcsChecks: pulumi.Output<string | undefined>;
    /**
     * Secret for webhooks originating from GitLab repositories
     */
    readonly webhookSecret: pulumi.Output<string>;
    /**
     * URL for webhooks originating from GitLab repositories
     */
    readonly webhookUrl: pulumi.Output<string>;
    /**
     * Create a GitlabIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GitlabIntegrationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering GitlabIntegration resources.
 */
export interface GitlabIntegrationState {
    /**
     * API host URL
     */
    apiHost?: pulumi.Input<string>;
    /**
     * Description of the integration
     */
    description?: pulumi.Input<string>;
    /**
     * Is the GitLab integration the default for all spaces? If set to `true` the space must be set to `root` in `space_id` or
     * left empty which uses the default
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * Labels to set on the integration
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The friendly name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * The GitLab API Token
     */
    privateToken?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the integration is in; Default: `root`
     */
    spaceId?: pulumi.Input<string>;
    /**
     * User facing host URL.
     */
    userFacingHost?: pulumi.Input<string>;
    /**
     * VCS checks configured for GitLab repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to INDIVIDUAL.
     */
    vcsChecks?: pulumi.Input<string>;
    /**
     * Secret for webhooks originating from GitLab repositories
     */
    webhookSecret?: pulumi.Input<string>;
    /**
     * URL for webhooks originating from GitLab repositories
     */
    webhookUrl?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a GitlabIntegration resource.
 */
export interface GitlabIntegrationArgs {
    /**
     * API host URL
     */
    apiHost: pulumi.Input<string>;
    /**
     * Description of the integration
     */
    description?: pulumi.Input<string>;
    /**
     * Is the GitLab integration the default for all spaces? If set to `true` the space must be set to `root` in `space_id` or
     * left empty which uses the default
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * Labels to set on the integration
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The friendly name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * The GitLab API Token
     */
    privateToken: pulumi.Input<string>;
    /**
     * ID (slug) of the space the integration is in; Default: `root`
     */
    spaceId?: pulumi.Input<string>;
    /**
     * User facing host URL.
     */
    userFacingHost: pulumi.Input<string>;
    /**
     * VCS checks configured for GitLab repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to INDIVIDUAL.
     */
    vcsChecks?: pulumi.Input<string>;
}
