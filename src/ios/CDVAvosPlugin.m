#import "CDVAvosPlugin.h"
#import <Cordova/CDV.h>
#import <AVOSCloud/AVOSCloud.h>

@implementation CDVAvosPlugin

- (void)echo:(CDVInvokedUrlCommand*)command
{
    CDVPluginResult* pluginResult = nil;
    NSString* echo = [command.arguments objectAtIndex:0];

    if (echo != nil && [echo length] > 0) {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:echo];
    } else {
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
    }

    [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
}

- (void)set_badge_num:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        CDVPluginResult* pluginResult = nil;
        //TODO 不知道怎么处理传参
        /*
         NSString *badgestr = [command.arguments objectAtIndex:0];
         int badge =(int)badgestr;
         */
        //清除通知图标
        AVInstallation *currentInstallation = [AVInstallation currentInstallation];
        currentInstallation.badge = 0;
        [currentInstallation saveEventually];
        [[UIApplication sharedApplication] setApplicationIconBadgeNumber:0];
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}

//获得install_id
- (void)get_install_id:(CDVInvokedUrlCommand*)command
{
    [self.commandDelegate runInBackground:^{
        CDVPluginResult* pluginResult = nil;
        AVInstallation *currentInstallation = [AVInstallation currentInstallation];
        NSString *installationId = currentInstallation.deviceToken;
        pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:installationId];
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


@end
