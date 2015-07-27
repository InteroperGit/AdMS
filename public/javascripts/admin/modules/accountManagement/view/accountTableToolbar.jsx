var React = require('react'),
    Bootstrap = require('react-bootstrap');

var AccountTableToolbar = React.createClass({
    render() {
        var ButtonToolbar = Bootstrap.ButtonToolbar,
            Button = Bootstrap.Button;
        return (
            <ButtonToolbar>
                <Button bsStyle='primary'>Add</Button>
                <Button bsStyle='danger'>Remove</Button>
            </ButtonToolbar>
        );
    }
});

module.exports = AccountTableToolbar;