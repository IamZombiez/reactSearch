// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createElement({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>Test</strong></h2>
          <p><em>A journey through the whimsical world of React Routing</em></p>
          <hr />
          <p>
            <Link to="/Saved"><button className="btn btn-danger btn-lg">Saved Articles</button></Link>
          </p>
        </div>

        <div className="row">
          // Search
        </div>

        <div className="row">

          // Results
          {this.props.children}

        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
