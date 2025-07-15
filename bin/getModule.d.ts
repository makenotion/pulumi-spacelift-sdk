import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getModule(args: GetModuleArgs, opts?: pulumi.InvokeOptions): Promise<GetModuleResult>;
/**
 * A collection of arguments for invoking getModule.
 */
export interface GetModuleArgs {
    id?: string;
    moduleId: string;
}
/**
 * A collection of values returned by getModule.
 */
export interface GetModuleResult {
    readonly administrative: boolean;
    readonly awsAssumeRolePolicyStatement: string;
    readonly azureDevops: outputs.GetModuleAzureDevop[];
    readonly bitbucketClouds: outputs.GetModuleBitbucketCloud[];
    readonly bitbucketDatacenters: outputs.GetModuleBitbucketDatacenter[];
    readonly branch: string;
    readonly description: string;
    readonly enableLocalPreview: boolean;
    readonly githubEnterprises: outputs.GetModuleGithubEnterprise[];
    readonly gitlabs: outputs.GetModuleGitlab[];
    readonly id: string;
    readonly labels: string[];
    readonly moduleId: string;
    readonly name: string;
    readonly projectRoot: string;
    readonly protectFromDeletion: boolean;
    readonly rawGits: outputs.GetModuleRawGit[];
    readonly repository: string;
    readonly sharedAccounts: string[];
    readonly spaceId: string;
    readonly terraformProvider: string;
    readonly workerPoolId: string;
    readonly workflowTool: string;
}
export declare function getModuleOutput(args: GetModuleOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetModuleResult>;
/**
 * A collection of arguments for invoking getModule.
 */
export interface GetModuleOutputArgs {
    id?: pulumi.Input<string>;
    moduleId: pulumi.Input<string>;
}
