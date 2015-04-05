can.Model.extend('App.RewardService.Models.Rewards', {
    findAll: function(params) {
        var self = this;

        return jQuery.ajax('rewards/all', params, {})
            .pipe(function(rewards, status){
                return self.models(rewards);
            });
    }
}, {

});
