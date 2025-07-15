import * as pulumi from "@pulumi/pulumi";
export declare function getAccount(args?: GetAccountArgs, opts?: pulumi.InvokeOptions): Promise<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountArgs {
    id?: string;
}
/**
 * A collection of values returned by getAccount.
 */
export interface GetAccountResult {
    readonly awsAccountId: string;
    readonly id: string;
    readonly name: string;
    readonly tier: string;
}
export declare function getAccountOutput(args?: GetAccountOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAccountResult>;
/**
 * A collection of arguments for invoking getAccount.
 */
export interface GetAccountOutputArgs {
    id?: pulumi.Input<string>;
}
