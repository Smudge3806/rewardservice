(function(_channelData, _subscriptionData){
    var getUsersChannelSubscriptions = function(account_id) {
        var subscriptions = _subscriptionData[account_id] || [],
            channelSubscriptions = {};

        _channelData.forEach(function(channel, index, channels){
            channelSubscriptions[channel] = subscriptions.indexOf(channel) >= 0;
        });

        return channelSubscriptions;
    };

    can.fixture('GET channels/all', function(params, response, settings, headers) {
        var channelSubscriptions = getUsersChannelSubscriptions(params.user_id);

        response(
            200,
            "success",
            Array.isArray(channelSubscriptions) ? channelSubscriptions : jQuery.makeArray(channelSubscriptions)
        );
    });
})(App.ChannelService.Data.Channels, App.ChannelService.Data.Subscriptions);
