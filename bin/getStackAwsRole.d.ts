import * as pulumi from "@pulumi/pulumi";
export declare function getStackAwsRole(args?: GetStackAwsRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetStackAwsRoleResult>;
/**
 * A collection of arguments for invoking getStackAwsRole.
 */
export interface GetStackAwsRoleArgs {
    id?: string;
    moduleId?: string;
    stackId?: string;
}
/**
 * A collection of values returned by getStackAwsRole.
 */
export interface GetStackAwsRoleResult {
    readonly durationSeconds: number;
    readonly externalId: string;
    readonly generateCredentialsInWorker: boolean;
    readonly id: string;
    readonly moduleId?: string;
    readonly region: string;
    readonly roleArn: string;
    readonly stackId?: string;
}
export declare function getStackAwsRoleOutput(args?: GetStackAwsRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStackAwsRoleResult>;
/**
 * A collection of arguments for invoking getStackAwsRole.
 */
export interface GetStackAwsRoleOutputArgs {
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
