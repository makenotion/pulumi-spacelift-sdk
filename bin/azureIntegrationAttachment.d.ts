import * as pulumi from "@pulumi/pulumi";
export declare class AzureIntegrationAttachment extends pulumi.CustomResource {
    /**
     * Get an existing AzureIntegrationAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AzureIntegrationAttachmentState, opts?: pulumi.CustomResourceOptions): AzureIntegrationAttachment;
    /**
     * Returns true if the given object is an instance of AzureIntegrationAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AzureIntegrationAttachment;
    /**
     * Internal ID of the attachment entity
     */
    readonly attachmentId: pulumi.Output<string>;
    readonly azureIntegrationAttachmentId: pulumi.Output<string>;
    /**
     * ID of the integration to attach
     */
    readonly integrationId: pulumi.Output<string>;
    /**
     * ID of the module to attach the integration to
     */
    readonly moduleId: pulumi.Output<string | undefined>;
    /**
     * Indicates whether this attachment is used for read operations. Defaults to `true`.
     */
    readonly read: pulumi.Output<boolean | undefined>;
    /**
     * ID of the stack to attach the integration to
     */
    readonly stackId: pulumi.Output<string | undefined>;
    /**
     * Contains the Azure subscription ID to use with this Stack. Overrides the default subscription ID set at the integration
     * level.
     */
    readonly subscriptionId: pulumi.Output<string | undefined>;
    /**
     * Indicates whether this attachment is used for write operations. Defaults to `true`.
     */
    readonly write: pulumi.Output<boolean | undefined>;
    /**
     * Create a AzureIntegrationAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureIntegrationAttachmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AzureIntegrationAttachment resources.
 */
export interface AzureIntegrationAttachmentState {
    /**
     * Internal ID of the attachment entity
     */
    attachmentId?: pulumi.Input<string>;
    azureIntegrationAttachmentId?: pulumi.Input<string>;
    /**
     * ID of the integration to attach
     */
    integrationId?: pulumi.Input<string>;
    /**
     * ID of the module to attach the integration to
     */
    moduleId?: pulumi.Input<string>;
    /**
     * Indicates whether this attachment is used for read operations. Defaults to `true`.
     */
    read?: pulumi.Input<boolean>;
    /**
     * ID of the stack to attach the integration to
     */
    stackId?: pulumi.Input<string>;
    /**
     * Contains the Azure subscription ID to use with this Stack. Overrides the default subscription ID set at the integration
     * level.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Indicates whether this attachment is used for write operations. Defaults to `true`.
     */
    write?: pulumi.Input<boolean>;
}
/**
 * The set of arguments for constructing a AzureIntegrationAttachment resource.
 */
export interface AzureIntegrationAttachmentArgs {
    azureIntegrationAttachmentId?: pulumi.Input<string>;
    /**
     * ID of the integration to attach
     */
    integrationId: pulumi.Input<string>;
    /**
     * ID of the module to attach the integration to
     */
    moduleId?: pulumi.Input<string>;
    /**
     * Indicates whether this attachment is used for read operations. Defaults to `true`.
     */
    read?: pulumi.Input<boolean>;
    /**
     * ID of the stack to attach the integration to
     */
    stackId?: pulumi.Input<string>;
    /**
     * Contains the Azure subscription ID to use with this Stack. Overrides the default subscription ID set at the integration
     * level.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Indicates whether this attachment is used for write operations. Defaults to `true`.
     */
    write?: pulumi.Input<boolean>;
}
