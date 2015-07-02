/**
 * Created by mmatveev on 30.06.15.
 */

var React = require('react'),
    AppRunner = require('components/app');

if (typeof window !== 'undefined') {
    window.onload = function() {
        AppRunner.run();
    };
}
