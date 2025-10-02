import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class User extends pulumi.CustomResource {
    /**
     * Get an existing User resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserState, opts?: pulumi.CustomResourceOptions): User;
    /**
     * Returns true if the given object is an instance of User.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is User;
    /**
     * `invitation_email` will be used to send an invitation to the specified email address. This property is required when
     * creating a new user. This property is optional when importing an existing user.
     */
    readonly invitationEmail: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    readonly policies: pulumi.Output<outputs.UserPolicy[] | undefined>;
    readonly userId: pulumi.Output<string>;
    /**
     * Username of the user
     */
    readonly username: pulumi.Output<string>;
    /**
     * Create a User resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering User resources.
 */
export interface UserState {
    /**
     * `invitation_email` will be used to send an invitation to the specified email address. This property is required when
     * creating a new user. This property is optional when importing an existing user.
     */
    invitationEmail?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    policies?: pulumi.Input<pulumi.Input<inputs.UserPolicy>[]>;
    userId?: pulumi.Input<string>;
    /**
     * Username of the user
     */
    username?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a User resource.
 */
export interface UserArgs {
    /**
     * `invitation_email` will be used to send an invitation to the specified email address. This property is required when
     * creating a new user. This property is optional when importing an existing user.
     */
    invitationEmail?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    policies?: pulumi.Input<pulumi.Input<inputs.UserPolicy>[]>;
    userId?: pulumi.Input<string>;
    /**
     * Username of the user
     */
    username: pulumi.Input<string>;
}
