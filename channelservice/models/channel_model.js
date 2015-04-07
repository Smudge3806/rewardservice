can.Model.extend('App.ChannelService.Models.Channel', {
    findAll: function(params) {
        var self = this;

        return jQuery.ajax('channels/all', params, {})
            .pipe(function(channels, status){
                return self.models(channels);
            });
    }
}, {

});
