var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');


var Demo = React.createClass({
  onFormSubmit: function (e) {
    let {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.setName(this.refs.name.value))
    },
  render: function () {
    let {currentName} = this.props;
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input ref="name" type="text"/>
          <button className="btn" type="submit"> Enter </button>
        </form>
        
        <p>Hello {currentName}</p>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(Demo);