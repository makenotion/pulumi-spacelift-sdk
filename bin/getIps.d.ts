import * as pulumi from "@pulumi/pulumi";
export declare function getIps(args?: GetIpsArgs, opts?: pulumi.InvokeOptions): Promise<GetIpsResult>;
/**
 * A collection of arguments for invoking getIps.
 */
export interface GetIpsArgs {
    id?: string;
}
/**
 * A collection of values returned by getIps.
 */
export interface GetIpsResult {
    readonly cidrs: string[];
    readonly id: string;
    readonly ips: string[];
}
export declare function getIpsOutput(args?: GetIpsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetIpsResult>;
/**
 * A collection of arguments for invoking getIps.
 */
export interface GetIpsOutputArgs {
    id?: pulumi.Input<string>;
}
