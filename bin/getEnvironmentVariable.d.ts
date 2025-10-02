import * as pulumi from "@pulumi/pulumi";
export declare function getEnvironmentVariable(args: GetEnvironmentVariableArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentVariableResult>;
/**
 * A collection of arguments for invoking getEnvironmentVariable.
 */
export interface GetEnvironmentVariableArgs {
    contextId?: string;
    id?: string;
    moduleId?: string;
    name: string;
    stackId?: string;
}
/**
 * A collection of values returned by getEnvironmentVariable.
 */
export interface GetEnvironmentVariableResult {
    readonly checksum: string;
    readonly contextId?: string;
    readonly description: string;
    readonly id: string;
    readonly moduleId?: string;
    readonly name: string;
    readonly stackId?: string;
    readonly value: string;
    readonly writeOnly: boolean;
}
export declare function getEnvironmentVariableOutput(args: GetEnvironmentVariableOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnvironmentVariableResult>;
/**
 * A collection of arguments for invoking getEnvironmentVariable.
 */
export interface GetEnvironmentVariableOutputArgs {
    contextId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
