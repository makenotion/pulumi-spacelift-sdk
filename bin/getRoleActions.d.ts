import * as pulumi from "@pulumi/pulumi";
export declare function getRoleActions(args?: GetRoleActionsArgs, opts?: pulumi.InvokeOptions): Promise<GetRoleActionsResult>;
/**
 * A collection of arguments for invoking getRoleActions.
 */
export interface GetRoleActionsArgs {
    id?: string;
}
/**
 * A collection of values returned by getRoleActions.
 */
export interface GetRoleActionsResult {
    readonly actions: string[];
    readonly id: string;
}
export declare function getRoleActionsOutput(args?: GetRoleActionsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRoleActionsResult>;
/**
 * A collection of arguments for invoking getRoleActions.
 */
export interface GetRoleActionsOutputArgs {
    id?: pulumi.Input<string>;
}
