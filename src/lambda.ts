const serverlessExpress = require('@vendia/serverless-express')
import { app } from './app';

module.exports.handler = serverlessExpress({ app })