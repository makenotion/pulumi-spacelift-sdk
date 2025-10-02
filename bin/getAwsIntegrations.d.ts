import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getAwsIntegrations(args?: GetAwsIntegrationsArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsIntegrationsResult>;
/**
 * A collection of arguments for invoking getAwsIntegrations.
 */
export interface GetAwsIntegrationsArgs {
    id?: string;
    labels?: string[];
}
/**
 * A collection of values returned by getAwsIntegrations.
 */
export interface GetAwsIntegrationsResult {
    readonly id: string;
    readonly integrations: outputs.GetAwsIntegrationsIntegration[];
    readonly labels?: string[];
}
export declare function getAwsIntegrationsOutput(args?: GetAwsIntegrationsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAwsIntegrationsResult>;
/**
 * A collection of arguments for invoking getAwsIntegrations.
 */
export interface GetAwsIntegrationsOutputArgs {
    id?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
}
