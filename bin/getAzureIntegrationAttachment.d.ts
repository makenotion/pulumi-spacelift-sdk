import * as pulumi from "@pulumi/pulumi";
export declare function getAzureIntegrationAttachment(args: GetAzureIntegrationAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAzureIntegrationAttachmentResult>;
/**
 * A collection of arguments for invoking getAzureIntegrationAttachment.
 */
export interface GetAzureIntegrationAttachmentArgs {
    id?: string;
    integrationId: string;
    moduleId?: string;
    stackId?: string;
}
/**
 * A collection of values returned by getAzureIntegrationAttachment.
 */
export interface GetAzureIntegrationAttachmentResult {
    readonly attachmentId: string;
    readonly id: string;
    readonly integrationId: string;
    readonly moduleId?: string;
    readonly read: boolean;
    readonly stackId?: string;
    readonly subscriptionId: string;
    readonly write: boolean;
}
export declare function getAzureIntegrationAttachmentOutput(args: GetAzureIntegrationAttachmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAzureIntegrationAttachmentResult>;
/**
 * A collection of arguments for invoking getAzureIntegrationAttachment.
 */
export interface GetAzureIntegrationAttachmentOutputArgs {
    id?: pulumi.Input<string>;
    integrationId: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
