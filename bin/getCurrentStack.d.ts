import * as pulumi from "@pulumi/pulumi";
export declare function getCurrentStack(args?: GetCurrentStackArgs, opts?: pulumi.InvokeOptions): Promise<GetCurrentStackResult>;
/**
 * A collection of arguments for invoking getCurrentStack.
 */
export interface GetCurrentStackArgs {
    id?: string;
}
/**
 * A collection of values returned by getCurrentStack.
 */
export interface GetCurrentStackResult {
    readonly id: string;
}
export declare function getCurrentStackOutput(args?: GetCurrentStackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCurrentStackResult>;
/**
 * A collection of arguments for invoking getCurrentStack.
 */
export interface GetCurrentStackOutputArgs {
    id?: pulumi.Input<string>;
}
