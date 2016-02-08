import React from 'react';
import ReactDOM from 'react-dom';
import MiniRouter from '../router/MiniRouter';

function isLeftClickEvent(event) {
    return event.button === 0
}

function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

export class Link extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event){
        let allowTransition = true

        if (this.props.onClick)
            this.props.onClick(event)

        if (isModifiedEvent(event) || !isLeftClickEvent(event))
            return

        if (event.defaultPrevented === true)
            allowTransition = false

        // If target prop is set (e.g. to "_blank") let browser handle link.
        if (this.props.target) {
            if (!allowTransition)
                event.preventDefault()

            return
        }

        event.preventDefault()

        if (allowTransition) {
            //console.log("Firing MiniRouter.navigate");
            MiniRouter.navigate(this.props.to);
        }

    }

    render() {

        var to = this.props.to;

        let props = {};

        Object.keys(this.props).forEach(function(key, index){
            if (key !== 'left') {
                props[key] = this.props[key];
            }
        }, this);

        props.href = to;

        return(
            <a {...props} onClick={this.handleClick} />
        );
    }

}