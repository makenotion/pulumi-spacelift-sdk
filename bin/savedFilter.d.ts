import * as pulumi from "@pulumi/pulumi";
export declare class SavedFilter extends pulumi.CustomResource {
    /**
     * Get an existing SavedFilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SavedFilterState, opts?: pulumi.CustomResourceOptions): SavedFilter;
    /**
     * Returns true if the given object is an instance of SavedFilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SavedFilter;
    /**
     * Login of the user who created the saved filter
     */
    readonly createdBy: pulumi.Output<string>;
    /**
     * Data is the JSON representation of the filter data
     */
    readonly data: pulumi.Output<string>;
    /**
     * Toggle whether the filter is public or not
     */
    readonly isPublic: pulumi.Output<boolean>;
    /**
     * Name of the saved filter
     */
    readonly name: pulumi.Output<string>;
    /**
     * Type describes the type of the filter. It is used to determine which view the filter is for. Possible values are
     * `stacks`, `blueprints`, `contexts`, `webhooks`.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a SavedFilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SavedFilterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SavedFilter resources.
 */
export interface SavedFilterState {
    /**
     * Login of the user who created the saved filter
     */
    createdBy?: pulumi.Input<string>;
    /**
     * Data is the JSON representation of the filter data
     */
    data?: pulumi.Input<string>;
    /**
     * Toggle whether the filter is public or not
     */
    isPublic?: pulumi.Input<boolean>;
    /**
     * Name of the saved filter
     */
    name?: pulumi.Input<string>;
    /**
     * Type describes the type of the filter. It is used to determine which view the filter is for. Possible values are
     * `stacks`, `blueprints`, `contexts`, `webhooks`.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SavedFilter resource.
 */
export interface SavedFilterArgs {
    /**
     * Data is the JSON representation of the filter data
     */
    data: pulumi.Input<string>;
    /**
     * Toggle whether the filter is public or not
     */
    isPublic: pulumi.Input<boolean>;
    /**
     * Name of the saved filter
     */
    name?: pulumi.Input<string>;
    /**
     * Type describes the type of the filter. It is used to determine which view the filter is for. Possible values are
     * `stacks`, `blueprints`, `contexts`, `webhooks`.
     */
    type: pulumi.Input<string>;
}
