(function() {
    var self = this;

    can.fixture('GET channels/all', function(params, response, settings, headers) {
        var channelSubscriptions = self.getUsersChannelSubscriptions(params.user_id);

        response(
            200,
            "success",
            Array.isArray(channelSubscriptions) ? channelSubscriptions : jQuery.makeArray(channelSubscriptions)
        );
    });
}.bind(App.ChannelService.Data))();
