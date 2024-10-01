import { App, StackProps } from "aws-cdk-lib";
import { config as somestage } from "./SomeStage";

export interface StageEnvironment extends StackProps {
  alarmEmail?: string;
  someOtherServiceBaseUrl: string;
}

function configFromStage(stage: string): StageEnvironment | undefined {
  switch (stage) {
    case "SomeStage":
      return somestage;
    default:
      return undefined;
  }
}

export function getStage(app: App): { stage: string; config: StageEnvironment } {
  const stage: string = app.node.tryGetContext("stage");
  if (!stage) {
    throw new Error("Context variable missing on CDK command. Pass in as `--context stage=XXX`");
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const config = configFromStage(stage);
  if (!config) {
    throw new Error(`Could not load config for '${stage}'`);
  }

  return { stage, config };
}
