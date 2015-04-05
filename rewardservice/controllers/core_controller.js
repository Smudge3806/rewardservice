App.Abstract.Controllers.Service.extend('App.RewardService.Controllers.Core', {
    pluginName: 'RewardService'
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
        return App.RewardService.Models.Rewards.findAll(this.options)
            .done(function(rewards) {
                debugger;
            })
            .fail(function(error) {
                debugger;
            })
            .always(function() {
                debugger;
            });
    }
});
