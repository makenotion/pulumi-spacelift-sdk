import * as pulumi from "@pulumi/pulumi";
export declare function getAzureIntegration(args?: GetAzureIntegrationArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureIntegrationResult>;
/**
 * A collection of arguments for invoking getAzureIntegration.
 */
export interface GetAzureIntegrationArgs {
    id?: string;
    integrationId?: string;
    name?: string;
}
/**
 * A collection of values returned by getAzureIntegration.
 */
export interface GetAzureIntegrationResult {
    readonly adminConsentProvided: boolean;
    readonly adminConsentUrl: string;
    readonly applicationId: string;
    readonly defaultSubscriptionId: string;
    readonly displayName: string;
    readonly id: string;
    readonly integrationId: string;
    readonly labels: string[];
    readonly name: string;
    readonly spaceId: string;
    readonly tenantId: string;
}
export declare function getAzureIntegrationOutput(args?: GetAzureIntegrationOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureIntegrationResult>;
/**
 * A collection of arguments for invoking getAzureIntegration.
 */
export interface GetAzureIntegrationOutputArgs {
    id?: pulumi.Input<string>;
    integrationId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
}
