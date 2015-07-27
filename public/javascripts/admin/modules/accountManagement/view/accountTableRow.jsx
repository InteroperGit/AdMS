var React = require('react');

var AccountTableRow = React.createClass({
    render() {
        return (
            <tr>
                <td>{this.props.count}</td>
                <td>{this.props.account.name}</td>
                <td>{this.props.account.email}</td>
            </tr>
         );
    }
});

module.exports = AccountTableRow;

