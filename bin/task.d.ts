import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Task extends pulumi.CustomResource {
    /**
     * Get an existing Task resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TaskState, opts?: pulumi.CustomResourceOptions): Task;
    /**
     * Returns true if the given object is an instance of Task.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Task;
    /**
     * Command that will be run.
     */
    readonly command: pulumi.Output<string>;
    /**
     * Whether to initialize the stack or not. Default: `true`
     */
    readonly init: pulumi.Output<boolean | undefined>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    readonly keepers: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * ID of the stack for which to run the task
     */
    readonly stackId: pulumi.Output<string>;
    readonly taskId: pulumi.Output<string>;
    readonly timeouts: pulumi.Output<outputs.TaskTimeouts | undefined>;
    /**
     * Wait for the run to finish
     */
    readonly wait: pulumi.Output<outputs.TaskWait | undefined>;
    /**
     * Create a Task resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TaskArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Task resources.
 */
export interface TaskState {
    /**
     * Command that will be run.
     */
    command?: pulumi.Input<string>;
    /**
     * Whether to initialize the stack or not. Default: `true`
     */
    init?: pulumi.Input<boolean>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    keepers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * ID of the stack for which to run the task
     */
    stackId?: pulumi.Input<string>;
    taskId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TaskTimeouts>;
    /**
     * Wait for the run to finish
     */
    wait?: pulumi.Input<inputs.TaskWait>;
}
/**
 * The set of arguments for constructing a Task resource.
 */
export interface TaskArgs {
    /**
     * Command that will be run.
     */
    command: pulumi.Input<string>;
    /**
     * Whether to initialize the stack or not. Default: `true`
     */
    init?: pulumi.Input<boolean>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    keepers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * ID of the stack for which to run the task
     */
    stackId: pulumi.Input<string>;
    taskId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.TaskTimeouts>;
    /**
     * Wait for the run to finish
     */
    wait?: pulumi.Input<inputs.TaskWait>;
}
