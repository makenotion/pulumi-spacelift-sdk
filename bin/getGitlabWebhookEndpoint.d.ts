import * as pulumi from "@pulumi/pulumi";
export declare function getGitlabWebhookEndpoint(args?: GetGitlabWebhookEndpointArgs, opts?: pulumi.InvokeOptions): Promise<GetGitlabWebhookEndpointResult>;
/**
 * A collection of arguments for invoking getGitlabWebhookEndpoint.
 */
export interface GetGitlabWebhookEndpointArgs {
    id?: string;
}
/**
 * A collection of values returned by getGitlabWebhookEndpoint.
 */
export interface GetGitlabWebhookEndpointResult {
    readonly id: string;
    readonly webhookEndpoint: string;
}
export declare function getGitlabWebhookEndpointOutput(args?: GetGitlabWebhookEndpointOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetGitlabWebhookEndpointResult>;
/**
 * A collection of arguments for invoking getGitlabWebhookEndpoint.
 */
export interface GetGitlabWebhookEndpointOutputArgs {
    id?: pulumi.Input<string>;
}
