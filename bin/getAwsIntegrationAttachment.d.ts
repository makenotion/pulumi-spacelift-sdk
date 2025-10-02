import * as pulumi from "@pulumi/pulumi";
export declare function getAwsIntegrationAttachment(args: GetAwsIntegrationAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsIntegrationAttachmentResult>;
/**
 * A collection of arguments for invoking getAwsIntegrationAttachment.
 */
export interface GetAwsIntegrationAttachmentArgs {
    id?: string;
    integrationId: string;
    moduleId?: string;
    stackId?: string;
}
/**
 * A collection of values returned by getAwsIntegrationAttachment.
 */
export interface GetAwsIntegrationAttachmentResult {
    readonly attachmentId: string;
    readonly id: string;
    readonly integrationId: string;
    readonly moduleId?: string;
    readonly read: boolean;
    readonly stackId?: string;
    readonly write: boolean;
}
export declare function getAwsIntegrationAttachmentOutput(args: GetAwsIntegrationAttachmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAwsIntegrationAttachmentResult>;
/**
 * A collection of arguments for invoking getAwsIntegrationAttachment.
 */
export interface GetAwsIntegrationAttachmentOutputArgs {
    id?: pulumi.Input<string>;
    integrationId: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
