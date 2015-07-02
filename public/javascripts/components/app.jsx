var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    RouteHandler = Router.RouteHandler,
    Routes = require('./../routes'),
    Search = require('./search'),
    Result = require('./result');

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>AdMs</h1>
                <RouteHandler />
            </div>
        );
    }
});

var routes = (
    <Route handler={App}>
        <Route path="search" handler={Search} />
        <Route path="result" handler={Result} />
    </Route>
);

module.exports = {
    run: function() {
        Router.run(routes, function(Handler) {
            React.render(<Handler />, document.getElementById('container'));
        });
    },
    renderToString: function() {
        return React.renderToString(<App />);
    }
};
