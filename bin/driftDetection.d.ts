import * as pulumi from "@pulumi/pulumi";
export declare class DriftDetection extends pulumi.CustomResource {
    /**
     * Get an existing DriftDetection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DriftDetectionState, opts?: pulumi.CustomResourceOptions): DriftDetection;
    /**
     * Returns true if the given object is an instance of DriftDetection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DriftDetection;
    readonly driftDetectionId: pulumi.Output<string>;
    /**
     * Controls whether drift detection should be performed on a stack in any final state instead of just 'Finished'.
     */
    readonly ignoreState: pulumi.Output<boolean | undefined>;
    /**
     * Whether a tracked run should be triggered when drift is detected.
     */
    readonly reconcile: pulumi.Output<boolean | undefined>;
    /**
     * List of cron schedule expressions based on which drift detection should be triggered.
     */
    readonly schedules: pulumi.Output<string[]>;
    /**
     * ID of the stack for which to set up drift detection
     */
    readonly stackId: pulumi.Output<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    readonly timezone: pulumi.Output<string | undefined>;
    /**
     * Create a DriftDetection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DriftDetectionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DriftDetection resources.
 */
export interface DriftDetectionState {
    driftDetectionId?: pulumi.Input<string>;
    /**
     * Controls whether drift detection should be performed on a stack in any final state instead of just 'Finished'.
     */
    ignoreState?: pulumi.Input<boolean>;
    /**
     * Whether a tracked run should be triggered when drift is detected.
     */
    reconcile?: pulumi.Input<boolean>;
    /**
     * List of cron schedule expressions based on which drift detection should be triggered.
     */
    schedules?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the stack for which to set up drift detection
     */
    stackId?: pulumi.Input<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    timezone?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DriftDetection resource.
 */
export interface DriftDetectionArgs {
    driftDetectionId?: pulumi.Input<string>;
    /**
     * Controls whether drift detection should be performed on a stack in any final state instead of just 'Finished'.
     */
    ignoreState?: pulumi.Input<boolean>;
    /**
     * Whether a tracked run should be triggered when drift is detected.
     */
    reconcile?: pulumi.Input<boolean>;
    /**
     * List of cron schedule expressions based on which drift detection should be triggered.
     */
    schedules: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * ID of the stack for which to set up drift detection
     */
    stackId: pulumi.Input<string>;
    /**
     * Timezone in which the schedule is expressed. Defaults to `UTC`.
     */
    timezone?: pulumi.Input<string>;
}
