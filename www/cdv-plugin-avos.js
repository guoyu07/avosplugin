var avosPlugin = {
    initialize: function(appId, clientKey, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'initialize',
            [appId, clientKey]
        );
    },

    getInstallationId: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'getInstallationId',
            []
        );
    },

    getInstallationObjectId: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'getInstallationObjectId',
            []
        );
    },

    getSubscriptions: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'getSubscriptions',
            []
        );
    },

    subscribe: function(channel, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'subscribe',
            [ channel ]
        );
    },

    unsubscribe: function(channel, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'unsubscribe',
            [ channel ]
        );
    }
    ,
    echo : function(str,successCallback,errorCallback){
      cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'echo',
            [ str ]
        );
    }
};
module.exports = avosPlugin;
