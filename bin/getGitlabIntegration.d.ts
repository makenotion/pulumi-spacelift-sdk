import * as pulumi from "@pulumi/pulumi";
export declare function getGitlabIntegration(args?: GetGitlabIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetGitlabIntegrationResult>;
/**
 * A collection of arguments for invoking getGitlabIntegration.
 */
export interface GetGitlabIntegrationArgs {
    id?: string;
}
/**
 * A collection of values returned by getGitlabIntegration.
 */
export interface GetGitlabIntegrationResult {
    readonly apiHost: string;
    readonly description: string;
    readonly id?: string;
    readonly isDefault: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly spaceId: string;
    readonly vcsChecks: string;
    readonly webhookSecret: string;
    readonly webhookUrl: string;
}
export declare function getGitlabIntegrationOutput(args?: GetGitlabIntegrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGitlabIntegrationResult>;
/**
 * A collection of arguments for invoking getGitlabIntegration.
 */
export interface GetGitlabIntegrationOutputArgs {
    id?: pulumi.Input<string>;
}
