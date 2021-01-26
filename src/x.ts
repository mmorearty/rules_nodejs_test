import chalk from 'chalk';
import * as opentracing from 'opentracing';

console.log(chalk.blue('hello'));
const tracer = new opentracing.Tracer();

