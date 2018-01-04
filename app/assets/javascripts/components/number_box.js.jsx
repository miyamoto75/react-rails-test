var NumberBox = createReactClass({
  getInitialState: function() {
    return {number: 100};
  },

  IncrementHandle: function (e) {
    this.setState({number: ++this.state.number});
    console.log(this.state.number);
  },

  DecrementHandle: function (e) {
    this.setState({number: --this.state.number});
    console.log(this.state.number);
  },

  render: function() {
    return (
      <div>
        <p>{this.state.number}</p>
        <IncrementButton handle={this.IncrementHandle} />
        <DecrementButton handle={this.DecrementHandle} />
      </div>
    );
  }
});

var IncrementButton = createReactClass({
  render: function() {
    console.log(this.props);
    return (
      <div className="btn btn-primary" onClick={this.props.handle}>Increment</div>
    );
  }
});


var DecrementButton = createReactClass({

  render: function() {
    return (
      <div className="btn btn-danger" onClick={this.props.handle}>Decrement</div>
    );
  }
});
