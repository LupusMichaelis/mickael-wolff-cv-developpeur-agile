var template = $('#header-template').html();
Mustache.parse(template);
var rendered = Mustache.render(template, id);
$('#header-canvas').html(rendered);
