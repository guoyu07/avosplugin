#import <Cordova/CDV.h>
#import <AVOSCloud/AVOSCloud.h>

@interface CDVAvosPlugin: CDVPlugin
- (void)echo:(CDVInvokedUrlCommand*)command;
- (void)set_badge_num:(CDVInvokedUrlCommand*)command;
@end

