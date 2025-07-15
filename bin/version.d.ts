import * as pulumi from "@pulumi/pulumi";
export declare class Version extends pulumi.CustomResource {
    /**
     * Get an existing Version resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VersionState, opts?: pulumi.CustomResourceOptions): Version;
    /**
     * Returns true if the given object is an instance of Version.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Version;
    /**
     * The commit SHA for which to trigger a version.
     */
    readonly commitSha: pulumi.Output<string | undefined>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    readonly keepers: pulumi.Output<{
        [key: string]: string;
    } | undefined>;
    /**
     * ID of the module on which the version creation is to be triggered.
     */
    readonly moduleId: pulumi.Output<string>;
    /**
     * A semantic version number to set for the triggered version, example: 0.11.2
     */
    readonly versionNumber: pulumi.Output<string | undefined>;
    /**
     * Create a Version resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VersionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Version resources.
 */
export interface VersionState {
    /**
     * The commit SHA for which to trigger a version.
     */
    commitSha?: pulumi.Input<string>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    keepers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * ID of the module on which the version creation is to be triggered.
     */
    moduleId?: pulumi.Input<string>;
    /**
     * A semantic version number to set for the triggered version, example: 0.11.2
     */
    versionNumber?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Version resource.
 */
export interface VersionArgs {
    /**
     * The commit SHA for which to trigger a version.
     */
    commitSha?: pulumi.Input<string>;
    /**
     * Arbitrary map of values that, when changed, will trigger recreation of the resource.
     */
    keepers?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * ID of the module on which the version creation is to be triggered.
     */
    moduleId: pulumi.Input<string>;
    /**
     * A semantic version number to set for the triggered version, example: 0.11.2
     */
    versionNumber?: pulumi.Input<string>;
}
