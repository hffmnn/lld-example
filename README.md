# lld Example

## Commands

### Deploy

```bash
cd infrastructure
yarn cdk deploy --context stage=SomeStage
```

### lld

In the root of the project

```bash
lld -w -v
Welcome to Lambda Live Debugger 🐞 version 1.0.7.
? Which framework are you using (detected: ?)? cdk
? Would you like to enter CDK context (example: environment=development)? stage=SomeStage
? Would you like to enter more CDK context?
? If you are using monorepo, enter the subfolder where the framework is installed. infrastructure
? Do you want to use Observability mode, which just sends events to the debugger and does not use the response? No
? Would you like to use named AWS profile?
? Would you like to specify AWS region? eu-west-1
? Would you like to specify AWS role?
? Would you like to filter which Lambdas to debug? All
? Would you like to save these settings to lldebugger.config.ts? Yes
? Would you like to add lldebugger.config.ts to .gitignore? No
/Users/user/workspace/some/_experiments/lld-example-setup/.vscode/launch.json does not exist!
? Would you like to add configuration to VsCode? Yes
? Do you want to use verbose logging? This will log all events to the console. No
Saving to config file /Users/user/workspace/some/_experiments/lld-example-setup/lldebugger.config.ts
```

After that: `lld`
