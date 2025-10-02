import * as pulumi from "@pulumi/pulumi";
export declare function getDriftDetection(args: GetDriftDetectionArgs, opts?: pulumi.InvokeOptions): Promise<GetDriftDetectionResult>;
/**
 * A collection of arguments for invoking getDriftDetection.
 */
export interface GetDriftDetectionArgs {
    id?: string;
    ignoreState?: boolean;
    stackId: string;
}
/**
 * A collection of values returned by getDriftDetection.
 */
export interface GetDriftDetectionResult {
    readonly id: string;
    readonly ignoreState?: boolean;
    readonly reconcile: boolean;
    readonly schedules: string[];
    readonly stackId: string;
    readonly timezone: string;
}
export declare function getDriftDetectionOutput(args: GetDriftDetectionOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDriftDetectionResult>;
/**
 * A collection of arguments for invoking getDriftDetection.
 */
export interface GetDriftDetectionOutputArgs {
    id?: pulumi.Input<string>;
    ignoreState?: pulumi.Input<boolean>;
    stackId: pulumi.Input<string>;
}
