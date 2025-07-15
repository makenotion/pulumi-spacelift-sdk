import * as pulumi from "@pulumi/pulumi";
export declare function getAwsIntegration(args?: GetAwsIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsIntegrationResult>;
/**
 * A collection of arguments for invoking getAwsIntegration.
 */
export interface GetAwsIntegrationArgs {
    id?: string;
    integrationId?: string;
    name?: string;
    region?: string;
}
/**
 * A collection of values returned by getAwsIntegration.
 */
export interface GetAwsIntegrationResult {
    readonly durationSeconds: number;
    readonly externalId: string;
    readonly generateCredentialsInWorker: boolean;
    readonly id: string;
    readonly integrationId: string;
    readonly labels: string[];
    readonly name: string;
    readonly region: string;
    readonly roleArn: string;
    readonly spaceId: string;
}
export declare function getAwsIntegrationOutput(args?: GetAwsIntegrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAwsIntegrationResult>;
/**
 * A collection of arguments for invoking getAwsIntegration.
 */
export interface GetAwsIntegrationOutputArgs {
    id?: pulumi.Input<string>;
    integrationId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    region?: pulumi.Input<string>;
}
