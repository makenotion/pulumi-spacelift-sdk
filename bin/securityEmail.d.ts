import * as pulumi from "@pulumi/pulumi";
export declare class SecurityEmail extends pulumi.CustomResource {
    /**
     * Get an existing SecurityEmail resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecurityEmailState, opts?: pulumi.CustomResourceOptions): SecurityEmail;
    /**
     * Returns true if the given object is an instance of SecurityEmail.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SecurityEmail;
    /**
     * Email address to which the security notifications are sent
     */
    readonly email: pulumi.Output<string>;
    readonly securityEmailId: pulumi.Output<string>;
    /**
     * Create a SecurityEmail resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SecurityEmailArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SecurityEmail resources.
 */
export interface SecurityEmailState {
    /**
     * Email address to which the security notifications are sent
     */
    email?: pulumi.Input<string>;
    securityEmailId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SecurityEmail resource.
 */
export interface SecurityEmailArgs {
    /**
     * Email address to which the security notifications are sent
     */
    email: pulumi.Input<string>;
    securityEmailId?: pulumi.Input<string>;
}
