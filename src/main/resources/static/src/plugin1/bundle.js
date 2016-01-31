var React = require('react');

console.log("Plugin 1 loaded!!");

define('plugin1', function() {
    return {
        hello : function(from){
            console.log("Plugin 1 says hello to " + from);
        }
    }

});

define('demo/greet', function() {

    return React.createClass({
            render: function () {
                return (
                    <div className="greetBox">
                        Hello {this.props.name}
                    </div>
                );
            }
        })

});
