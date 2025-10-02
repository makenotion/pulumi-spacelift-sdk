import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class StackDestructor extends pulumi.CustomResource {
    /**
     * Get an existing StackDestructor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StackDestructorState, opts?: pulumi.CustomResourceOptions): StackDestructor;
    /**
     * Returns true if the given object is an instance of StackDestructor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is StackDestructor;
    /**
     * If set to true, destruction won't delete the stack
     */
    readonly deactivated: pulumi.Output<boolean | undefined>;
    /**
     * If set to true, destruction will also discard all runs on the stack that are eligible for discarding (e.g. not in
     * progress runs)
     */
    readonly discardRuns: pulumi.Output<boolean | undefined>;
    readonly stackDestructorId: pulumi.Output<string>;
    /**
     * ID of the stack to delete and destroy on destruction
     */
    readonly stackId: pulumi.Output<string>;
    readonly timeouts: pulumi.Output<outputs.StackDestructorTimeouts | undefined>;
    /**
     * Create a StackDestructor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StackDestructorArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering StackDestructor resources.
 */
export interface StackDestructorState {
    /**
     * If set to true, destruction won't delete the stack
     */
    deactivated?: pulumi.Input<boolean>;
    /**
     * If set to true, destruction will also discard all runs on the stack that are eligible for discarding (e.g. not in
     * progress runs)
     */
    discardRuns?: pulumi.Input<boolean>;
    stackDestructorId?: pulumi.Input<string>;
    /**
     * ID of the stack to delete and destroy on destruction
     */
    stackId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StackDestructorTimeouts>;
}
/**
 * The set of arguments for constructing a StackDestructor resource.
 */
export interface StackDestructorArgs {
    /**
     * If set to true, destruction won't delete the stack
     */
    deactivated?: pulumi.Input<boolean>;
    /**
     * If set to true, destruction will also discard all runs on the stack that are eligible for discarding (e.g. not in
     * progress runs)
     */
    discardRuns?: pulumi.Input<boolean>;
    stackDestructorId?: pulumi.Input<string>;
    /**
     * ID of the stack to delete and destroy on destruction
     */
    stackId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StackDestructorTimeouts>;
}
