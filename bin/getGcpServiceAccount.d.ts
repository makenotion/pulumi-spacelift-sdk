import * as pulumi from "@pulumi/pulumi";
export declare function getGcpServiceAccount(args?: GetGcpServiceAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetGcpServiceAccountResult>;
/**
 * A collection of arguments for invoking getGcpServiceAccount.
 */
export interface GetGcpServiceAccountArgs {
    id?: string;
    moduleId?: string;
    stackId?: string;
}
/**
 * A collection of values returned by getGcpServiceAccount.
 */
export interface GetGcpServiceAccountResult {
    readonly id: string;
    readonly moduleId?: string;
    readonly serviceAccountEmail: string;
    readonly stackId?: string;
    readonly tokenScopes: string[];
}
export declare function getGcpServiceAccountOutput(args?: GetGcpServiceAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGcpServiceAccountResult>;
/**
 * A collection of arguments for invoking getGcpServiceAccount.
 */
export interface GetGcpServiceAccountOutputArgs {
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
