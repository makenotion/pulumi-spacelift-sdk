import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getWorkerPools(args?: GetWorkerPoolsArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkerPoolsResult>;
/**
 * A collection of arguments for invoking getWorkerPools.
 */
export interface GetWorkerPoolsArgs {
    id?: string;
}
/**
 * A collection of values returned by getWorkerPools.
 */
export interface GetWorkerPoolsResult {
    readonly id: string;
    readonly workerPools: outputs.GetWorkerPoolsWorkerPool[];
}
export declare function getWorkerPoolsOutput(args?: GetWorkerPoolsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkerPoolsResult>;
/**
 * A collection of arguments for invoking getWorkerPools.
 */
export interface GetWorkerPoolsOutputArgs {
    id?: pulumi.Input<string>;
}
