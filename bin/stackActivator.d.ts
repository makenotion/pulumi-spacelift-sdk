import * as pulumi from "@pulumi/pulumi";
export declare class StackActivator extends pulumi.CustomResource {
    /**
     * Get an existing StackActivator resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StackActivatorState, opts?: pulumi.CustomResourceOptions): StackActivator;
    /**
     * Returns true if the given object is an instance of StackActivator.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StackActivator;
    /**
     * Enable/disable stack
     */
    readonly enabled: pulumi.Output<boolean>;
    readonly stackActivatorId: pulumi.Output<string>;
    /**
     * ID of the stack to enable/disable
     */
    readonly stackId: pulumi.Output<string>;
    /**
     * Create a StackActivator resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StackActivatorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StackActivator resources.
 */
export interface StackActivatorState {
    /**
     * Enable/disable stack
     */
    enabled?: pulumi.Input<boolean>;
    stackActivatorId?: pulumi.Input<string>;
    /**
     * ID of the stack to enable/disable
     */
    stackId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a StackActivator resource.
 */
export interface StackActivatorArgs {
    /**
     * Enable/disable stack
     */
    enabled: pulumi.Input<boolean>;
    stackActivatorId?: pulumi.Input<string>;
    /**
     * ID of the stack to enable/disable
     */
    stackId: pulumi.Input<string>;
}
