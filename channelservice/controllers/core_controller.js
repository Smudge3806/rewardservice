App.Abstract.Controllers.Service.extend('App.ChannelService.Controllers.Core', {
    pluginName: 'ChannelService'
}, {
    init: function() {
        this.main();
    },

    update: function(options) {
        jQuery.extend(true, this.options, (options || {}));
        this.main();
    },

    main: function() {
        this.render();
        if (this.options.user_id) {
            this.getInfo();
        }
    },

    getInfo: function() {
        var self = this;

        return App.ChannelService.Models.Channel.findAll(this.options)
            .done(function(channels){
                self.render(channels);
            }).fail(function(error){
                self.renderError(error);
            });
    }
});
