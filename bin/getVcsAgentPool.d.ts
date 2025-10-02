import * as pulumi from "@pulumi/pulumi";
export declare function getVcsAgentPool(args: GetVcsAgentPoolArgs, opts?: pulumi.InvokeOptions): Promise<GetVcsAgentPoolResult>;
/**
 * A collection of arguments for invoking getVcsAgentPool.
 */
export interface GetVcsAgentPoolArgs {
    id?: string;
    vcsAgentPoolId: string;
}
/**
 * A collection of values returned by getVcsAgentPool.
 */
export interface GetVcsAgentPoolResult {
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly vcsAgentPoolId: string;
}
export declare function getVcsAgentPoolOutput(args: GetVcsAgentPoolOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVcsAgentPoolResult>;
/**
 * A collection of arguments for invoking getVcsAgentPool.
 */
export interface GetVcsAgentPoolOutputArgs {
    id?: pulumi.Input<string>;
    vcsAgentPoolId: pulumi.Input<string>;
}
