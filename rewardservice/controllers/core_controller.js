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
        var self = this;

        return App.RewardService.Models.Rewards.findAll(this.options)
            .done(function(rewards) {
                if (rewards) {
                    self.renderRewards(rewards);
                } else {
                    self.element.html('<h4>You are not eligible for any rewards</h4>');
                }
            })
            .fail(function(error) {
                self.renderError(error);
            });
    },

    renderRewards: function(rewards) {
        var rewardsContainer,
            self = this;

        this.element.html(this.view('//rewardservice/views/rewards.ejs'));
        rewardsContainer = this.element.children('.rewards');

        rewards.each(function(reward) {
            rewardsContainer.append(self.view('//rewardservice/views/reward.ejs', {
                reward: reward
            }));
        });
    }
});
