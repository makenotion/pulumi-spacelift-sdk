import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Run extends pulumi.CustomResource {
    /**
     * Get an existing Run resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RunState, opts?: pulumi.CustomResourceOptions): Run;
    /**
     * Returns true if the given object is an instance of Run.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Run;
    /**
     * The commit SHA for which to trigger a run.
     */
    readonly commitSha: pulumi.Output<string | undefined>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    readonly keepers: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * Whether the run is a proposed run. Defaults to `false`.
     */
    readonly proposed: pulumi.Output<boolean | undefined>;
    /**
     * ID of the stack on which the run is to be triggered.
     */
    readonly stackId: pulumi.Output<string>;
    readonly timeouts: pulumi.Output<outputs.RunTimeouts | undefined>;
    /**
     * Wait for the run to finish
     */
    readonly wait: pulumi.Output<outputs.RunWait | undefined>;
    /**
     * Create a Run resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RunArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Run resources.
 */
export interface RunState {
    /**
     * The commit SHA for which to trigger a run.
     */
    commitSha?: pulumi.Input<string>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    keepers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether the run is a proposed run. Defaults to `false`.
     */
    proposed?: pulumi.Input<boolean>;
    /**
     * ID of the stack on which the run is to be triggered.
     */
    stackId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RunTimeouts>;
    /**
     * Wait for the run to finish
     */
    wait?: pulumi.Input<inputs.RunWait>;
}
/**
 * The set of arguments for constructing a Run resource.
 */
export interface RunArgs {
    /**
     * The commit SHA for which to trigger a run.
     */
    commitSha?: pulumi.Input<string>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    keepers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * Whether the run is a proposed run. Defaults to `false`.
     */
    proposed?: pulumi.Input<boolean>;
    /**
     * ID of the stack on which the run is to be triggered.
     */
    stackId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.RunTimeouts>;
    /**
     * Wait for the run to finish
     */
    wait?: pulumi.Input<inputs.RunWait>;
}
