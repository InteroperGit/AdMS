/**
 * Created by mmatveev on 30.06.15.
 */

var AppRunner = require('./view/app');

if (typeof window !== 'undefined') {
    window.onload = function() {
        AppRunner.run();
    };
}
