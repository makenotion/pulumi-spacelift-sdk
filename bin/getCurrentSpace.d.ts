import * as pulumi from "@pulumi/pulumi";
export declare function getCurrentSpace(args?: GetCurrentSpaceArgs, opts?: pulumi.InvokeOptions): Promise<GetCurrentSpaceResult>;
/**
 * A collection of arguments for invoking getCurrentSpace.
 */
export interface GetCurrentSpaceArgs {
    id?: string;
}
/**
 * A collection of values returned by getCurrentSpace.
 */
export interface GetCurrentSpaceResult {
    readonly description: string;
    readonly id: string;
    readonly inheritEntities: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly parentSpaceId: string;
}
export declare function getCurrentSpaceOutput(args?: GetCurrentSpaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetCurrentSpaceResult>;
/**
 * A collection of arguments for invoking getCurrentSpace.
 */
export interface GetCurrentSpaceOutputArgs {
    id?: pulumi.Input<string>;
}
