#!/usr/bin/env node

// 通过模块 yargs 更好处理输入参数
// 必须下面输入方式才识别
//$ hello --name=tom
//hello tom
//
//$ hello --name tom
//hello tom
var argv = require('yargs').argv;

console.log('hello ', argv.n);