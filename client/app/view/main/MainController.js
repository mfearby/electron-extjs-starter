/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('StarterApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you really sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {

            fetch('mrf://foo')
                .then(resp => resp.json())
                .then(o => {
                    console.log(o); // { hello: 'world' }
                    Ext.Msg.alert('Get foo', 'Hello ' + o.hello);
                }); 

            // return;

            // console.log('sending message...');
            // const electron = require('electron');
            // const { ipcRenderer } = electron;
            // ipcRenderer.send('asdf', 'asdfasdfasdf');
        }
    }
});
