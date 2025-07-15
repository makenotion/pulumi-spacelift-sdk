import * as pulumi from "@pulumi/pulumi";
export declare function getScheduledTask(args: GetScheduledTaskArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledTaskResult>;
/**
 * A collection of arguments for invoking getScheduledTask.
 */
export interface GetScheduledTaskArgs {
    id?: string;
    scheduledTaskId: string;
}
/**
 * A collection of values returned by getScheduledTask.
 */
export interface GetScheduledTaskResult {
    readonly at: number;
    readonly command: string;
    readonly everies: string[];
    readonly id: string;
    readonly scheduleId: string;
    readonly scheduledTaskId: string;
    readonly stackId: string;
    readonly timezone: string;
}
export declare function getScheduledTaskOutput(args: GetScheduledTaskOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledTaskResult>;
/**
 * A collection of arguments for invoking getScheduledTask.
 */
export interface GetScheduledTaskOutputArgs {
    id?: pulumi.Input<string>;
    scheduledTaskId: pulumi.Input<string>;
}
