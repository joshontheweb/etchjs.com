(function() {
    var article = Backbone.Model.extend({
        defaults: {
            title: 'Default Title',
            body: 'Default body text'
        }
    });

    var articleView = Backbone.View.extend({
        initialize: function() {
        
        },

        events: {
            'mousedown .editable': 'editableClick'
        },

        editableClick: etch.editableInit
        
    });

    $article = $('article');
    var model = new article();
    var view = new articleView({model: model, el: $article[0], tagName: $article[0].tagName});
})()