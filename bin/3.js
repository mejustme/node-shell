#!/usr/bin/env node

// 通过封装模块shelljs 更友好执行shell
var name = process.argv[2]; // node  path/to/node-shell name
var exec = require('shelljs').exec;

exec('echo name is:  ' + name);

