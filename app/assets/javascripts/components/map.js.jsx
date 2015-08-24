var Map = React.createClass({

  componentDidMount: function(){
    var map = React.findDOMNode(this.refs.googlemap);
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(map, mapOptions);
    BenchStore.addChangeListener(this.handleChange);
    this.map.addListener("idle", this.idle);
  },

  idle: function () {
    var LongLat = this.map.getBounds();

    var northEast = {
      lat: LongLat.getNorthEast().G,
      lng: LongLat.getNorthEast().K
    }

    var southWest = {
      lat: LongLat.getSouthWest().G,
      lng: LongLat.getSouthWest().K
    }

    ApiUtil.fetchBenches({data: { bounds: {northEast: northEast, southWest: southWest }} });
  },

  handleChange: function () {
    var that = this;
    BenchStore.all().forEach(function (bench) {
      new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: that.map,
        title: bench.description
      });
    });
  },

  render: function() {
    return <div className="map" ref="googlemap" />;
  }
});
