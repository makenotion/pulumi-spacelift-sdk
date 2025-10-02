import * as pulumi from "@pulumi/pulumi";
export declare class BitbucketDatacenterIntegration extends pulumi.CustomResource {
    /**
     * Get an existing BitbucketDatacenterIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BitbucketDatacenterIntegrationState, opts?: pulumi.CustomResourceOptions): BitbucketDatacenterIntegration;
    /**
     * Returns true if the given object is an instance of BitbucketDatacenterIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BitbucketDatacenterIntegration;
    /**
     * User access token from Bitbucket
     */
    readonly accessToken: pulumi.Output<string>;
    /**
     * The API host where requests will be sent
     */
    readonly apiHost: pulumi.Output<string>;
    /**
     * Bitbucket Datacenter integration description
     */
    readonly description: pulumi.Output<string>;
    /**
     * Bitbucket Datacenter integration is default.
     */
    readonly isDefault: pulumi.Output<boolean>;
    /**
     * Bitbucket Datacenter integration labels
     */
    readonly labels: pulumi.Output<string[]>;
    /**
     * Bitbucket Datacenter integration name
     */
    readonly name: pulumi.Output<string>;
    /**
     * Bitbucket Datacenter integration space id. Defaults to `root`.
     */
    readonly spaceId: pulumi.Output<string>;
    /**
     * Indicates whether the integration should use git checkout. If false source code will be downloaded using the VCS API.
     * Defaults to false.
     */
    readonly useGitCheckout: pulumi.Output<boolean>;
    /**
     * User Facing Host which will be used for all user-facing URLs displayed in the Spacelift UI
     */
    readonly userFacingHost: pulumi.Output<string>;
    /**
     * Username which will be used to authenticate requests for cloning repositories
     */
    readonly username: pulumi.Output<string>;
    /**
     * VCS checks configured for Bitbucket Datacenter repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to
     * INDIVIDUAL.
     */
    readonly vcsChecks: pulumi.Output<string | undefined>;
    /**
     * Secret for webhooks originating from Bitbucket repositories
     */
    readonly webhookSecret: pulumi.Output<string>;
    /**
     * URL for webhooks originating from Bitbucket repositories
     */
    readonly webhookUrl: pulumi.Output<string>;
    /**
     * Create a BitbucketDatacenterIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BitbucketDatacenterIntegrationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BitbucketDatacenterIntegration resources.
 */
export interface BitbucketDatacenterIntegrationState {
    /**
     * User access token from Bitbucket
     */
    accessToken?: pulumi.Input<string>;
    /**
     * The API host where requests will be sent
     */
    apiHost?: pulumi.Input<string>;
    /**
     * Bitbucket Datacenter integration description
     */
    description?: pulumi.Input<string>;
    /**
     * Bitbucket Datacenter integration is default.
     */
    isDefault?: pulumi.Input<boolean>;
    /**
     * Bitbucket Datacenter integration labels
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Bitbucket Datacenter integration name
     */
    name?: pulumi.Input<string>;
    /**
     * Bitbucket Datacenter integration space id. Defaults to `root`.
     */
    spaceId?: pulumi.Input<string>;
    /**
     * Indicates whether the integration should use git checkout. If false source code will be downloaded using the VCS API.
     * Defaults to false.
     */
    useGitCheckout?: pulumi.Input<boolean>;
    /**
     * User Facing Host which will be used for all user-facing URLs displayed in the Spacelift UI
     */
    userFacingHost?: pulumi.Input<string>;
    /**
     * Username which will be used to authenticate requests for cloning repositories
     */
    username?: pulumi.Input<string>;
    /**
     * VCS checks configured for Bitbucket Datacenter repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to
     * INDIVIDUAL.
     */
    vcsChecks?: pulumi.Input<string>;
    /**
     * Secret for webhooks originating from Bitbucket repositories
     */
    webhookSecret?: pulumi.Input<string>;
    /**
     * URL for webhooks originating from Bitbucket repositories
     */
    webhookUrl?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BitbucketDatacenterIntegration resource.
 */
export interface BitbucketDatacenterIntegrationArgs {
    /**
     * User access token from Bitbucket
     */
    accessToken: pulumi.Input<string>;
    /**
     * The API host where requests will be sent
     */
    apiHost: pulumi.Input<string>;
    /**
     * Bitbucket Datacenter integration description
     */
    description?: pulumi.Input<string>;
    /**
     * Bitbucket Datacenter integration is default.
     */
    isDefault: pulumi.Input<boolean>;
    /**
     * Bitbucket Datacenter integration labels
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Bitbucket Datacenter integration name
     */
    name?: pulumi.Input<string>;
    /**
     * Bitbucket Datacenter integration space id. Defaults to `root`.
     */
    spaceId?: pulumi.Input<string>;
    /**
     * Indicates whether the integration should use git checkout. If false source code will be downloaded using the VCS API.
     * Defaults to false.
     */
    useGitCheckout?: pulumi.Input<boolean>;
    /**
     * User Facing Host which will be used for all user-facing URLs displayed in the Spacelift UI
     */
    userFacingHost: pulumi.Input<string>;
    /**
     * Username which will be used to authenticate requests for cloning repositories
     */
    username: pulumi.Input<string>;
    /**
     * VCS checks configured for Bitbucket Datacenter repositories. Possible values: INDIVIDUAL, AGGREGATED, ALL. Defaults to
     * INDIVIDUAL.
     */
    vcsChecks?: pulumi.Input<string>;
}
