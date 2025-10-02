import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getSpaces(args?: GetSpacesArgs, opts?: pulumi.InvokeOptions): Promise<GetSpacesResult>;
/**
 * A collection of arguments for invoking getSpaces.
 */
export interface GetSpacesArgs {
    id?: string;
    labels?: string[];
}
/**
 * A collection of values returned by getSpaces.
 */
export interface GetSpacesResult {
    readonly id: string;
    readonly labels?: string[];
    readonly spaces: outputs.GetSpacesSpace[];
}
export declare function getSpacesOutput(args?: GetSpacesOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSpacesResult>;
/**
 * A collection of arguments for invoking getSpaces.
 */
export interface GetSpacesOutputArgs {
    id?: pulumi.Input<string>;
    labels?: pulumi.Input<pulumi.Input<string>[]>;
}
