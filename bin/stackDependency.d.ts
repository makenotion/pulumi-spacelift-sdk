import * as pulumi from "@pulumi/pulumi";
export declare class StackDependency extends pulumi.CustomResource {
    /**
     * Get an existing StackDependency resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StackDependencyState, opts?: pulumi.CustomResourceOptions): StackDependency;
    /**
     * Returns true if the given object is an instance of StackDependency.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StackDependency;
    /**
     * immutable ID (slug) of stack to depend on.
     */
    readonly dependsOnStackId: pulumi.Output<string>;
    readonly stackDependencyId: pulumi.Output<string>;
    /**
     * immutable ID (slug) of stack which has a dependency.
     */
    readonly stackId: pulumi.Output<string>;
    /**
     * Create a StackDependency resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StackDependencyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StackDependency resources.
 */
export interface StackDependencyState {
    /**
     * immutable ID (slug) of stack to depend on.
     */
    dependsOnStackId?: pulumi.Input<string>;
    stackDependencyId?: pulumi.Input<string>;
    /**
     * immutable ID (slug) of stack which has a dependency.
     */
    stackId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StackDependency resource.
 */
export interface StackDependencyArgs {
    /**
     * immutable ID (slug) of stack to depend on.
     */
    dependsOnStackId: pulumi.Input<string>;
    stackDependencyId?: pulumi.Input<string>;
    /**
     * immutable ID (slug) of stack which has a dependency.
     */
    stackId: pulumi.Input<string>;
}
