#!/usr/bin/env node

//获取重定向数据，看官网node文档 child_process更细
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(data) {
        process.stdout.write("hello " + data);
});

// echo "cqh" | node-shell
