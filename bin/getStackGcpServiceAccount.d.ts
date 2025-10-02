import * as pulumi from "@pulumi/pulumi";
export declare function getStackGcpServiceAccount(args?: GetStackGcpServiceAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetStackGcpServiceAccountResult>;
/**
 * A collection of arguments for invoking getStackGcpServiceAccount.
 */
export interface GetStackGcpServiceAccountArgs {
    id?: string;
    moduleId?: string;
    stackId?: string;
}
/**
 * A collection of values returned by getStackGcpServiceAccount.
 */
export interface GetStackGcpServiceAccountResult {
    readonly id: string;
    readonly moduleId?: string;
    readonly serviceAccountEmail: string;
    readonly stackId?: string;
    readonly tokenScopes: string[];
}
export declare function getStackGcpServiceAccountOutput(args?: GetStackGcpServiceAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStackGcpServiceAccountResult>;
/**
 * A collection of arguments for invoking getStackGcpServiceAccount.
 */
export interface GetStackGcpServiceAccountOutputArgs {
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
