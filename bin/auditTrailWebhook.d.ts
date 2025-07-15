import * as pulumi from "@pulumi/pulumi";
export declare class AuditTrailWebhook extends pulumi.CustomResource {
    /**
     * Get an existing AuditTrailWebhook resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AuditTrailWebhookState, opts?: pulumi.CustomResourceOptions): AuditTrailWebhook;
    /**
     * Returns true if the given object is an instance of AuditTrailWebhook.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AuditTrailWebhook;
    readonly auditTrailWebhookId: pulumi.Output<string>;
    /**
     * `custom_headers` is a Map of key-value strings, that will be passed as headers with audit trail requests.
     */
    readonly customHeaders: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * `enabled` determines whether the webhook is enabled. If it is not, Spacelift will not send any requests to the endpoint.
     */
    readonly enabled: pulumi.Output<boolean>;
    /**
     * `endpoint` is the URL to which Spacelift will send POST requests about audit events.
     */
    readonly endpoint: pulumi.Output<string>;
    /**
     * `include_runs` determines whether the webhook should include information about the run that triggered the event.
     */
    readonly includeRuns: pulumi.Output<boolean | undefined>;
    /**
     * `secret` is a secret that Spacelift will send with the request. Note that once it's created, it will be just an empty
     * string in the state due to security reasons.
     */
    readonly secret: pulumi.Output<string>;
    /**
     * Create a AuditTrailWebhook resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AuditTrailWebhookArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AuditTrailWebhook resources.
 */
export interface AuditTrailWebhookState {
    auditTrailWebhookId?: pulumi.Input<string>;
    /**
     * `custom_headers` is a Map of key-value strings, that will be passed as headers with audit trail requests.
     */
    customHeaders?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * `enabled` determines whether the webhook is enabled. If it is not, Spacelift will not send any requests to the endpoint.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * `endpoint` is the URL to which Spacelift will send POST requests about audit events.
     */
    endpoint?: pulumi.Input<string>;
    /**
     * `include_runs` determines whether the webhook should include information about the run that triggered the event.
     */
    includeRuns?: pulumi.Input<boolean>;
    /**
     * `secret` is a secret that Spacelift will send with the request. Note that once it's created, it will be just an empty
     * string in the state due to security reasons.
     */
    secret?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AuditTrailWebhook resource.
 */
export interface AuditTrailWebhookArgs {
    auditTrailWebhookId?: pulumi.Input<string>;
    /**
     * `custom_headers` is a Map of key-value strings, that will be passed as headers with audit trail requests.
     */
    customHeaders?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * `enabled` determines whether the webhook is enabled. If it is not, Spacelift will not send any requests to the endpoint.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * `endpoint` is the URL to which Spacelift will send POST requests about audit events.
     */
    endpoint: pulumi.Input<string>;
    /**
     * `include_runs` determines whether the webhook should include information about the run that triggered the event.
     */
    includeRuns?: pulumi.Input<boolean>;
    /**
     * `secret` is a secret that Spacelift will send with the request. Note that once it's created, it will be just an empty
     * string in the state due to security reasons.
     */
    secret: pulumi.Input<string>;
}
