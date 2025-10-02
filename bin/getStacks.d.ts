import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getStacks(args?: GetStacksArgs, opts?: pulumi.InvokeOptions): Promise<GetStacksResult>;
/**
 * A collection of arguments for invoking getStacks.
 */
export interface GetStacksArgs {
    administrative?: inputs.GetStacksAdministrative;
    branch?: inputs.GetStacksBranch;
    commit?: inputs.GetStacksCommit;
    id?: string;
    labels?: inputs.GetStacksLabel[];
    locked?: inputs.GetStacksLocked;
    name?: inputs.GetStacksName;
    projectRoot?: inputs.GetStacksProjectRoot;
    repository?: inputs.GetStacksRepository;
    state?: inputs.GetStacksState;
    vendor?: inputs.GetStacksVendor;
    workerPool?: inputs.GetStacksWorkerPool;
}
/**
 * A collection of values returned by getStacks.
 */
export interface GetStacksResult {
    readonly administrative?: outputs.GetStacksAdministrative;
    readonly branch?: outputs.GetStacksBranch;
    readonly commit?: outputs.GetStacksCommit;
    readonly id: string;
    readonly labels?: outputs.GetStacksLabel[];
    readonly locked?: outputs.GetStacksLocked;
    readonly name?: outputs.GetStacksName;
    readonly projectRoot?: outputs.GetStacksProjectRoot;
    readonly repository?: outputs.GetStacksRepository;
    readonly stacks: outputs.GetStacksStack[];
    readonly state?: outputs.GetStacksState;
    readonly vendor?: outputs.GetStacksVendor;
    readonly workerPool?: outputs.GetStacksWorkerPool;
}
export declare function getStacksOutput(args?: GetStacksOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStacksResult>;
/**
 * A collection of arguments for invoking getStacks.
 */
export interface GetStacksOutputArgs {
    administrative?: pulumi.Input<inputs.GetStacksAdministrativeArgs>;
    branch?: pulumi.Input<inputs.GetStacksBranchArgs>;
    commit?: pulumi.Input<inputs.GetStacksCommitArgs>;
    id?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<inputs.GetStacksLabelArgs>[]>;
    locked?: pulumi.Input<inputs.GetStacksLockedArgs>;
    name?: pulumi.Input<inputs.GetStacksNameArgs>;
    projectRoot?: pulumi.Input<inputs.GetStacksProjectRootArgs>;
    repository?: pulumi.Input<inputs.GetStacksRepositoryArgs>;
    state?: pulumi.Input<inputs.GetStacksStateArgs>;
    vendor?: pulumi.Input<inputs.GetStacksVendorArgs>;
    workerPool?: pulumi.Input<inputs.GetStacksWorkerPoolArgs>;
}
