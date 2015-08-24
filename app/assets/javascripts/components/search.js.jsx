var Search = React.createClass({

  render: function() {
    return <div>
      <Index benches={ BenchStore.all() }/>
      <Map />
    </div>;
  }
});
