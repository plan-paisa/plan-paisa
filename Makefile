SHEL := /bin/bash

###########################################
#### Vars to be overridden
###########################################

ifndef AWS_ACCOUNT
	export AWS_ACCOUNT := 130478747787
endif

ifndef AWS_REGION
	export AWS_REGION := eu-west-1
endif

ifndef TARGET_ENV
	export TARGET_ENV := DEV
endif

ifndef AUDIENCE
	export AUDIENCE := dev
endif

# Choices: "never" "any-change" "broadening"
ifndef CDK_APPROVAL_LEVEL
	export CDK_APPROVAL_LEVEL := broadening
endif

.PHONY: all test clean

###########################################
#### Deployment commands
###########################################

CDK_TOOLKIT_STACK_NAME := ${AUDIENCE}-cdk-toolkit
CDK_TOOLKIT_BUCKET_NAME := ${AWS_ACCOUNT}-${AUDIENCE}-cdk-staging

cdk-bootstrap:
	cd infrastructure && \
		cdk bootstrap \
		--toolkit-stack-name ${CDK_TOOLKIT_STACK_NAME} \
		--toolkit-bucket-name ${CDK_TOOLKIT_BUCKET_NAME}

cdk-ls:
	cd infrastructure && cdk ls

cdk-synth: nuke-cdk
	cd infrastructure && cdk synth

cdk-diff:
	cd infrastructure && cdk diff || :

deploy: cdk-bootstrap
	cd infrastructure && \
		cdk deploy '*' \
		--toolkit-stack-name ${CDK_TOOLKIT_STACK_NAME} \
		--require-approval ${CDK_APPROVAL_LEVEL}

cdk-destroy:
	cd infrastructure && cdk destroy
		
###########################################
#### Development
###########################################

nuke: nuke-node-modules nuke-artifacts nuke-logs nuke-cdk

nuke-locks: nuke
	find . -type d -name node_modules -exec rm -rf {} +

nuke-node-modules:
	find . -type d -name node_modules -exec rm -rf {} +

nuke-artifacts:
	find . -type f -name package-lock.json -exec rm -rf {} +

nuke-logs:
	find . -type f -name *-debug.log -exec rm -rf {} +

nuke-cdk:
	find . \
	\( -name cdk.out -o -name .cdk.staging -o -name cdk.context.json \) \
	-exec rm -rf {} +
	
install:
	npm ci
	
validate:
	npm run validate
	
test:
	npm run test
	
package:
	npm run package
