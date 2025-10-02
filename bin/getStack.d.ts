import * as pulumi from "@pulumi/pulumi";
import * as outputs from "./types/output";
export declare function getStack(args: GetStackArgs, opts?: pulumi.InvokeOptions): Promise<GetStackResult>;
/**
 * A collection of arguments for invoking getStack.
 */
export interface GetStackArgs {
    additionalProjectGlobs?: string[];
    afterApplies?: string[];
    afterDestroys?: string[];
    afterInits?: string[];
    afterPerforms?: string[];
    afterPlans?: string[];
    afterRuns?: string[];
    beforeApplies?: string[];
    beforeDestroys?: string[];
    beforeInits?: string[];
    beforePerforms?: string[];
    beforePlans?: string[];
    gitSparseCheckoutPaths?: string[];
    id?: string;
    stackId: string;
}
/**
 * A collection of values returned by getStack.
 */
export interface GetStackResult {
    readonly additionalProjectGlobs?: string[];
    readonly administrative: boolean;
    readonly afterApplies: string[];
    readonly afterDestroys: string[];
    readonly afterInits: string[];
    readonly afterPerforms: string[];
    readonly afterPlans: string[];
    readonly afterRuns?: string[];
    readonly ansibles: outputs.GetStackAnsible[];
    readonly autodeploy: boolean;
    readonly autoretry: boolean;
    readonly awsAssumeRolePolicyStatement: string;
    readonly azureDevops: outputs.GetStackAzureDevop[];
    readonly beforeApplies: string[];
    readonly beforeDestroys: string[];
    readonly beforeInits: string[];
    readonly beforePerforms: string[];
    readonly beforePlans: string[];
    readonly bitbucketClouds: outputs.GetStackBitbucketCloud[];
    readonly bitbucketDatacenters: outputs.GetStackBitbucketDatacenter[];
    readonly branch: string;
    readonly cloudformations: outputs.GetStackCloudformation[];
    readonly description: string;
    readonly enableLocalPreview: boolean;
    readonly enableSensitiveOutputsUpload: boolean;
    readonly enableWellKnownSecretMasking: boolean;
    readonly gitSparseCheckoutPaths?: string[];
    readonly githubEnterprises: outputs.GetStackGithubEnterprise[];
    readonly gitlabs: outputs.GetStackGitlab[];
    readonly id: string;
    readonly kubernetes: outputs.GetStackKubernete[];
    readonly labels: string[];
    readonly manageState: boolean;
    readonly name: string;
    readonly projectRoot: string;
    readonly protectFromDeletion: boolean;
    readonly pulumis: outputs.GetStackPulumi[];
    readonly rawGits: outputs.GetStackRawGit[];
    readonly repository: string;
    readonly runnerImage: string;
    readonly showcases: outputs.GetStackShowcase[];
    readonly spaceId: string;
    readonly stackId: string;
    readonly terraformExternalStateAccess: boolean;
    readonly terraformSmartSanitization: boolean;
    readonly terraformVersion: string;
    readonly terraformWorkflowTool: string;
    readonly terraformWorkspace: string;
    readonly terragrunts: outputs.GetStackTerragrunt[];
    readonly workerPoolId: string;
}
export declare function getStackOutput(args: GetStackOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetStackResult>;
/**
 * A collection of arguments for invoking getStack.
 */
export interface GetStackOutputArgs {
    additionalProjectGlobs?: pulumi.Input<pulumi.Input<string>[]>;
    afterApplies?: pulumi.Input<pulumi.Input<string>[]>;
    afterDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    afterInits?: pulumi.Input<pulumi.Input<string>[]>;
    afterPerforms?: pulumi.Input<pulumi.Input<string>[]>;
    afterPlans?: pulumi.Input<pulumi.Input<string>[]>;
    afterRuns?: pulumi.Input<pulumi.Input<string>[]>;
    beforeApplies?: pulumi.Input<pulumi.Input<string>[]>;
    beforeDestroys?: pulumi.Input<pulumi.Input<string>[]>;
    beforeInits?: pulumi.Input<pulumi.Input<string>[]>;
    beforePerforms?: pulumi.Input<pulumi.Input<string>[]>;
    beforePlans?: pulumi.Input<pulumi.Input<string>[]>;
    gitSparseCheckoutPaths?: pulumi.Input<pulumi.Input<string>[]>;
    id?: pulumi.Input<string>;
    stackId: pulumi.Input<string>;
}
