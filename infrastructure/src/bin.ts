#!/usr/bin/env node

import { App, Tags } from "aws-cdk-lib";
import "source-map-support/register";
import { serviceName } from "./constants";
import { LLDTestingStack } from "./LLDTestingStack";
import { getStage } from "./stages";

const main = async () => {
  const app = new App();

  const {
    stage,
    config: { env, someOtherServiceBaseUrl },
  } = getStage(app);

  const stack = new LLDTestingStack(app, `LLDTestingStack-${stage}`, {
    env,
    someOtherServiceBaseUrl,
  });

  Tags.of(stack).add("Stage", stage);
  Tags.of(stack).add("Service", serviceName);
};

main();
