$([
	{ 'template': '#header-template'
	, 'target': '#header-canvas'
	}
	,
	{ 'template': '#training-template'
	, 'target': '#training-canvas'
	}
]).each(function (index, element)
	{
		var template = $(element.template).html();
		Mustache.parse(template);
		var rendered = Mustache.render(template, assets);
		$(element.target).html(rendered);
	}
);
