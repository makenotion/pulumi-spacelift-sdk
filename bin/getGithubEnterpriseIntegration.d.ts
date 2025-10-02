import * as pulumi from "@pulumi/pulumi";
export declare function getGithubEnterpriseIntegration(args?: GetGithubEnterpriseIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetGithubEnterpriseIntegrationResult>;
/**
 * A collection of arguments for invoking getGithubEnterpriseIntegration.
 */
export interface GetGithubEnterpriseIntegrationArgs {
    id?: string;
}
/**
 * A collection of values returned by getGithubEnterpriseIntegration.
 */
export interface GetGithubEnterpriseIntegrationResult {
    readonly apiHost: string;
    readonly appId: string;
    readonly description: string;
    readonly id?: string;
    readonly isDefault: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly spaceId: string;
    readonly useGitCheckout: boolean;
    readonly vcsChecks: string;
    readonly webhookSecret: string;
    readonly webhookUrl: string;
}
export declare function getGithubEnterpriseIntegrationOutput(args?: GetGithubEnterpriseIntegrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGithubEnterpriseIntegrationResult>;
/**
 * A collection of arguments for invoking getGithubEnterpriseIntegration.
 */
export interface GetGithubEnterpriseIntegrationOutputArgs {
    id?: pulumi.Input<string>;
}
