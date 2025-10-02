import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class ScheduledRun extends pulumi.CustomResource {
    /**
     * Get an existing ScheduledRun resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScheduledRunState, opts?: pulumi.CustomResourceOptions): ScheduledRun;
    /**
     * Returns true if the given object is an instance of ScheduledRun.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ScheduledRun;
    /**
     * Timestamp (unix timestamp) at which time the scheduled run should happen.
     */
    readonly at: pulumi.Output<number | undefined>;
    /**
     * List of cron schedule expressions based on which the scheduled run should be triggered.
     */
    readonly everies: pulumi.Output<string[] | undefined>;
    /**
     * Name of the scheduled run
     */
    readonly name: pulumi.Output<string>;
    /**
     * Timestamp (unix timestamp) of when the next run will be scheduled.
     */
    readonly nextSchedule: pulumi.Output<number>;
    /**
     * Customer provided runtime configuration for this scheduled run.
     */
    readonly runtimeConfig: pulumi.Output<outputs.ScheduledRunRuntimeConfig | undefined>;
    /**
     * ID of the schedule
     */
    readonly scheduleId: pulumi.Output<string>;
    readonly scheduledRunId: pulumi.Output<string>;
    /**
     * ID of the stack for which to set up the scheduled run
     */
    readonly stackId: pulumi.Output<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    readonly timezone: pulumi.Output<string | undefined>;
    /**
     * Create a ScheduledRun resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScheduledRunArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ScheduledRun resources.
 */
export interface ScheduledRunState {
    /**
     * Timestamp (unix timestamp) at which time the scheduled run should happen.
     */
    at?: pulumi.Input<number>;
    /**
     * List of cron schedule expressions based on which the scheduled run should be triggered.
     */
    everies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the scheduled run
     */
    name?: pulumi.Input<string>;
    /**
     * Timestamp (unix timestamp) of when the next run will be scheduled.
     */
    nextSchedule?: pulumi.Input<number>;
    /**
     * Customer provided runtime configuration for this scheduled run.
     */
    runtimeConfig?: pulumi.Input<inputs.ScheduledRunRuntimeConfig>;
    /**
     * ID of the schedule
     */
    scheduleId?: pulumi.Input<string>;
    scheduledRunId?: pulumi.Input<string>;
    /**
     * ID of the stack for which to set up the scheduled run
     */
    stackId?: pulumi.Input<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    timezone?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ScheduledRun resource.
 */
export interface ScheduledRunArgs {
    /**
     * Timestamp (unix timestamp) at which time the scheduled run should happen.
     */
    at?: pulumi.Input<number>;
    /**
     * List of cron schedule expressions based on which the scheduled run should be triggered.
     */
    everies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the scheduled run
     */
    name?: pulumi.Input<string>;
    /**
     * Customer provided runtime configuration for this scheduled run.
     */
    runtimeConfig?: pulumi.Input<inputs.ScheduledRunRuntimeConfig>;
    /**
     * ID of the schedule
     */
    scheduleId?: pulumi.Input<string>;
    scheduledRunId?: pulumi.Input<string>;
    /**
     * ID of the stack for which to set up the scheduled run
     */
    stackId: pulumi.Input<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    timezone?: pulumi.Input<string>;
}
