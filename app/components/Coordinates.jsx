var React = require('react');
var actions = require('actions');
var axios = require('axios');
var { connect } = require('react-redux');


var Coordinates = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    this.getCoords(location);

  },
  getCoords: function (userLocation) {
    let { dispatch } = this.props;

    var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${userLocation}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
    axios.get(query)
      .then((res) => {
        console.log(res.data.results[0].geometry.location);
        dispatch(actions.setLocation(res.data.results[0].geometry.location));
      })
      .catch((err) => {
        console.log(err)
      })
  },
  render: function () {
    let { currentLocation } = this.props;

    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input ref="location" type="text" />
          <button classLocation="btn" type="submit"> Enter </button>
        </form>

      </div>
    );
  }
});


export default connect(
  (state) => {
    return state;
  }
)(Coordinates);