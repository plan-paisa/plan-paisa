import cdk = require('@aws-cdk/core');
import { Config } from './Config';
import { WebStack } from './WebStack';
import { WebSiteStack } from '../../modules/web/infra/src';
import { HostedZoneStack } from './HostedZoneStack';

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
const hostedZoneStack = new HostedZoneStack(app, 'PlanPaisaHostedZoneStack', {
	baseDomainName: config.getProperty('BASE_DOMAIN_NAME'),
	stackName: `plan-paisa-hosted-zone`,
	...props
});
config.addTags(hostedZoneStack);

const webSiteStack = new WebSiteStack(app, 'PlanPaisaWebSiteStack', {
	deployAssetPath: '../modules/web/site/build',
	stackName: `${config.getAudience()}-plan-paisa-web-site`,
	webSiteBucketName: config.getResources().s3Bucket.webSite,
	...props
});
config.addTags(webSiteStack);

const webStack = new WebStack(app, 'PlanPaisaWebStack', {
	baseDomainName: config.getProperty('BASE_DOMAIN_NAME'),
	originAccessIdentityId: webSiteStack.getCfOriginAccessIdRef(),
	stackName: `${config.getAudience()}-plan-paisa-web`,
	subDomainName: config.getSubDomainName(),
	webSiteBucketName: config.getResources().s3Bucket.webSite,
	...props
});
webStack.addDependency(webSiteStack)
config.addTags(webStack);
