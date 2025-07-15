import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getScheduledRun(args: GetScheduledRunArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledRunResult>;
/**
 * A collection of arguments for invoking getScheduledRun.
 */
export interface GetScheduledRunArgs {
    at?: number;
    everies?: string[];
    id?: string;
    name?: string;
    runtimeConfigs?: inputs.GetScheduledRunRuntimeConfig[];
    scheduledRunId: string;
    timezone?: string;
}
/**
 * A collection of values returned by getScheduledRun.
 */
export interface GetScheduledRunResult {
    readonly at: number;
    readonly everies: string[];
    readonly id: string;
    readonly name: string;
    readonly nextSchedule: number;
    readonly runtimeConfigs?: outputs.GetScheduledRunRuntimeConfig[];
    readonly scheduleId: string;
    readonly scheduledRunId: string;
    readonly stackId: string;
    readonly timezone: string;
}
export declare function getScheduledRunOutput(args: GetScheduledRunOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledRunResult>;
/**
 * A collection of arguments for invoking getScheduledRun.
 */
export interface GetScheduledRunOutputArgs {
    at?: pulumi.Input<number>;
    everies?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    runtimeConfigs?: pulumi.Input<pulumi.Input<inputs.GetScheduledRunRuntimeConfigArgs>[]>;
    scheduledRunId: pulumi.Input<string>;
    timezone?: pulumi.Input<string>;
}
