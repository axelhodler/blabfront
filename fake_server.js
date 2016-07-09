'use strict';

var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('api.json');
var middlewares = jsonServer.defaults();

server.post('/auth', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*'); // should be part of middlewares but is not
  res.send('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtYWlsIjoibWFpbDBAdGVzdC5jb20iLCJmdWxsTmFtZSI6IlRpbW15IFRyb21wIiwiaWF0IjoxNDY4MDkxMjQ3fQ.OTtAzGOmm2KjkuNVMXHpklBxg8FD-pgiWgTK6ab3hVo');
});

server.use(middlewares);
server.use(router);
server.listen(3000);
