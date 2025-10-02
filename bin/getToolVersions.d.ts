import * as pulumi from "@pulumi/pulumi";
export declare function getToolVersions(args: GetToolVersionsArgs, opts?: pulumi.InvokeOptions): Promise<GetToolVersionsResult>;
/**
 * A collection of arguments for invoking getToolVersions.
 */
export interface GetToolVersionsArgs {
    id?: string;
    tool: string;
}
/**
 * A collection of values returned by getToolVersions.
 */
export interface GetToolVersionsResult {
    readonly id: string;
    readonly tool: string;
    readonly versions: string[];
}
export declare function getToolVersionsOutput(args: GetToolVersionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetToolVersionsResult>;
/**
 * A collection of arguments for invoking getToolVersions.
 */
export interface GetToolVersionsOutputArgs {
    id?: pulumi.Input<string>;
    tool: pulumi.Input<string>;
}
