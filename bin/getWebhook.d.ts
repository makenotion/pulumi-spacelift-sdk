import * as pulumi from "@pulumi/pulumi";
export declare function getWebhook(args: GetWebhookArgs, opts?: pulumi.InvokeOptions): Promise<GetWebhookResult>;
/**
 * A collection of arguments for invoking getWebhook.
 */
export interface GetWebhookArgs {
    id?: string;
    moduleId?: string;
    stackId?: string;
    webhookId: string;
}
/**
 * A collection of values returned by getWebhook.
 */
export interface GetWebhookResult {
    readonly enabled: boolean;
    readonly endpoint: string;
    readonly id: string;
    readonly moduleId?: string;
    readonly stackId?: string;
    readonly webhookId: string;
}
export declare function getWebhookOutput(args: GetWebhookOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetWebhookResult>;
/**
 * A collection of arguments for invoking getWebhook.
 */
export interface GetWebhookOutputArgs {
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
    webhookId: pulumi.Input<string>;
}
