var React = require('react');
    Bootstrap = require('react-bootstrap');

var Search = React.createClass({
    getInitialState() {
        return {
            search: ''
        };
    },

    render() {
        var Alert = Bootstrap.Alert,
            Button = Bootstrap.Button,
            Input = Bootstrap.Input;
        return (
            <div className="search-component">
                <Input
                    type='text'
                    value={this.state.value}
                    placeholder='Enter text'
                    ref='input'
                    groupClassName='group-class'
                    labelClassName='label-class'
                    onChange={this.changeSearch}
                />
                <p><span>You are searching for: <strong>{this.state.search}</strong></span></p>
                <Alert bsStyle='danger'>
                    <h4>Oh snap! You got an error!</h4>
                    <p>Change this and that and try again.</p>
                    <p>
                        <Button bsStyle='danger'>Take this action</Button>
                        <span> or </span>
                        <Button>Hide Alert</Button>
                    </p>
                </Alert>
            </div>
        );
    },

    changeSearch(event) {
        console.log(event.target);
        var text = event.target.value;

        this.setState({
            search: text
        });
    }
});

module.exports = Search;