import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getAzureIntegrations(args?: GetAzureIntegrationsArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureIntegrationsResult>;
/**
 * A collection of arguments for invoking getAzureIntegrations.
 */
export interface GetAzureIntegrationsArgs {
    id?: string;
}
/**
 * A collection of values returned by getAzureIntegrations.
 */
export interface GetAzureIntegrationsResult {
    readonly id: string;
    readonly integrations: outputs.GetAzureIntegrationsIntegration[];
}
export declare function getAzureIntegrationsOutput(args?: GetAzureIntegrationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureIntegrationsResult>;
/**
 * A collection of arguments for invoking getAzureIntegrations.
 */
export interface GetAzureIntegrationsOutputArgs {
    id?: pulumi.Input<string>;
}
