import * as pulumi from "@pulumi/pulumi";
export declare class AzureIntegration extends pulumi.CustomResource {
    /**
     * Get an existing AzureIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AzureIntegrationState, opts?: pulumi.CustomResourceOptions): AzureIntegration;
    /**
     * Returns true if the given object is an instance of AzureIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is AzureIntegration;
    /**
     * Indicates whether admin consent has been performed for the AAD Application.
     */
    readonly adminConsentProvided: pulumi.Output<boolean>;
    /**
     * The URL to use to provide admin consent to the application in the customer's tenant
     */
    readonly adminConsentUrl: pulumi.Output<string>;
    /**
     * The applicationId of the Azure AD application used by the integration.
     */
    readonly applicationId: pulumi.Output<string>;
    readonly azureIntegrationId: pulumi.Output<string>;
    /**
     * The default subscription ID to use, if one isn't specified at the stack/module level
     */
    readonly defaultSubscriptionId: pulumi.Output<string | undefined>;
    /**
     * The display name for the application in Azure. This is automatically generated when the integration is created, and
     * cannot be changed without deleting and recreating the integration.
     */
    readonly displayName: pulumi.Output<string>;
    /**
     * Labels to set on the integration
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * The friendly name of the integration
     */
    readonly name: pulumi.Output<string>;
    /**
     * ID (slug) of the space the integration is in
     */
    readonly spaceId: pulumi.Output<string>;
    /**
     * The Azure AD tenant ID
     */
    readonly tenantId: pulumi.Output<string>;
    /**
     * Create a AzureIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AzureIntegrationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering AzureIntegration resources.
 */
export interface AzureIntegrationState {
    /**
     * Indicates whether admin consent has been performed for the AAD Application.
     */
    adminConsentProvided?: pulumi.Input<boolean>;
    /**
     * The URL to use to provide admin consent to the application in the customer's tenant
     */
    adminConsentUrl?: pulumi.Input<string>;
    /**
     * The applicationId of the Azure AD application used by the integration.
     */
    applicationId?: pulumi.Input<string>;
    azureIntegrationId?: pulumi.Input<string>;
    /**
     * The default subscription ID to use, if one isn't specified at the stack/module level
     */
    defaultSubscriptionId?: pulumi.Input<string>;
    /**
     * The display name for the application in Azure. This is automatically generated when the integration is created, and
     * cannot be changed without deleting and recreating the integration.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Labels to set on the integration
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The friendly name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the integration is in
     */
    spaceId?: pulumi.Input<string>;
    /**
     * The Azure AD tenant ID
     */
    tenantId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a AzureIntegration resource.
 */
export interface AzureIntegrationArgs {
    azureIntegrationId?: pulumi.Input<string>;
    /**
     * The default subscription ID to use, if one isn't specified at the stack/module level
     */
    defaultSubscriptionId?: pulumi.Input<string>;
    /**
     * Labels to set on the integration
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The friendly name of the integration
     */
    name?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the integration is in
     */
    spaceId?: pulumi.Input<string>;
    /**
     * The Azure AD tenant ID
     */
    tenantId: pulumi.Input<string>;
}
