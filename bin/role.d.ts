import * as pulumi from "@pulumi/pulumi";
export declare class Role extends pulumi.CustomResource {
    /**
     * Get an existing Role resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleState, opts?: pulumi.CustomResourceOptions): Role;
    /**
     * Returns true if the given object is an instance of Role.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Role;
    /**
     * List of actions (permissions) associated with the role. For example: `SPACE_READ`, `SPACE_WRITE`, `SPACE_ADMIN`,
     * `RUN_TRIGGER`. All possible actions can be listed using the `spacelift-terraform-provider.getRoleActions` data source.
     */
    readonly actions: pulumi.Output<string[]>;
    /**
     * Human-readable, free-form description of the role
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * Human-readable, free-form name of the role
     */
    readonly name: pulumi.Output<string>;
    /**
     * URL-friendly unique identifier of the role, generated from the name. Example: `space-admin`.
     */
    readonly slug: pulumi.Output<string>;
    /**
     * Create a Role resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Role resources.
 */
export interface RoleState {
    /**
     * List of actions (permissions) associated with the role. For example: `SPACE_READ`, `SPACE_WRITE`, `SPACE_ADMIN`,
     * `RUN_TRIGGER`. All possible actions can be listed using the `spacelift-terraform-provider.getRoleActions` data source.
     */
    actions?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Human-readable, free-form description of the role
     */
    description?: pulumi.Input<string>;
    /**
     * Human-readable, free-form name of the role
     */
    name?: pulumi.Input<string>;
    /**
     * URL-friendly unique identifier of the role, generated from the name. Example: `space-admin`.
     */
    slug?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Role resource.
 */
export interface RoleArgs {
    /**
     * List of actions (permissions) associated with the role. For example: `SPACE_READ`, `SPACE_WRITE`, `SPACE_ADMIN`,
     * `RUN_TRIGGER`. All possible actions can be listed using the `spacelift-terraform-provider.getRoleActions` data source.
     */
    actions: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Human-readable, free-form description of the role
     */
    description?: pulumi.Input<string>;
    /**
     * Human-readable, free-form name of the role
     */
    name?: pulumi.Input<string>;
}
