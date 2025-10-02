import * as pulumi from "@pulumi/pulumi";
export declare function getContextAttachment(args: GetContextAttachmentArgs, opts?: pulumi.InvokeOptions): Promise<GetContextAttachmentResult>;
/**
 * A collection of arguments for invoking getContextAttachment.
 */
export interface GetContextAttachmentArgs {
    contextId: string;
    id?: string;
    moduleId?: string;
    stackId?: string;
}
/**
 * A collection of values returned by getContextAttachment.
 */
export interface GetContextAttachmentResult {
    readonly contextId: string;
    readonly id: string;
    readonly moduleId?: string;
    readonly priority: number;
    readonly stackId?: string;
}
export declare function getContextAttachmentOutput(args: GetContextAttachmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContextAttachmentResult>;
/**
 * A collection of arguments for invoking getContextAttachment.
 */
export interface GetContextAttachmentOutputArgs {
    contextId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
