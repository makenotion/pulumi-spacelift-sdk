import * as pulumi from "@pulumi/pulumi";
export declare class NamedWebhookSecretHeader extends pulumi.CustomResource {
    /**
     * Get an existing NamedWebhookSecretHeader resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamedWebhookSecretHeaderState, opts?: pulumi.CustomResourceOptions): NamedWebhookSecretHeader;
    /**
     * Returns true if the given object is an instance of NamedWebhookSecretHeader.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NamedWebhookSecretHeader;
    /**
     * key for the header
     */
    readonly key: pulumi.Output<string>;
    readonly namedWebhookSecretHeaderId: pulumi.Output<string>;
    /**
     * value for the header
     */
    readonly value: pulumi.Output<string>;
    /**
     * ID of the stack on which the environment variable is defined
     */
    readonly webhookId: pulumi.Output<string>;
    /**
     * Create a NamedWebhookSecretHeader resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamedWebhookSecretHeaderArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NamedWebhookSecretHeader resources.
 */
export interface NamedWebhookSecretHeaderState {
    /**
     * key for the header
     */
    key?: pulumi.Input<string>;
    namedWebhookSecretHeaderId?: pulumi.Input<string>;
    /**
     * value for the header
     */
    value?: pulumi.Input<string>;
    /**
     * ID of the stack on which the environment variable is defined
     */
    webhookId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NamedWebhookSecretHeader resource.
 */
export interface NamedWebhookSecretHeaderArgs {
    /**
     * key for the header
     */
    key: pulumi.Input<string>;
    namedWebhookSecretHeaderId?: pulumi.Input<string>;
    /**
     * value for the header
     */
    value: pulumi.Input<string>;
    /**
     * ID of the stack on which the environment variable is defined
     */
    webhookId: pulumi.Input<string>;
}
