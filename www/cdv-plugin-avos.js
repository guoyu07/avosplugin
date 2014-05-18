var avosPlugin = {
    echo : function(str,successCallback,errorCallback){
      cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'echo',
            [ str ]
        );
    },
    set_badge_num : function(num,successCallback,errorCallback){
      num=num||0;
      cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'set_badge_num',
            [num]
        );
    },
    //获得install_id ， ios 获得 device_id 
    get_install_id:function(successCallback,errorCallback)
    {
        cordova.exec(
            successCallback,
            errorCallback,
            'AvosPlugin',
            'get_install_id',
            []
        );
    }

};
module.exports = avosPlugin;
