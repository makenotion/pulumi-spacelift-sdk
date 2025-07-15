import * as pulumi from "@pulumi/pulumi";
export declare class Context extends pulumi.CustomResource {
    /**
     * Get an existing Context resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContextState, opts?: pulumi.CustomResourceOptions): Context;
    /**
     * Returns true if the given object is an instance of Context.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Context;
    /**
     * List of after-apply scripts
     */
    readonly afterApplies: pulumi.Output<string[] | undefined>;
    /**
     * List of after-destroy scripts
     */
    readonly afterDestroys: pulumi.Output<string[] | undefined>;
    /**
     * List of after-init scripts
     */
    readonly afterInits: pulumi.Output<string[] | undefined>;
    /**
     * List of after-perform scripts
     */
    readonly afterPerforms: pulumi.Output<string[] | undefined>;
    /**
     * List of after-plan scripts
     */
    readonly afterPlans: pulumi.Output<string[] | undefined>;
    /**
     * List of after-run scripts
     */
    readonly afterRuns: pulumi.Output<string[] | undefined>;
    /**
     * List of before-apply scripts
     */
    readonly beforeApplies: pulumi.Output<string[] | undefined>;
    /**
     * List of before-destroy scripts
     */
    readonly beforeDestroys: pulumi.Output<string[] | undefined>;
    /**
     * List of before-init scripts
     */
    readonly beforeInits: pulumi.Output<string[] | undefined>;
    /**
     * List of before-perform scripts
     */
    readonly beforePerforms: pulumi.Output<string[] | undefined>;
    /**
     * List of before-plan scripts
     */
    readonly beforePlans: pulumi.Output<string[] | undefined>;
    readonly contextId: pulumi.Output<string>;
    /**
     * Free-form context description for users
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The labels of the context. To leverage the `autoattach` magic label, ensure your label follows the naming convention:
     * `autoattach:<your-label-name>`
     */
    readonly labels: pulumi.Output<string[] | undefined>;
    /**
     * Name of the context - should be unique in one account
     */
    readonly name: pulumi.Output<string>;
    /**
     * ID (slug) of the space the context is in
     */
    readonly spaceId: pulumi.Output<string>;
    /**
     * Create a Context resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ContextArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Context resources.
 */
export interface ContextState {
    /**
     * List of after-apply scripts
     */
    afterApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-destroy scripts
     */
    afterDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-init scripts
     */
    afterInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-perform scripts
     */
    afterPerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-plan scripts
     */
    afterPlans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-run scripts
     */
    afterRuns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-apply scripts
     */
    beforeApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-destroy scripts
     */
    beforeDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-init scripts
     */
    beforeInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-perform scripts
     */
    beforePerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-plan scripts
     */
    beforePlans?: pulumi.Input<pulumi.Input<string>[]>;
    contextId?: pulumi.Input<string>;
    /**
     * Free-form context description for users
     */
    description?: pulumi.Input<string>;
    /**
     * The labels of the context. To leverage the `autoattach` magic label, ensure your label follows the naming convention:
     * `autoattach:<your-label-name>`
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the context - should be unique in one account
     */
    name?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the context is in
     */
    spaceId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Context resource.
 */
export interface ContextArgs {
    /**
     * List of after-apply scripts
     */
    afterApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-destroy scripts
     */
    afterDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-init scripts
     */
    afterInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-perform scripts
     */
    afterPerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-plan scripts
     */
    afterPlans?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of after-run scripts
     */
    afterRuns?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-apply scripts
     */
    beforeApplies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-destroy scripts
     */
    beforeDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-init scripts
     */
    beforeInits?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-perform scripts
     */
    beforePerforms?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * List of before-plan scripts
     */
    beforePlans?: pulumi.Input<pulumi.Input<string>[]>;
    contextId?: pulumi.Input<string>;
    /**
     * Free-form context description for users
     */
    description?: pulumi.Input<string>;
    /**
     * The labels of the context. To leverage the `autoattach` magic label, ensure your label follows the naming convention:
     * `autoattach:<your-label-name>`
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Name of the context - should be unique in one account
     */
    name?: pulumi.Input<string>;
    /**
     * ID (slug) of the space the context is in
     */
    spaceId?: pulumi.Input<string>;
}
