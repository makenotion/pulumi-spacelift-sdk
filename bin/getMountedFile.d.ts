import * as pulumi from "@pulumi/pulumi";
export declare function getMountedFile(args: GetMountedFileArgs, opts?: pulumi.InvokeOptions): Promise<GetMountedFileResult>;
/**
 * A collection of arguments for invoking getMountedFile.
 */
export interface GetMountedFileArgs {
    contextId?: string;
    id?: string;
    moduleId?: string;
    relativePath: string;
    stackId?: string;
}
/**
 * A collection of values returned by getMountedFile.
 */
export interface GetMountedFileResult {
    readonly checksum: string;
    readonly content: string;
    readonly contextId?: string;
    readonly id: string;
    readonly moduleId?: string;
    readonly relativePath: string;
    readonly stackId?: string;
    readonly writeOnly: boolean;
}
export declare function getMountedFileOutput(args: GetMountedFileOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetMountedFileResult>;
/**
 * A collection of arguments for invoking getMountedFile.
 */
export interface GetMountedFileOutputArgs {
    contextId?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    moduleId?: pulumi.Input<string>;
    relativePath: pulumi.Input<string>;
    stackId?: pulumi.Input<string>;
}
