import * as pulumi from "@pulumi/pulumi";
export declare function getContext(args: GetContextArgs, opts?: pulumi.InvokeOptions): Promise<GetContextResult>;
/**
 * A collection of arguments for invoking getContext.
 */
export interface GetContextArgs {
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
    contextId: string;
    id?: string;
}
/**
 * A collection of values returned by getContext.
 */
export interface GetContextResult {
    readonly afterApplies: string[];
    readonly afterDestroys: string[];
    readonly afterInits: string[];
    readonly afterPerforms: string[];
    readonly afterPlans: string[];
    readonly afterRuns?: string[];
    readonly beforeApplies: string[];
    readonly beforeDestroys: string[];
    readonly beforeInits: string[];
    readonly beforePerforms: string[];
    readonly beforePlans: string[];
    readonly contextId: string;
    readonly description: string;
    readonly id: string;
    readonly labels: string[];
    readonly name: string;
    readonly spaceId: string;
}
export declare function getContextOutput(args: GetContextOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetContextResult>;
/**
 * A collection of arguments for invoking getContext.
 */
export interface GetContextOutputArgs {
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
    contextId: pulumi.Input<string>;
    id?: pulumi.Input<string>;
}
