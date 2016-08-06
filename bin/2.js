#!/usr/bin/env node

// 通过node child_process 子进程执行linux命令
// 官方文档https://nodejs.org/dist/latest-v4.x/docs/api/child_process.html#child_process_child_process_spawn_command_args_options
var name = process.argv[2];
var exec = require('child_process').exec;

var child = exec('nei ' + name, function(err, stdout, stderr) {
    if (err) throw err;
    console.log(stdout);
});
