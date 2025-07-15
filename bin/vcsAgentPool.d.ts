import * as pulumi from "@pulumi/pulumi";
export declare class VcsAgentPool extends pulumi.CustomResource {
    /**
     * Get an existing VcsAgentPool resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VcsAgentPoolState, opts?: pulumi.CustomResourceOptions): VcsAgentPool;
    /**
     * Returns true if the given object is an instance of VcsAgentPool.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is VcsAgentPool;
    /**
     * VCS agent pool configuration, encoded using base64
     */
    readonly config: pulumi.Output<string>;
    /**
     * Free-form VCS agent pool description for users
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Name of the VCS agent pool, must be unique within an account
     */
    readonly name: pulumi.Output<string>;
    readonly vcsAgentPoolId: pulumi.Output<string>;
    /**
     * Create a VcsAgentPool resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: VcsAgentPoolArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VcsAgentPool resources.
 */
export interface VcsAgentPoolState {
    /**
     * VCS agent pool configuration, encoded using base64
     */
    config?: pulumi.Input<string>;
    /**
     * Free-form VCS agent pool description for users
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the VCS agent pool, must be unique within an account
     */
    name?: pulumi.Input<string>;
    vcsAgentPoolId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VcsAgentPool resource.
 */
export interface VcsAgentPoolArgs {
    /**
     * Free-form VCS agent pool description for users
     */
    description?: pulumi.Input<string>;
    /**
     * Name of the VCS agent pool, must be unique within an account
     */
    name?: pulumi.Input<string>;
    vcsAgentPoolId?: pulumi.Input<string>;
}
