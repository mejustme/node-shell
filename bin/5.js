#!/usr/bin/env node
var argv = require('yargs')
    .option('n', {
        alias : 'name',  //全参数
        demand: true,    //必须?
        default: 'tom', // 默认值
        describe: 'your name', // -h --help 描述
        type: 'string'  // 类型
    })
    .usage('Usage: hello [options]')
    .example('hello -n tom', 'say hello to Tom')
    .help('h')          // 必填 否则默认 输出 hello tom
    .alias('h', 'help')
    .epilog('copyright 2015')  //版权
    .argv;

console.log("hello " + argv.n);