var React = require('react');
var {Link, IndexLink} = require('react-router');

var Main = (props) => {
  return (
    <div>
      <IndexLink to="/" className="nav-link">
        <h1 className="title animated fadeIn"> Main </h1>
      </IndexLink>
      <div className="container">
        {props.children}
      </div>
    </div>
  );
}

module.exports = Main;