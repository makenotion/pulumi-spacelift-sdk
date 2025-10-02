import * as pulumi from "@pulumi/pulumi";
export declare function getRole(args?: GetRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleResult>;
/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleArgs {
    id?: string;
    roleId?: string;
    slug?: string;
}
/**
 * A collection of values returned by getRole.
 */
export interface GetRoleResult {
    readonly actions: string[];
    readonly description: string;
    readonly id: string;
    readonly isSystem: boolean;
    readonly name: string;
    readonly roleId: string;
    readonly slug: string;
}
export declare function getRoleOutput(args?: GetRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleResult>;
/**
 * A collection of arguments for invoking getRole.
 */
export interface GetRoleOutputArgs {
    id?: pulumi.Input<string>;
    roleId?: pulumi.Input<string>;
    slug?: pulumi.Input<string>;
}
