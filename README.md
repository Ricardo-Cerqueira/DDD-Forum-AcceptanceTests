# DDD-Forum Acceptance Tests

The current repo is used to run the AT's of DDD-Forum. 

# Cucumber & WebdriverIO Example

This project is a demo for using Cucumber + WebdriverIO. This is the example provided when WebdriverIO helpder
configuration tool, but reviewed to work on node v20.9.0 (lts/iron).

## Instructions

PLEASE READ!!!

If a project (~~which it is~~) is already created only run

```shell
  npm install --save-dev @wdio/cli
```

To run this alongside another project that uses a different node version please start the other project first, and then switch the node version to run wdio.

To run a selected user story please edit lines 34 and 141 in [here](wdio.conf.ts).

Additionally you may use Pickles to generate documents related to your .feature files

For that first install Pickles

```shell
  choco install pickles
```

Then run the command to generate your files

```shell
  pickles --feature-directory=features\gherkin-scenarios\test\ --output-directory=docs\sprintE\pickles-output --documentation-format=dhtml
```

To run database related queries run the following commands to update node_modules

```shell
npm install mysql2
```

**Obviously**, don't forget to compile ts files using 

```shell
tsc
```

**Finally**, add the .env file from the original repo, to this root folder.

___
Otherwise

Create a new project

```shell
  mkdir cucumber-wdio-example && cd cucumber-wdio-example
```

Initialize the folder as a node project

```shell
  npm init
```

Install typescript

```shell 
  npm install --save-dev typescript
``` 

Install WebdriverIO package

```shell
  npm install --save-dev @wdio/cli
```

Initialize/Configure WebdriverIO using the helper configuration tool.
When asked, choose "E2E Testing", "On my local machine", "Web - ...", "Chrome", "Cucumber ...", "TypeScript ...", "spec;
allure; junit or any other", and accept all the defaults for the other questions.

```shell
  npx wdio config
```

Check ./features and ./step-definitions created folders as weel as wdio.conf.ts configuration file.

Run tests

```shell
  npm run wdio
```