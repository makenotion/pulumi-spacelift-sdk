import * as pulumi from "@pulumi/pulumi";
export declare class ScheduledDeleteStack extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledDeleteStack resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduledDeleteStackState, opts?: pulumi.CustomResourceOptions): ScheduledDeleteStack;
    /**
     * Returns true if the given object is an instance of ScheduledDeleteStack.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScheduledDeleteStack;
    /**
     * Timestamp (unix timestamp) at which time the scheduling should happen.
     */
    readonly at: pulumi.Output<number>;
    /**
     * Indicates whether the resources of the stack should be deleted.
     */
    readonly deleteResources: pulumi.Output<boolean | undefined>;
    /**
     * ID of the schedule
     */
    readonly scheduleId: pulumi.Output<string>;
    readonly scheduledDeleteStackId: pulumi.Output<string>;
    /**
     * ID of the stack for which to set up scheduling
     */
    readonly stackId: pulumi.Output<string>;
    /**
     * Create a ScheduledDeleteStack resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledDeleteStackArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScheduledDeleteStack resources.
 */
export interface ScheduledDeleteStackState {
    /**
     * Timestamp (unix timestamp) at which time the scheduling should happen.
     */
    at?: pulumi.Input<number>;
    /**
     * Indicates whether the resources of the stack should be deleted.
     */
    deleteResources?: pulumi.Input<boolean>;
    /**
     * ID of the schedule
     */
    scheduleId?: pulumi.Input<string>;
    scheduledDeleteStackId?: pulumi.Input<string>;
    /**
     * ID of the stack for which to set up scheduling
     */
    stackId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ScheduledDeleteStack resource.
 */
export interface ScheduledDeleteStackArgs {
    /**
     * Timestamp (unix timestamp) at which time the scheduling should happen.
     */
    at: pulumi.Input<number>;
    /**
     * Indicates whether the resources of the stack should be deleted.
     */
    deleteResources?: pulumi.Input<boolean>;
    /**
     * ID of the schedule
     */
    scheduleId?: pulumi.Input<string>;
    scheduledDeleteStackId?: pulumi.Input<string>;
    /**
     * ID of the stack for which to set up scheduling
     */
    stackId: pulumi.Input<string>;
}
