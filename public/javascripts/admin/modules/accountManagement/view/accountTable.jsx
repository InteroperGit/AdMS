var React = require('react'),
    Bootstrap = require('react-bootstrap'),
    AccountTableRow = require('./accountTableRow'),
    AccountTableToolbar = require('./accountTableToolbar');

var AccountTable = React.createClass({
    render() {
        var Table = Bootstrap.Table,
            Panel = Bootstrap.Panel,
            rows = [];

        this.props.data.forEach(function(item, count) {
            rows.push(<AccountTableRow account={item} count={++count} key={++count} />)
        });

        return (
            <div className="table-component">
                <Panel>
                    <AccountTableToolbar />
                </Panel>
                <Panel>
                    <Table responsive striped bordered condensed hover>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Account</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                 </Panel>
            </div>
        );
    }
});

module.exports = AccountTable;