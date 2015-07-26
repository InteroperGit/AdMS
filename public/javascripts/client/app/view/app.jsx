var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    //Routes = require('./../routes'),
    Search = require('./../../modules/search/view/search'),
    Result = require('./../../modules/result/view/result');

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>AdMs:</h1>
                <RouteHandler />
            </div>
        );
    }
});

var routes = (
    <Route handler={App}>
        <DefaultRoute handler={Search}/>
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
    renderToString: function(callback) {
        Router.run(routes, function (Root) {
            var result = React.renderToString(<Root />);
            callback(result);
        });
    }
};
