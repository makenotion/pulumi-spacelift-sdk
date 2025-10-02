import * as pulumi from "@pulumi/pulumi";
export declare function getScheduledDeleteStack(args: GetScheduledDeleteStackArgs, opts?: pulumi.InvokeOptions): Promise<GetScheduledDeleteStackResult>;
/**
 * A collection of arguments for invoking getScheduledDeleteStack.
 */
export interface GetScheduledDeleteStackArgs {
    id?: string;
    scheduledDeleteStackId: string;
}
/**
 * A collection of values returned by getScheduledDeleteStack.
 */
export interface GetScheduledDeleteStackResult {
    readonly at: number;
    readonly deleteResources: boolean;
    readonly id: string;
    readonly scheduleId: string;
    readonly scheduledDeleteStackId: string;
    readonly stackId: string;
}
export declare function getScheduledDeleteStackOutput(args: GetScheduledDeleteStackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetScheduledDeleteStackResult>;
/**
 * A collection of arguments for invoking getScheduledDeleteStack.
 */
export interface GetScheduledDeleteStackOutputArgs {
    id?: pulumi.Input<string>;
    scheduledDeleteStackId: pulumi.Input<string>;
}
