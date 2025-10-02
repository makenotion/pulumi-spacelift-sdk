import * as pulumi from "@pulumi/pulumi";
export declare function getBitbucketCloudIntegration(args?: GetBitbucketCloudIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetBitbucketCloudIntegrationResult>;
/**
 * A collection of arguments for invoking getBitbucketCloudIntegration.
 */
export interface GetBitbucketCloudIntegrationArgs {
    id?: string;
}
/**
 * A collection of values returned by getBitbucketCloudIntegration.
 */
export interface GetBitbucketCloudIntegrationResult {
    readonly description: string;
    readonly id?: string;
    readonly isDefault: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly spaceId: string;
    readonly username: string;
    readonly vcsChecks: string;
    readonly webhookUrl: string;
}
export declare function getBitbucketCloudIntegrationOutput(args?: GetBitbucketCloudIntegrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBitbucketCloudIntegrationResult>;
/**
 * A collection of arguments for invoking getBitbucketCloudIntegration.
 */
export interface GetBitbucketCloudIntegrationOutputArgs {
    id?: pulumi.Input<string>;
}
