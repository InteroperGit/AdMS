var React = require('react'),
    AccountTable = require('./accountTable');

var AccountManagement = React.createClass({
    getInitialState() {
        return {
        };
    },

    render() {
        var data = [
            {
                name: 'interoper',
                email: 'maxx.matveev@gmail.com'
            },
            {
                name: 'ilv_bagira',
                email: 'tvoi.dizain@gmail.com'
            }
        ];

        return (
            <div className="table-component">
                <AccountTable data={data} />
            </div>
        );
    }
});

module.exports = AccountManagement;