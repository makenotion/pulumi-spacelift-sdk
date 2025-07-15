import * as pulumi from "@pulumi/pulumi";
export declare function getAwsRole(args?: GetAwsRoleArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsRoleResult>;
/**
 * A collection of arguments for invoking getAwsRole.
 */
export interface GetAwsRoleArgs {
    id?: string;
    moduleId?: string;
    stackId?: string;
}
/**
 * A collection of values returned by getAwsRole.
 */
export interface GetAwsRoleResult {
    readonly durationSeconds: number;
    readonly externalId: string;
    readonly generateCredentialsInWorker: boolean;
    readonly id: string;
    readonly moduleId?: string;
    readonly region: string;
    readonly roleArn: string;
    readonly stackId?: string;
}
export declare function getAwsRoleOutput(args?: GetAwsRoleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAwsRoleResult>;
/**
 * A collection of arguments for invoking getAwsRole.
 */
export interface GetAwsRoleOutputArgs {
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
