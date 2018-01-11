var FormBox = createReactClass({

  render: function() {
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-1">
          <FormTextInput />
        </div>
      </div>
    );
  }
});


var FormTextInput = createReactClass({
  getInitialState: function() {
    return {
      helloTo: 'input text!!'
    };
  },

  changeHandle: function(e) {
    this.setState({helloTo: e.target.value.toUpperCase()});
  },

  render: function() {
    return (
      <div className="row">
        <h3>&nbsp;{this.state.helloTo}</h3>
        <input type="text" onChange={this.changeHandle} value={this.state.helloTo} />
      </div>
    );
  }
});


