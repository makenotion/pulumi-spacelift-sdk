import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class IdpGroupMapping extends pulumi.CustomResource {
    /**
     * Get an existing IdpGroupMapping resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdpGroupMappingState, opts?: pulumi.CustomResourceOptions): IdpGroupMapping;
    /**
     * Returns true if the given object is an instance of IdpGroupMapping.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is IdpGroupMapping;
    /**
     * Description of the user group
     */
    readonly description: pulumi.Output<string | undefined>;
    readonly idpGroupMappingId: pulumi.Output<string>;
    /**
     * Name of the user group - should be unique in one account
     */
    readonly name: pulumi.Output<string>;
    readonly policies: pulumi.Output<outputs.IdpGroupMappingPolicy[]>;
    /**
     * Create a IdpGroupMapping resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdpGroupMappingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering IdpGroupMapping resources.
 */
export interface IdpGroupMappingState {
    /**
     * Description of the user group
     */
    description?: pulumi.Input<string>;
    idpGroupMappingId?: pulumi.Input<string>;
    /**
     * Name of the user group - should be unique in one account
     */
    name?: pulumi.Input<string>;
    policies?: pulumi.Input<pulumi.Input<inputs.IdpGroupMappingPolicy>[]>;
}
/**
 * The set of arguments for constructing a IdpGroupMapping resource.
 */
export interface IdpGroupMappingArgs {
    /**
     * Description of the user group
     */
    description?: pulumi.Input<string>;
    idpGroupMappingId?: pulumi.Input<string>;
    /**
     * Name of the user group - should be unique in one account
     */
    name?: pulumi.Input<string>;
    policies: pulumi.Input<pulumi.Input<inputs.IdpGroupMappingPolicy>[]>;
}
