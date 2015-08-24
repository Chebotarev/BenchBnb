var Index = React.createClass({

  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function () {
    BenchStore.addChangeListener(this.handleChange);
  },

  handleChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  render: function() {
    var benches = this.state.benches;
    return <main>
      <ul>{ benches.map(function (bench) {
        return <li key={ bench.id }>{ bench.description }</li>
      })
      }</ul>
    </main>;
  }
});
