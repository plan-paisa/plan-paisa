import cdk = require('@aws-cdk/core');
import { Config } from './Config';
import { WebStack } from './WebStack';
import { WebSiteStack } from '../../modules/web/infra/src';

interface StackProps extends cdk.StackProps {
	audience: string;
}

const app = new cdk.App();
const config = new Config(process.env);
const props: StackProps = {
	audience: config.getAudience(),
	env: {
		account: config.getAwsAccount(),
		region: config.getAwsRegion()
	}
};

// TODO - To be pointed to build folder of web site
const webSiteStack = new WebSiteStack(app, 'PlanPaisaWebSiteStack', {
	deployAssetPath: '../modules/web/site/dump',
	stackName: `${config.getAudience()}-plan-paisa-web-site`,
	webSiteBucketName: config.getResources().s3Bucket.webSite,
	...props
});
config.addTags(webSiteStack);

const webStack = new WebStack(app, 'PlanPaisaWebStack', {
	originAccessIdentityId: webSiteStack.getCfOriginAccessIdRef(),
	stackName: `${config.getAudience()}-plan-paisa-web`,
	webSiteBucketName: config.getResources().s3Bucket.webSite,
	...props
});
webStack.addDependency(webSiteStack)
config.addTags(webStack);
