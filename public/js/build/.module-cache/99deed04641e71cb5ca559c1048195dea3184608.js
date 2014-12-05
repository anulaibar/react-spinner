var CommentBox = React.createClass({displayName: 'CommentBox',
    getInitialState: function(){
      return {spinning: false};
    },
    handleClick: function() {
      this.setState({spinning: !this.state.spinning});
      console.log(this.state);
    },
    render: function() {
        return (
            React.createElement("div", {className: "box"}, 
                React.createElement("a", {href: "#", onClick: this.handleClick}, "Hello, world!"), React.createElement("span", null, " I am a box.")
            )
            );
    }
});
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('example')
);