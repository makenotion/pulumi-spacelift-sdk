import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getVcsAgentPools(args?: GetVcsAgentPoolsArgs, opts?: pulumi.InvokeOptions): Promise<GetVcsAgentPoolsResult>;
/**
 * A collection of arguments for invoking getVcsAgentPools.
 */
export interface GetVcsAgentPoolsArgs {
    id?: string;
}
/**
 * A collection of values returned by getVcsAgentPools.
 */
export interface GetVcsAgentPoolsResult {
    readonly id: string;
    readonly vcsAgentPools: outputs.GetVcsAgentPoolsVcsAgentPool[];
}
export declare function getVcsAgentPoolsOutput(args?: GetVcsAgentPoolsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetVcsAgentPoolsResult>;
/**
 * A collection of arguments for invoking getVcsAgentPools.
 */
export interface GetVcsAgentPoolsOutputArgs {
    id?: pulumi.Input<string>;
}
