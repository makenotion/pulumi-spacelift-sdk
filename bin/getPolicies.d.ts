import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getPolicies(args?: GetPoliciesArgs, opts?: pulumi.InvokeOptions): Promise<GetPoliciesResult>;
/**
 * A collection of arguments for invoking getPolicies.
 */
export interface GetPoliciesArgs {
    id?: string;
    labels?: string[];
    type?: string;
}
/**
 * A collection of values returned by getPolicies.
 */
export interface GetPoliciesResult {
    readonly id: string;
    readonly labels?: string[];
    readonly policies: outputs.GetPoliciesPolicy[];
    readonly type?: string;
}
export declare function getPoliciesOutput(args?: GetPoliciesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPoliciesResult>;
/**
 * A collection of arguments for invoking getPolicies.
 */
export interface GetPoliciesOutputArgs {
    id?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    type?: pulumi.Input<string>;
}
