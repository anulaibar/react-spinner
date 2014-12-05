var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
        return (
            React.createElement("div", {className: "box"}, 
            "Hello, world! I am a box."
            )
            );
    }
});
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('example')
);