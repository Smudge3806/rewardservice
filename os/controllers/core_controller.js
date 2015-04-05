App.Abstract.Controllers.Core.extend('App.Os.Controllers.Core', {

}, {
    init: function() {
        try {
            this.initAttributes();
            this.render();
        } catch (error) {
            debugger;
        }
    },

    initAttributes: function() {
        this.elements = [];
    },

    render: function() {
        this.renderNavigation();
        this.renderServiceContainer();
    },

    renderNavigation: function() {
        this.element.append(this.view('//os/views/navigation.ejs'));
    },

    renderServiceContainer: function() {}
});
