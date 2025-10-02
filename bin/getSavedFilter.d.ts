import * as pulumi from "@pulumi/pulumi";
export declare function getSavedFilter(args: GetSavedFilterArgs, opts?: pulumi.InvokeOptions): Promise<GetSavedFilterResult>;
/**
 * A collection of arguments for invoking getSavedFilter.
 */
export interface GetSavedFilterArgs {
    filterId: string;
}
/**
 * A collection of values returned by getSavedFilter.
 */
export interface GetSavedFilterResult {
    readonly createdBy: string;
    readonly data: string;
    readonly filterId: string;
    readonly id: string;
    readonly isPublic: boolean;
    readonly name: string;
    readonly type: string;
}
export declare function getSavedFilterOutput(args: GetSavedFilterOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSavedFilterResult>;
/**
 * A collection of arguments for invoking getSavedFilter.
 */
export interface GetSavedFilterOutputArgs {
    filterId: pulumi.Input<string>;
}
