import * as pulumi from "@pulumi/pulumi";
export declare class AwsIntegration extends pulumi.CustomResource {
    /**
     * Get an existing AwsIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AwsIntegrationState, opts?: pulumi.CustomResourceOptions): AwsIntegration;
    /**
     * Returns true if the given object is an instance of AwsIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AwsIntegration;
    readonly awsIntegrationId: pulumi.Output<string>;
    /**
     * Duration in seconds for which the assumed role credentials should be valid. Defaults to `900`.
     */
    readonly durationSeconds: pulumi.Output<number | undefined>;
    /**
     * Custom external ID (works only for private workers).
     */
    readonly externalId: pulumi.Output<string | undefined>;
    /**
     * Generate AWS credentials in the private worker. Defaults to `false`.
     */
    readonly generateCredentialsInWorker: pulumi.Output<boolean | undefined>;
    /**
     * Labels to set on the integration
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * The friendly name of the integration
     */
    readonly name: pulumi.Output<string>;
    /**
     * AWS region to select a regional AWS STS endpoint.
     */
    readonly region: pulumi.Output<string | undefined>;
    /**
     * ARN of the AWS IAM role to attach
     */
    readonly roleArn: pulumi.Output<string>;
    /**
     * ID (slug) of the space the integration is in
     */
    readonly spaceId: pulumi.Output<string>;
    /**
     * Create a AwsIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwsIntegrationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AwsIntegration resources.
 */
export interface AwsIntegrationState {
    awsIntegrationId?: pulumi.Input<string>;
    /**
     * Duration in seconds for which the assumed role credentials should be valid. Defaults to `900`.
     */
    durationSeconds?: pulumi.Input<number>;
    /**
     * Custom external ID (works only for private workers).
     */
    externalId?: pulumi.Input<string>;
    /**
     * Generate AWS credentials in the private worker. Defaults to `false`.
     */
    generateCredentialsInWorker?: pulumi.Input<boolean>;
    /**
     * Labels to set on the integration
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The friendly name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * AWS region to select a regional AWS STS endpoint.
     */
    region?: pulumi.Input<string>;
    /**
     * ARN of the AWS IAM role to attach
     */
    roleArn?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the integration is in
     */
    spaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AwsIntegration resource.
 */
export interface AwsIntegrationArgs {
    awsIntegrationId?: pulumi.Input<string>;
    /**
     * Duration in seconds for which the assumed role credentials should be valid. Defaults to `900`.
     */
    durationSeconds?: pulumi.Input<number>;
    /**
     * Custom external ID (works only for private workers).
     */
    externalId?: pulumi.Input<string>;
    /**
     * Generate AWS credentials in the private worker. Defaults to `false`.
     */
    generateCredentialsInWorker?: pulumi.Input<boolean>;
    /**
     * Labels to set on the integration
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The friendly name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * AWS region to select a regional AWS STS endpoint.
     */
    region?: pulumi.Input<string>;
    /**
     * ARN of the AWS IAM role to attach
     */
    roleArn: pulumi.Input<string>;
    /**
     * ID (slug) of the space the integration is in
     */
    spaceId?: pulumi.Input<string>;
}
