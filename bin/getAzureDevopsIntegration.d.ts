import * as pulumi from "@pulumi/pulumi";
export declare function getAzureDevopsIntegration(args?: GetAzureDevopsIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureDevopsIntegrationResult>;
/**
 * A collection of arguments for invoking getAzureDevopsIntegration.
 */
export interface GetAzureDevopsIntegrationArgs {
    id?: string;
}
/**
 * A collection of values returned by getAzureDevopsIntegration.
 */
export interface GetAzureDevopsIntegrationResult {
    readonly description: string;
    readonly id?: string;
    readonly isDefault: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly organizationUrl: string;
    readonly spaceId: string;
    readonly vcsChecks: string;
    readonly webhookPassword: string;
    readonly webhookUrl: string;
}
export declare function getAzureDevopsIntegrationOutput(args?: GetAzureDevopsIntegrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureDevopsIntegrationResult>;
/**
 * A collection of arguments for invoking getAzureDevopsIntegration.
 */
export interface GetAzureDevopsIntegrationOutputArgs {
    id?: pulumi.Input<string>;
}
