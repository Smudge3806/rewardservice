App.Abstract.Controllers.Service.extend('App.RewardService.Controllers.Core', {
    pluginName: 'RewardService'
}, {
    init: function() {
        this.elements = {};
        this.main();
    },

    update: function(options) {
        jQuery.extend(true, this.options, (options || {}));
        this.main();
    },

    main: function() {
        this.render().done(function(){
            this.elements.body = this.element.find('.body');
        }.bind(this));
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
                    self.elements.body.html('<h4>You are not eligible for any rewards</h4>');
                }
            })
            .fail(function(error) {
                self.renderError(error);
            });
    },

    renderRewards: function(rewards) {
        var rewardsContainer,
            self = this;

        this.elements.body.html(this.view('//rewardservice/views/rewards.ejs'));
        rewardsContainer = this.elements.body.children('.rewards');

        rewards.each(function(reward) {
            rewardsContainer.append(self.view('//rewardservice/views/reward.ejs', {
                reward: reward
            }));
        });
    }
});
