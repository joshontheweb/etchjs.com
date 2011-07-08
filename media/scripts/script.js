(function() {
    var article = Backbone.Model.extend({
        defaults: {
            title: 'Default Title',
            body: 'Default body text'
        }
    });

    var articleView = Backbone.View.extend({
        initialize: function() {
            _.bindAll(this, 'save')
            this.model.bind('save', this.save);
        },

        events: {
            'mousedown .editable': 'editableClick'
        },

        editableClick: etch.editableInit,

        save: function() {
            $(this.el).effect('highlight', {color: 'yellow'});
        }
        
    });

    $article = $('.article');
    var model = new article();
    var view = new articleView({model: model, el: $article[0], tagName: $article[0].tagName});
})()