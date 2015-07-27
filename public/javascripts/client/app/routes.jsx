/**
 * Created by mmatveev on 25.07.15.
 */

//todo Реализовать в обычном объекте. Собирать в jsx в AdminApp
var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    Search = require('../modules/search/view/search'),
    Result = require('../modules/result/view/result');

module.exports = (
    <Route handler={App}>
        <DefaultRoute handler={Search}/>
        <Route path="search" handler={Search} />
        <Route path="result" handler={Result} />
    </Route>
);
