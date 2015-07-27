var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler,
    //Routes = require('./../routes'),
    Bootstrap = require('react-bootstrap'),
    AccountManagement = require('./../../modules/accountManagement/view/accountManagement');

var App = React.createClass({
    render() {
        var Navbar = Bootstrap.Navbar,
            Nav = Bootstrap.Nav,
            NavItem = Bootstrap.NavItem;

        return (
            <div>
                <Navbar brand="Рекламастер">
                    <Nav>
                        <NavItem href="#account">
                            Accounts
                        </NavItem>
                        <NavItem href="#test">
                            Tasks
                        </NavItem>
                    </Nav>
                </Navbar>
                <RouteHandler />
            </div>
        );
    }
});

var routes = (
    <Route handler={App}>
        <Route path="account" handler={AccountManagement} />
    </Route>
);

module.exports = {
    run: function() {
        Router.run(routes, function(Root) {
            React.render(<Root />, document.getElementById('container'));
        });
    },
    renderToString: function(callback) {
        Router.run(routes, function (Root) {
            var result = React.renderToString(<Root />);
            callback(result);
        });
    }
};
