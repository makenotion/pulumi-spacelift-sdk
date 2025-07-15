import * as pulumi from "@pulumi/pulumi";
export declare class ScheduledTask extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledTask resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduledTaskState, opts?: pulumi.CustomResourceOptions): ScheduledTask;
    /**
     * Returns true if the given object is an instance of ScheduledTask.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScheduledTask;
    /**
     * Timestamp (unix timestamp) at which time the scheduled task should happen.
     */
    readonly at: pulumi.Output<number | undefined>;
    /**
     * Command that will be run.
     */
    readonly command: pulumi.Output<string>;
    /**
     * List of cron schedule expressions based on which the scheduled task should be triggered.
     */
    readonly everies: pulumi.Output<string[] | undefined>;
    /**
     * ID of the schedule
     */
    readonly scheduleId: pulumi.Output<string>;
    readonly scheduledTaskId: pulumi.Output<string>;
    /**
     * ID of the stack for which to set up the scheduled task
     */
    readonly stackId: pulumi.Output<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    readonly timezone: pulumi.Output<string | undefined>;
    /**
     * Create a ScheduledTask resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledTaskArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScheduledTask resources.
 */
export interface ScheduledTaskState {
    /**
     * Timestamp (unix timestamp) at which time the scheduled task should happen.
     */
    at?: pulumi.Input<number>;
    /**
     * Command that will be run.
     */
    command?: pulumi.Input<string>;
    /**
     * List of cron schedule expressions based on which the scheduled task should be triggered.
     */
    everies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the schedule
     */
    scheduleId?: pulumi.Input<string>;
    scheduledTaskId?: pulumi.Input<string>;
    /**
     * ID of the stack for which to set up the scheduled task
     */
    stackId?: pulumi.Input<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    timezone?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ScheduledTask resource.
 */
export interface ScheduledTaskArgs {
    /**
     * Timestamp (unix timestamp) at which time the scheduled task should happen.
     */
    at?: pulumi.Input<number>;
    /**
     * Command that will be run.
     */
    command: pulumi.Input<string>;
    /**
     * List of cron schedule expressions based on which the scheduled task should be triggered.
     */
    everies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the schedule
     */
    scheduleId?: pulumi.Input<string>;
    scheduledTaskId?: pulumi.Input<string>;
    /**
     * ID of the stack for which to set up the scheduled task
     */
    stackId: pulumi.Input<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    timezone?: pulumi.Input<string>;
}
