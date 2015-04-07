(function(rewardData, channelService, eligibilityService) {
    var getAccountEligibility = function(account_id) {
            return 'CUSTOMER_ELIGIBLE';
            return eligibilityService.isEligible(account_id);
        },
        getRewards = function(account_id) {
            var results;

            switch (getAccountEligibility(account_id)) {
                case 'CUSTOMER_ELIGIBLE':
                    results = {
                        status: 200,
                        message: 'success',
                        data: jQuery.makeArray(_getRewards(account_id))
                    };
                    break;
                case 'CUSTOMER_INELIGIBLE':
                    results = {
                        status: 200,
                        message: 'success',
                        data: null
                    };
                    break;
                case 'Technical failure exception':
                    results = {
                        status: 500,
                        message: 'Service technical failure',
                        data: null
                    };
                    break;
                default:
                    results = {
                        status: 400,
                        message: 'The supplied account number is invalid',
                        data: null
                    };
            }

            return results;
        },
        _getRewards = function(account_id) {
            var channels = channelService.getUserSubscriptions(account_id),
                rewards = {};

                channels.forEach(function(channel, index, channels){
                    if (channel in rewardData && rewardData[channel]) {
                        rewards[channel] = rewardData[channel];
                    }
                });

            return rewards;
        };

    can.fixture('GET rewards/all', function(params, response, settings, headers) {
        var data = getRewards(params.user_id);

        response(
            data.status,
            data.message,
            data.data
        );
    });
})(App.RewardService.Data.Rewards, App.ChannelService.Data, {});
