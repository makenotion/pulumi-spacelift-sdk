import * as pulumi from "@pulumi/pulumi";
export declare function getAwsIntegrationAttachmentExternalId(args: GetAwsIntegrationAttachmentExternalIdArgs, opts?: pulumi.InvokeOptions): Promise<GetAwsIntegrationAttachmentExternalIdResult>;
/**
 * A collection of arguments for invoking getAwsIntegrationAttachmentExternalId.
 */
export interface GetAwsIntegrationAttachmentExternalIdArgs {
    id?: string;
    integrationId: string;
    moduleId?: string;
    read?: boolean;
    stackId?: string;
    write?: boolean;
}
/**
 * A collection of values returned by getAwsIntegrationAttachmentExternalId.
 */
export interface GetAwsIntegrationAttachmentExternalIdResult {
    readonly assumeRolePolicyStatement: string;
    readonly externalId: string;
    readonly id: string;
    readonly integrationId: string;
    readonly moduleId?: string;
    readonly read?: boolean;
    readonly stackId?: string;
    readonly write?: boolean;
}
export declare function getAwsIntegrationAttachmentExternalIdOutput(args: GetAwsIntegrationAttachmentExternalIdOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAwsIntegrationAttachmentExternalIdResult>;
/**
 * A collection of arguments for invoking getAwsIntegrationAttachmentExternalId.
 */
export interface GetAwsIntegrationAttachmentExternalIdOutputArgs {
    id?: pulumi.Input<string>;
    integrationId: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    read?: pulumi.Input<boolean>;
    stackId?: pulumi.Input<string>;
    write?: pulumi.Input<boolean>;
}
