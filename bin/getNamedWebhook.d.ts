import * as pulumi from "@pulumi/pulumi";
export declare function getNamedWebhook(args: GetNamedWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetNamedWebhookResult>;
/**
 * A collection of arguments for invoking getNamedWebhook.
 */
export interface GetNamedWebhookArgs {
    id?: string;
    webhookId: string;
}
/**
 * A collection of values returned by getNamedWebhook.
 */
export interface GetNamedWebhookResult {
    readonly enabled: boolean;
    readonly endpoint: string;
    readonly id: string;
    readonly labels: string[];
    readonly name: string;
    readonly secretHeaderKeys: string[];
    readonly spaceId: string;
    readonly webhookId: string;
}
export declare function getNamedWebhookOutput(args: GetNamedWebhookOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetNamedWebhookResult>;
/**
 * A collection of arguments for invoking getNamedWebhook.
 */
export interface GetNamedWebhookOutputArgs {
    id?: pulumi.Input<string>;
    webhookId: pulumi.Input<string>;
}
