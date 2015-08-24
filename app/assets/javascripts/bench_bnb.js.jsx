$(document).ready(function () {
    React.render(
      <Index benches={ BenchStore.all() }/>,
      document.getElementById('content')
    );
  }
);
