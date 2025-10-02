import * as pulumi from "@pulumi/pulumi";
export declare function getSpaceByPath(args: GetSpaceByPathArgs, opts?: pulumi.InvokeOptions): Promise<GetSpaceByPathResult>;
/**
 * A collection of arguments for invoking getSpaceByPath.
 */
export interface GetSpaceByPathArgs {
    id?: string;
    spacePath: string;
}
/**
 * A collection of values returned by getSpaceByPath.
 */
export interface GetSpaceByPathResult {
    readonly description: string;
    readonly id: string;
    readonly inheritEntities: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly parentSpaceId: string;
    readonly spacePath: string;
}
export declare function getSpaceByPathOutput(args: GetSpaceByPathOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSpaceByPathResult>;
/**
 * A collection of arguments for invoking getSpaceByPath.
 */
export interface GetSpaceByPathOutputArgs {
    id?: pulumi.Input<string>;
    spacePath: pulumi.Input<string>;
}
