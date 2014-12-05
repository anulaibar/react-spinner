var Component = React.createClass({displayName: 'Component',
    getInitialState:function () {
        return {loading:false};
    },
    handleClick:function () {
        this.setState({loading:!this.state.loading});
        console.log(this.state);
    },
    render:function () {

        var content;
        if (this.state.loading) {
            content = React.createElement("div", {className: "loader"})
        } else {
            content = React.createElement("div", {className: "mama"})
        }

        return (
            React.createElement("div", null, 
                React.createElement("a", {href: "#", onClick: this.handleClick}, "Click me!"), 
                React.createElement("div", null, 
                    content
                )
            )
            );
    }
});
React.render(
    React.createElement(Component, null),
    document.getElementById('content')
);