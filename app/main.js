// Include React
var React = require("react");

// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col m12">Test Header</div>
        </div>
      </div>
    );
  }
});
// Export the component back for use in other files
module.exports = Main;
