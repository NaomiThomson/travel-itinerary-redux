var React = require('react');
var actions = require('actions');
var axios = require('axios');
var { connect } = require('react-redux');


var Coordinates = React.createClass({
  onFormSubmit: function (e) {
    let { dispatch } = this.props;
    e.preventDefault();

    dispatch(actions.setLocation(this.refs.location.value));
    this.getCoords(location);
  },
  getCoords: function (userLocation) {
    var query = `https://maps.googleapis.com/maps/api/geocode/json?address=${userLocation}&key=AIzaSyAr02UkNoe3UCCVrkyMNFWKA_PtseA-9gc`;
    axios.get(query)
      .then((res) => {
        console.log(res.data.results[0].geometry.location);
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

        <p>{currentLocation}</p>
      </div>
    );
  }
});


export default connect(
  (state) => {
    return state;
  }
)(Coordinates);