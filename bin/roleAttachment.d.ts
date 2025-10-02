import * as pulumi from "@pulumi/pulumi";
export declare class RoleAttachment extends pulumi.CustomResource {
    /**
     * Get an existing RoleAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RoleAttachmentState, opts?: pulumi.CustomResourceOptions): RoleAttachment;
    /**
     * Returns true if the given object is an instance of RoleAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is RoleAttachment;
    /**
     * ID of the API key (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    readonly apiKeyId: pulumi.Output<string | undefined>;
    /**
     * ID of the IdP Group Mapping (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    readonly idpGroupMappingId: pulumi.Output<string | undefined>;
    readonly roleAttachmentId: pulumi.Output<string>;
    /**
     * ID of the role (ULID format) to attach to the API key, IdP Group or to the user. For example:
     * `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    readonly roleId: pulumi.Output<string>;
    /**
     * ID of the space where the role attachment should be created
     */
    readonly spaceId: pulumi.Output<string>;
    /**
     * ID of the user (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    readonly userId: pulumi.Output<string | undefined>;
    /**
     * Create a RoleAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RoleAttachmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering RoleAttachment resources.
 */
export interface RoleAttachmentState {
    /**
     * ID of the API key (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    apiKeyId?: pulumi.Input<string>;
    /**
     * ID of the IdP Group Mapping (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    idpGroupMappingId?: pulumi.Input<string>;
    roleAttachmentId?: pulumi.Input<string>;
    /**
     * ID of the role (ULID format) to attach to the API key, IdP Group or to the user. For example:
     * `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    roleId?: pulumi.Input<string>;
    /**
     * ID of the space where the role attachment should be created
     */
    spaceId?: pulumi.Input<string>;
    /**
     * ID of the user (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    userId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a RoleAttachment resource.
 */
export interface RoleAttachmentArgs {
    /**
     * ID of the API key (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    apiKeyId?: pulumi.Input<string>;
    /**
     * ID of the IdP Group Mapping (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    idpGroupMappingId?: pulumi.Input<string>;
    roleAttachmentId?: pulumi.Input<string>;
    /**
     * ID of the role (ULID format) to attach to the API key, IdP Group or to the user. For example:
     * `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    roleId: pulumi.Input<string>;
    /**
     * ID of the space where the role attachment should be created
     */
    spaceId: pulumi.Input<string>;
    /**
     * ID of the user (ULID format) to attach to the role. For example: `01F8Z5K4Y3D1G2H3J4K5L6M7N8`.
     */
    userId?: pulumi.Input<string>;
}
