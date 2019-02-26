var fs = require('fs');

var vm = require('vm');
var include = function(path) {
    var code = fs.readFileSync(path);
    vm.runInThisContext(code, path);
}.bind(this);

var assets = {};

include(__dirname + '/id.js');
include(__dirname + '/xp.js');
include(__dirname + '/skills.js');

var out = [];
out.push('# ' + assets.id.name + ', ' + assets.id.role);
out.push('');
out.push('## Expérience');
out.push('');
out.push('|     |     |     |     |     |');
out.push('| --- | --- | --- | --- | --- |');

out = out.concat(assets.xp.map(function(xp)
{
	var out = ['| '];

	var period = xp.period.start;

	if(xp.period.end)
		period += ' – ' + xp.period.end;

	out.push(period + ' | ');
	out.push(xp.role + ' | ');

	var company = xp.company.name + ', ' + xp.company.location.city;

	if(xp.company.location.country != assets.id.location.country)
		company += ', ' + xp.company.location.country;

	out.push(company + ' | ');
	out.push(xp.company.business + ' | ');

	if(xp.skills && xp.skills.length)
		out.push('*' + xp.skills.join(', ') + '*');

	out.push('| ');

	return out.join('');
}), [ '' ]);

process.stdout.write(out.join('\n'));
