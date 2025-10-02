import * as pulumi from "@pulumi/pulumi";
export declare class TerraformProvider extends pulumi.CustomResource {
    /**
     * Get an existing TerraformProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TerraformProviderState, opts?: pulumi.CustomResourceOptions): TerraformProvider;
    /**
     * Returns true if the given object is an instance of TerraformProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is TerraformProvider;
    /**
     * Free-form description for human users, supports Markdown
     */
    readonly description: pulumi.Output<string | undefined>;
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * Whether the provider is public or not, defaults to false (private)
     */
    readonly public: pulumi.Output<boolean | undefined>;
    /**
     * ID (slug) of the space the provider is in
     */
    readonly spaceId: pulumi.Output<string>;
    readonly terraformProviderId: pulumi.Output<string>;
    /**
     * Type of the provider - should be unique in one account
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a TerraformProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TerraformProviderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering TerraformProvider resources.
 */
export interface TerraformProviderState {
    /**
     * Free-form description for human users, supports Markdown
     */
    description?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the provider is public or not, defaults to false (private)
     */
    public?: pulumi.Input<boolean>;
    /**
     * ID (slug) of the space the provider is in
     */
    spaceId?: pulumi.Input<string>;
    terraformProviderId?: pulumi.Input<string>;
    /**
     * Type of the provider - should be unique in one account
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a TerraformProvider resource.
 */
export interface TerraformProviderArgs {
    /**
     * Free-form description for human users, supports Markdown
     */
    description?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Whether the provider is public or not, defaults to false (private)
     */
    public?: pulumi.Input<boolean>;
    /**
     * ID (slug) of the space the provider is in
     */
    spaceId: pulumi.Input<string>;
    terraformProviderId?: pulumi.Input<string>;
    /**
     * Type of the provider - should be unique in one account
     */
    type: pulumi.Input<string>;
}
