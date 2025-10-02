import * as pulumi from "@pulumi/pulumi";
export declare function getWorkerPool(args: GetWorkerPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetWorkerPoolResult>;
/**
 * A collection of arguments for invoking getWorkerPool.
 */
export interface GetWorkerPoolArgs {
    id?: string;
    workerPoolId: string;
}
/**
 * A collection of values returned by getWorkerPool.
 */
export interface GetWorkerPoolResult {
    readonly config: string;
    readonly description: string;
    readonly driftDetectionRunLimit: number;
    readonly id: string;
    readonly labels: string[];
    readonly name: string;
    readonly spaceId: string;
    readonly workerPoolId: string;
}
export declare function getWorkerPoolOutput(args: GetWorkerPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWorkerPoolResult>;
/**
 * A collection of arguments for invoking getWorkerPool.
 */
export interface GetWorkerPoolOutputArgs {
    id?: pulumi.Input<string>;
    workerPoolId: pulumi.Input<string>;
}
