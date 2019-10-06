import cdk = require('@aws-cdk/core');
import iam = require('@aws-cdk/aws-iam');
import cf = require('@aws-cdk/aws-cloudfront');
import s3 = require('@aws-cdk/aws-s3');
import s3Deploy = require('@aws-cdk/aws-s3-deployment');

export interface WebStackProps extends cdk.StackProps {
  audience: string;
  originAccessIdentityId: string;
  webSiteBucketName: string;
}
export class WebStack extends cdk.Stack {

  private logBucket: s3.Bucket;

  constructor(scope: cdk.Construct, id: string, private readonly props: WebStackProps) {
    super(scope, id, props);

    this.createLogBucket();
    this.createWebDistribution();
  }

  private createLogBucket() {
    this.logBucket = new s3.Bucket(this, 'PlanPaisaLogBucket', {
      bucketName: `${this.account}-${this.props.audience}-plan-paisa-web-distribution-log`,
      encryption: s3.BucketEncryption.UNENCRYPTED,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })
  }

  private createWebDistribution() {
    const { originAccessIdentityId, webSiteBucketName } = this.props;
    const s3BucketSource = s3.Bucket.fromBucketName(this, 'PlanPaisaWebSiteBucketRef', webSiteBucketName);

    new cf.CloudFrontWebDistribution(this, 'PlanPaisaWebDistribution', {
      comment: `Plan Paisa CF fro Public site and API's`,
      loggingConfig: {
        bucket: this.logBucket
      },
      originConfigs: [{
        s3OriginSource: {
          s3BucketSource,
          originAccessIdentityId
        },
        behaviors: [{
          allowedMethods: cf.CloudFrontAllowedMethods.GET_HEAD_OPTIONS,
          compress: true,
          forwardedValues: {
            cookies: {
              forward: 'all'
            },
            queryString: true
          },
          isDefaultBehavior: true
        }]
      }],
      viewerProtocolPolicy: cf.ViewerProtocolPolicy.REDIRECT_TO_HTTPS
    })
  }
}