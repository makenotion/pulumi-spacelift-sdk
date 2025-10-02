import * as pulumi from "@pulumi/pulumi";
export declare function getPolicy(args: GetPolicyArgs, opts?: pulumi.InvokeOptions): Promise<GetPolicyResult>;
/**
 * A collection of arguments for invoking getPolicy.
 */
export interface GetPolicyArgs {
    id?: string;
    policyId: string;
}
/**
 * A collection of values returned by getPolicy.
 */
export interface GetPolicyResult {
    readonly body: string;
    readonly description: string;
    readonly id: string;
    readonly labels: string[];
    readonly name: string;
    readonly policyId: string;
    readonly spaceId: string;
    readonly type: string;
}
export declare function getPolicyOutput(args: GetPolicyOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetPolicyResult>;
/**
 * A collection of arguments for invoking getPolicy.
 */
export interface GetPolicyOutputArgs {
    id?: pulumi.Input<string>;
    policyId: pulumi.Input<string>;
}
