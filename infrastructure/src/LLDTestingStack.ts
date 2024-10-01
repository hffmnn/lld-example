import * as cdk from "aws-cdk-lib";
import { aws_lambda_nodejs as lambdaNodejs } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";

interface LLDTestingStackProps extends cdk.StackProps {
  // The memory size of the lambda function(s).
  readonly memorySize?: number;
  // The base url of some other service
  readonly someOtherServiceBaseUrl: string;
}

export class LLDTestingStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: LLDTestingStackProps) {
    super(scope, id, props);

    new lambdaNodejs.NodejsFunction(this, "OnSomeEventLambda", {
      entry: path.join(__dirname, "../../service/src/eventForwarder/handler.ts"),
      handler: "handler",
      runtime: cdk.aws_lambda.Runtime.NODEJS_20_X,
    });
  }
}
