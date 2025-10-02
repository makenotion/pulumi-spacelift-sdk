import * as pulumi from "@pulumi/pulumi";
export declare class Space extends pulumi.CustomResource {
    /**
     * Get an existing Space resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SpaceState, opts?: pulumi.CustomResourceOptions): Space;
    /**
     * Returns true if the given object is an instance of Space.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Space;
    /**
     * free-form space description for users
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * indication whether access to this space inherits read access to entities from the parent space. Defaults to `false`.
     */
    readonly inheritEntities: pulumi.Output<boolean | undefined>;
    /**
     * list of labels describing a space
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * name of the space
     */
    readonly name: pulumi.Output<string>;
    /**
     * immutable ID (slug) of parent space. Defaults to `root`.
     */
    readonly parentSpaceId: pulumi.Output<string | undefined>;
    readonly spaceId: pulumi.Output<string>;
    /**
     * Create a Space resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SpaceArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Space resources.
 */
export interface SpaceState {
    /**
     * free-form space description for users
     */
    description?: pulumi.Input<string>;
    /**
     * indication whether access to this space inherits read access to entities from the parent space. Defaults to `false`.
     */
    inheritEntities?: pulumi.Input<boolean>;
    /**
     * list of labels describing a space
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * name of the space
     */
    name?: pulumi.Input<string>;
    /**
     * immutable ID (slug) of parent space. Defaults to `root`.
     */
    parentSpaceId?: pulumi.Input<string>;
    spaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Space resource.
 */
export interface SpaceArgs {
    /**
     * free-form space description for users
     */
    description?: pulumi.Input<string>;
    /**
     * indication whether access to this space inherits read access to entities from the parent space. Defaults to `false`.
     */
    inheritEntities?: pulumi.Input<boolean>;
    /**
     * list of labels describing a space
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * name of the space
     */
    name?: pulumi.Input<string>;
    /**
     * immutable ID (slug) of parent space. Defaults to `root`.
     */
    parentSpaceId?: pulumi.Input<string>;
    spaceId?: pulumi.Input<string>;
}
