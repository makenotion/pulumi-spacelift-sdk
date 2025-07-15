import * as pulumi from "@pulumi/pulumi";
export declare function getSpace(args: GetSpaceArgs, opts?: pulumi.InvokeOptions): Promise<GetSpaceResult>;
/**
 * A collection of arguments for invoking getSpace.
 */
export interface GetSpaceArgs {
    id?: string;
    spaceId: string;
}
/**
 * A collection of values returned by getSpace.
 */
export interface GetSpaceResult {
    readonly description: string;
    readonly id: string;
    readonly inheritEntities: boolean;
    readonly labels: string[];
    readonly name: string;
    readonly parentSpaceId: string;
    readonly spaceId: string;
}
export declare function getSpaceOutput(args: GetSpaceOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSpaceResult>;
/**
 * A collection of arguments for invoking getSpace.
 */
export interface GetSpaceOutputArgs {
    id?: pulumi.Input<string>;
    spaceId: pulumi.Input<string>;
}
