import * as pulumi from "@pulumi/pulumi";
export declare class NamedWebhook extends pulumi.CustomResource {
    /**
     * Get an existing NamedWebhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamedWebhookState, opts?: pulumi.CustomResourceOptions): NamedWebhook;
    /**
     * Returns true if the given object is an instance of NamedWebhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is NamedWebhook;
    /**
     * enables or disables sending webhooks.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * endpoint to send the requests to
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * labels for the webhook to use when referring in policies or filtering them
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * the name for the webhook which will also be used to generate the id
     */
    readonly name: pulumi.Output<string>;
    readonly namedWebhookId: pulumi.Output<string>;
    /**
     * secret used to sign each request so you're able to verify that the request comes from us. Defaults to an empty value.
     * Note that once it's created, it will be just an empty string in the state due to security reasons.
     */
    readonly secret: pulumi.Output<string | undefined>;
    /**
     * ID of the space the webhook is in
     */
    readonly spaceId: pulumi.Output<string>;
    /**
     * Create a NamedWebhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NamedWebhookArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering NamedWebhook resources.
 */
export interface NamedWebhookState {
    /**
     * enables or disables sending webhooks.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * endpoint to send the requests to
     */
    endpoint?: pulumi.Input<string>;
    /**
     * labels for the webhook to use when referring in policies or filtering them
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * the name for the webhook which will also be used to generate the id
     */
    name?: pulumi.Input<string>;
    namedWebhookId?: pulumi.Input<string>;
    /**
     * secret used to sign each request so you're able to verify that the request comes from us. Defaults to an empty value.
     * Note that once it's created, it will be just an empty string in the state due to security reasons.
     */
    secret?: pulumi.Input<string>;
    /**
     * ID of the space the webhook is in
     */
    spaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a NamedWebhook resource.
 */
export interface NamedWebhookArgs {
    /**
     * enables or disables sending webhooks.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * endpoint to send the requests to
     */
    endpoint: pulumi.Input<string>;
    /**
     * labels for the webhook to use when referring in policies or filtering them
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * the name for the webhook which will also be used to generate the id
     */
    name?: pulumi.Input<string>;
    namedWebhookId?: pulumi.Input<string>;
    /**
     * secret used to sign each request so you're able to verify that the request comes from us. Defaults to an empty value.
     * Note that once it's created, it will be just an empty string in the state due to security reasons.
     */
    secret?: pulumi.Input<string>;
    /**
     * ID of the space the webhook is in
     */
    spaceId: pulumi.Input<string>;
}
