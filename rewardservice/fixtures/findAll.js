(function() {
    var data = {
        '1001': [
            {
                title: 'CHAMPIONS_LEAGUE_FINAL_TICKET'
            }
        ]
    };

    can.fixture('GET rewards/all', function(original, response, settings, headers) {
        response(
            200,
            "success",
            data[original.user_id]
        );
    });
})();
