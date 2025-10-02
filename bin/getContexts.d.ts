import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getContexts(args?: GetContextsArgs, opts?: pulumi.InvokeOptions): Promise<GetContextsResult>;
/**
 * A collection of arguments for invoking getContexts.
 */
export interface GetContextsArgs {
    id?: string;
    labels?: inputs.GetContextsLabel[];
}
/**
 * A collection of values returned by getContexts.
 */
export interface GetContextsResult {
    readonly contexts: outputs.GetContextsContext[];
    readonly id: string;
    readonly labels?: outputs.GetContextsLabel[];
}
export declare function getContextsOutput(args?: GetContextsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContextsResult>;
/**
 * A collection of arguments for invoking getContexts.
 */
export interface GetContextsOutputArgs {
    id?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<inputs.GetContextsLabelArgs>[]>;
}
