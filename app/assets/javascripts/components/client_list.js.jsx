var ClientList = createReactClass({
  getInitialState: function() {
    return {clients: [
      // {id: 1, name: 'hoge1'},
      // {id: 2, name: 'hoge2'},
      // {id: 3, name: 'hoge3'},
      this.props.client
    ]};
  },

  AddClients: function() {
    var data = {id: 8, name: "added"};
    var c = this.state.clients;
    c.push(data);
    console.log(c);
    this.setState({clients: c});
  },

  getClient: function() {
    fetch("http://localhost:3000/api/v1/clients/get")
      .then(res => res.json())
      .then(
        (result) => {
          var c = this.state.clients;
          c.push(result);
          console.log(c);
          this.setState({clients: c});
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          // this.setState({
          //   isLoaded: true,
          //   error
          // });
        }
      )
  },

  render: function() {
    var list = [];
    for (let c of this.state.clients) {
      list.push(<ClientRow client={c} key={c.id} />);
    }

    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-1">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="col-md-4 text-center">id</th>
                  <th className="col-md-4 text-center">name</th>
                  <th className="col-md-4 text-center">pref</th>
                </tr>
              </thead>
              <tbody>
                <ClientRow client={{id: "a", name: 'hoge'}} />
                <ClientRow client={{id: "b", name: 'foo'}} />
                <ClientRow client={{id: "c", name: 'bar'}} />
                {list}
              </tbody>
            </table>
          </div>
          <GetClientButton handle={this.getClient} />
        </div>
      </div>
    );
  }
});

var ClientRow = createReactClass({
  render: function() {
    return (
      <tr>
        <td className="col-md-4">{this.props.client.id}</td>
        <td className="col-md-4">{this.props.client.name}</td>
        <td className="col-md-4">.col-md-4</td>
      </tr>
    );
  }
});

var GetClientButton = createReactClass({
  render: function() {
    return (
      <div className="btn btn-primary" onClick={this.props.handle}>get client</div>
    );
  }
});

