var React = require('react');
var ReactDOM = require('react-dom');

console.log("Plugin 2 loaded!!");

var plugin1 = require("plugin1");
plugin1.hello("plugin2");

var Greet = require("demo/greet");

ReactDOM.render(
    <Greet name="plugin2"/>,
    document.getElementById('app')
);