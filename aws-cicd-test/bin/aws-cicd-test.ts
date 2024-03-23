#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsCicdTestStack } from '../lib/aws-cicd-test-stack';

const app = new cdk.App();
new AwsCicdTestStack(app, 'AwsCicdTestStack', {

});