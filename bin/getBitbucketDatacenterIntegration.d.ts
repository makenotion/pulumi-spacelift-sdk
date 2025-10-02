import * as pulumi from "@pulumi/pulumi";
export declare function getBitbucketDatacenterIntegration(args?: GetBitbucketDatacenterIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetBitbucketDatacenterIntegrationResult>;
/**
 * A collection of arguments for invoking getBitbucketDatacenterIntegration.
 */
export interface GetBitbucketDatacenterIntegrationArgs {
    id?: string;
}
/**
 * A collection of values returned by getBitbucketDatacenterIntegration.
 */
export interface GetBitbucketDatacenterIntegrationResult {
    readonly apiHost: string;
    readonly description: string;
    readonly id?: string;
    readonly isDefault: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly spaceId: string;
    readonly useGitCheckout: boolean;
    readonly userFacingHost: string;
    readonly username: string;
    readonly vcsChecks: string;
    readonly webhookSecret: string;
    readonly webhookUrl: string;
}
export declare function getBitbucketDatacenterIntegrationOutput(args?: GetBitbucketDatacenterIntegrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetBitbucketDatacenterIntegrationResult>;
/**
 * A collection of arguments for invoking getBitbucketDatacenterIntegration.
 */
export interface GetBitbucketDatacenterIntegrationOutputArgs {
    id?: pulumi.Input<string>;
}
