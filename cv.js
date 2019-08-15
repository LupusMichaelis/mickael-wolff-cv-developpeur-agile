assets.xp = assets.xp
	.filter(function (xp)
	{
		return xp.starred;
	})
	.map(function (xp)
	{
		if(xp.company.location.country == assets.id.location.country)
			delete xp.company.location.country;

		return xp;
	});

assets.training = assets.training
	.map(function (training)
	{
		if(training.organism.location.country == assets.id.location.country)
			delete training.organism.location.country;

		return training;
	});

assets.skill_set = assets.skill_set
	.map(function (skill)
	{
		if(assets.skill_kinds.soft === skill.kind)
			return skill;

		skill.content = skill.content
			.filter(function (one)
		{
			return one.level > assets.skill_levels.rookie
				|| one.level.dev > assets.skill_levels.rookie
				;
		});
		return skill;
	})
	.filter(function (skill)
	{
		return skill.content && skill.content.length > 0;
	});

document.title = 'CV de ' + assets.id.name + ', ' + assets.id.role + '.';
$(document.head)
	.append($('<meta>', { name: 'description', 'content': 'CV'}))
	.append($('<meta>', { name: 'author', 'content': assets.id.name}))
	;

$([
	{ 'template': '#header-template'
	, 'target': '#header-canvas'
	}
	,
	{ 'template': '#xp-template'
	, 'target': '#xp-canvas'
	}
	,
	{ 'template': '#skill-template'
	, 'target': '#skill-canvas'
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
		$(element.target).replaceWith(rendered);
	}
);
