(function(_channelData){
    _channelData.Channels = [
        'SPORTS',
        'KIDS',
        'MUSIC',
        'NEWS',
        'MOVIES'
    ];

    _channelData.Subscriptions = {
        '1001': ['SPORTS', 'KIDS', 'MUSIC', 'NEWS', 'SPORTS'],
        '1002': ['KIDS', 'NEWS']
    };
})(App.ChannelService.Data);
