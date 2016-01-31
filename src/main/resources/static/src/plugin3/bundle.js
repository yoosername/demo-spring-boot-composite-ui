var React = require('react');
var ReactDOM = require('react-dom');

console.log("Plugin 3 loaded!!");

var plugin1 = require("plugin1");
plugin1.hello("plugin3");

var Greet = require("demo/greet");

ReactDOM.render(
    React.createElement(Greet, {name: "plugin3"}),
    document.getElementById('app')
);