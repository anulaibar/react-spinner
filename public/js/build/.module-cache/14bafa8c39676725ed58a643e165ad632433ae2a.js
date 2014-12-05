var CommentBox = React.createClass({displayName: 'CommentBox',
    getInitialState: function(){
      return {loading: false};
    },
    handleClick: function() {
      this.setState({loading: !this.state.loading});
      console.log(this.state);
    },
    render: function() {
        
        var content;
        if(this.state.loading){
          content = React.createElement("div", {className: "loader"}, "Loading...")
        } else {
          content = React.createElement("div", {className: "mama"}, "Mama!")
        }
        
        return (
            React.createElement("div", null, 
                React.createElement("a", {href: "#", onClick: this.handleClick}, "Hello, world!"), React.createElement("span", null, " I am a box."), 
                content
            )
            );
    }
});
React.render(
    React.createElement(CommentBox, null),
    document.getElementById('example')
);