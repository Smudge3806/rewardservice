steal(
    '//can/can.js',
    '//can/util/json.js',
    '//can/util/mvc.js',
    '//can/util/fixture/fixture.js',
    '//sprintf/src/sprintf.js'
).then(
    '//lib/lib.js'
).then(
    '//bootstrap/bootstrap.css'
).then(
    '//bootstrap/bootstrap.js'
).then(
    './controllers/controllers.js',
    './views/views.js'
).then(function(){
    new App.Os.Controllers.Core(jQuery('body'), {});
});
