import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSavedFilters(args?: GetSavedFiltersArgs, opts?: pulumi.InvokeOptions): Promise<GetSavedFiltersResult>;
/**
 * A collection of arguments for invoking getSavedFilters.
 */
export interface GetSavedFiltersArgs {
    filterName?: string;
    filterType?: string;
    id?: string;
}
/**
 * A collection of values returned by getSavedFilters.
 */
export interface GetSavedFiltersResult {
    readonly filterName?: string;
    readonly filterType?: string;
    readonly filters: outputs.GetSavedFiltersFilter[];
    readonly id: string;
}
export declare function getSavedFiltersOutput(args?: GetSavedFiltersOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSavedFiltersResult>;
/**
 * A collection of arguments for invoking getSavedFilters.
 */
export interface GetSavedFiltersOutputArgs {
    filterName?: pulumi.Input<string>;
    filterType?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
