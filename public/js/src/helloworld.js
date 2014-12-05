var Component = React.createClass({
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
            content = <div className="loader"></div>
        } else {
            content = <div className="box"></div>
        }

        return (
            <div>
                <a href="#" onClick={this.handleClick}>Click me!</a>
                <div>
                    {content}
                </div>
            </div>
            );
    }
});
React.render(
    <Component />,
    document.getElementById('content')
);