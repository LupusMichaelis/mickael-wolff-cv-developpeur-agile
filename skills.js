(function() {
	assets.skill_levels =
		{ 'rookie': 0
		, 'warrior': 1
		, 'sensei': 2
		, 'wizard': 3
		};

	assets.skill_kinds =
		{ 'technology': 'Technologique'
		, 'soft': 'Humain'
		};

	assets.skill_language_levels =
		{ 'fluent': 'Courant'
		, 'beginner': 'Débutant'
		, 'native': 'Natif'
		};

	const sl = assets.skill_levels;
	const sk = assets.skill_kinds;
	const sll = assets.skill_language_levels;

	assets.skill_set =
		[
			{ 'category': 'Langues'
			, 'kind': sk.soft
			, 'content':
				[ { 'name': 'Français', 'level': sll.native }
				, { 'name': 'Anglais', 'level': sll.fluent }
				]
			}
		,
			{ 'category': 'Méthodes'
			, 'kind': sk.soft
			, 'content':
				[ { 'name': 'Scrum', 'level': sl.warrior }
				, { 'name': 'Kanban', 'level': sl.rookie }
				, { 'name': 'Waterfall', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Conception'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Diagrammes logiques', 'level': sl.warrior }
				, { 'name': 'Modélisation UML', 'level': sl.warrior }
				, { 'name': 'Mock up graphiques', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Paradigmes'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Design patterns', 'level': sl.wizard }
				, { 'name': 'SOLID', 'level': sl.wizard }
				, { 'name': 'TDD', 'level': sl.sensei }
				, { 'name': 'OOP', 'level': sl.sensei }
				, { 'name': 'Fonctionnel', 'level': sl.warrior }
				, { 'name': 'Procédural', 'level': sl.sensei }
				]
			}
		,
			{ 'category': 'Gestion de projet'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'JIRA', 'level': sl.warrior }
				, { 'name': 'Trac', 'level': sl.wizard }
				, { 'name': 'Mantis', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'C'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'C99', 'level': sl.warrior }
				, { 'name': 'POSIX', 'level': sl.warrior }
				, { 'name': 'GLib', 'level': sl.warrior }
				, { 'name': 'Gtk', 'level': sl.warrior }
				, { 'name': 'SDL', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'C++'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '11', 'level': sl.warrior }
				, { 'name': '14', 'level': sl.warrior }
				, { 'name': 'STL', 'level': sl.warrior }
				, { 'name': 'Boost', 'level': sl.warrior }
				, { 'name': 'CGreen', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'PHP'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '4', 'level': { 'user': sl.sensei, 'dev': sl.warrior, 'op': sl.sensei } }
				, { 'name': '5.3', 'level': { 'user': sl.sensei, 'dev': sl.warrior, 'op': sl.sensei } }
				, { 'name': 'Composer', 'level': sl.sensei }
				, { 'name': 'XDebug', 'level': { 'user': sl.sensei, 'dev': sl.rookie, 'op': sl.sensei } }
				, { 'name': 'Zend', 'level': sl.sensei }
				, { 'name': 'CodeIgniter', 'level': sl.sensei }
				, { 'name': 'Symfony', 'level': sl.sensei }
				, { 'name': 'PEAR', 'level': sl.warrior }
				, { 'name': 'Phing', 'level': sl.warrior }
				, { 'name': 'PHPUnit', 'level': sl.warrior }
				, { 'name': 'BeHat', 'level': sl.warrior }
				, { 'name': 'Doctrine', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Java'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '5', 'level': sl.rookie }
				, { 'name': 'Android SDK', 'level': sl.rookie }
				]
			}
		,
			{ 'category': 'Python'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '2.4', 'level': sl.warrior }
				, { 'name': '3', 'level': sl.rookie }
				, { 'name': 'Pip', 'level': sl.warrior }
				, { 'name': 'Paste', 'level': sl.warrior }
				, { 'name': 'Django', 'level': sl.warrior }
				, { 'name': 'Pylons', 'level': sl.warrior }
				, { 'name': 'SQLAlchemy', 'level': sl.warrior }
				, { 'name': 'Web.Py, Bottle', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'JavaScript'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Ecmascript', 'level': sl.warrior }
				, { 'name': 'CoffeeScript', 'level': sl.rookie }
				, { 'name': 'TypeScript', 'level': sl.warrior }
				, { 'name': 'React', 'level': sl.warrior }
				, { 'name': 'Redux', 'level': sl.rookie }
				, { 'name': 'jQuery', 'level': sl.warrior }
				, { 'name': 'jQuery UI', 'level': sl.warrior }
				, { 'name': 'jQuery Mobile', 'level': sl.warrior }
				, { 'name': 'Dojo', 'level': sl.warrior }
				, { 'name': 'Prototype', 'level': sl.warrior }
				, { 'name': 'Twitter\'s Bootstrap', 'level': sl.warrior }
				, { 'name': 'Node.js', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Autres langages'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Elm', 'level': sl.warrior }
				, { 'name': 'Haskell', 'level': sl.rookie }
				, { 'name': 'LUA', 'level': sl.rookie }
				, { 'name': 'Go', 'level': sl.rookie }
				, { 'name': 'Perl 5', 'level': sl.rookie }
				, { 'name': 'SQL', 'level': sl.warrior }
				, { 'name': 'Pascal Delphi', 'level': sl.rookie }
				, { 'name': 'GNU Assembleur', 'level': sl.rookie }
				, { 'name': 'Assembleur x86', 'level': sl.rookie }
				, { 'name': 'Regex POSIX', 'level': sl.sensei }
				, { 'name': 'Regex PCRE', 'level': sl.sensei }
				]
			}
		,
			{ 'category': 'Formats'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'JSON', 'level': sl.wizard }
				, { 'name': 'Markdown', 'level': sl.warrior }
				, { 'name': 'Restructured', 'level': sl.rookie }
				, { 'name': 'Javadoc', 'level': sl.warrior }
				, { 'name': 'Swagger', 'level': sl.rookie }
				, { 'name': 'Latex', 'level': sl.warrior }
				, { 'name': 'XML', 'level': sl.warrior }
				, { 'name': 'XSLT', 'level': sl.warrior }
				, { 'name': 'XPath', 'level': sl.warrior }
				, { 'name': 'DTD', 'level': sl.warrior }
				, { 'name': 'XShema', 'level': sl.rookie }
				, { 'name': 'SVG', 'level': sl.rookie }
				, { 'name': 'XML', 'level': sl.warrior }
				, { 'name': 'HTML 4/5', 'level': sl.warrior }
				, { 'name': 'CSS', 'level': sl.warrior }
				, { 'name': 'Sass', 'level': sl.warrior }
				, { 'name': 'SCSS', 'level': sl.warrior }
				, { 'name': 'Bulma', 'level': sl.warrior }
				, { 'name': 'Mustache', 'level': sl.sensei }
				, { 'name': 'Jinja2', 'level': sl.warrior }
				, { 'name': 'Twig', 'level': sl.warrior }
				, { 'name': 'YAML', 'level': sl.warrior }
				, { 'name': 'ASCII', 'level': sl.wizard }
				, { 'name': 'Unicode', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Systèmes'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Debian GNU/Linux', 'level': { 'user': sl.wizard, 'dev': sl.warrior, 'op': sl.warrior } }
				, { 'name': 'RedHat GNU/Linux', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.warrior } }
				//, { 'name': 'Microsoft Windows XP', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.rookie } }
				//, { 'name': 'Microsoft Windows 7', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.rookie } }
				//, { 'name': 'Microsoft Windows 8', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.rookie } }
				, { 'name': 'Microsoft Windows 10', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.rookie } }
				//, { 'name': 'Microsoft Windows 2012', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.rookie } }
				//, { 'name': 'Microsoft Windows 2016', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.rookie } }
				, { 'name': 'Cisco IOS', 'level': { 'user': sl.rookie, 'op': sl.rookie } }
				, { 'name': 'FreeBSD', 'level': { 'user': sl.warrior, 'dev': sl.warrior, 'op': sl.warrior } }
				, { 'name': 'Mac OS X', 'level': { 'user': sl.rookie, 'dev': sl.rookie } }
				, { 'name': 'Google Android', 'level': { 'user': sl.warrior, 'dev': sl.rookie } }
				]
			}
		,
			{ 'category': 'Réseau'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'OSI', 'level': sl.sensei }
				, { 'name': 'IPv4', 'level': sl.wizard }
				, { 'name': 'IPv6', 'level': sl.warrior }
				, { 'name': 'TCP', 'level': sl.warrior }
				, { 'name': 'UDP', 'level': sl.warrior }
				, { 'name': 'ICMP', 'level': sl.warrior }
				, { 'name': 'DHCP', 'level': sl.warrior }
				, { 'name': 'RIP', 'level': sl.rookie }
				, { 'name': 'OSPF', 'level': sl.rookie }
				, { 'name': 'Ethernet', 'level': sl.warrior }
				, { 'name': 'Wireless', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'IDE'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Vim', 'level': sl.wizard }
				, { 'name': 'Notepad++', 'level': sl.warrior }
				, { 'name': 'Microsoft Visual Studio', 'level': sl.rookie }
				, { 'name': 'Netbeans', 'level': sl.rookie }
				, { 'name': 'Eclipse', 'level': sl.rookie }
				, { 'name': 'Android Studio', 'level': sl.rookie }
				]
			}
		,
			{ 'category': 'Gestion des sources'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Git', 'level': sl.wizard }
				, { 'name': 'Subversion', 'level': sl.wizard }
				, { 'name': 'Mercurial', 'level': sl.rookie }
				]
			}
		,
			{ 'category': 'Outils divers'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'GNU Make', 'level': sl.wizard }
				, { 'name': 'CMake', 'level': sl.rookie }
				, { 'name': 'Ant', 'level': sl.rookie }
				, { 'name': 'Autotools', 'level': sl.warrior }
				, { 'name': 'sed', 'level': sl.warrior }
				, { 'name': 'awk', 'level': sl.warrior }
				, { 'name': 'Oracle VirtualBox', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Base de données'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'MySQL MyISAM', 'level': { 'user': sl.wizard, 'dev': sl.wizard, 'op': sl.wizard}}
				, { 'name': 'MariaDB InnoDB', 'level': { 'user': sl.warrior, 'dev': sl.rookie, 'op': sl.warrior}}
				, { 'name': 'PostgreSQL', 'level': { 'user': sl.warrior, 'op': sl.rookie}}
				, { 'name': 'MongoDB', 'level': { 'user': sl.warrior, 'op': sl.warrior}}
				, { 'name': 'Cassandra', 'level': { 'user': sl.warrior, 'op': sl.warrior}}
				, { 'name': 'SQLite', 'level': sl.warrior}
				, { 'name': 'BerkleyDB', 'level': sl.warrior}
				]
			}
		,
			{ 'category': 'Déploiement'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'KVM', 'level': sl.warrior }
				, { 'name': 'VMWare', 'level': sl.rookie }
				, { 'name': 'Vagrant', 'level': sl.warrior }
				, { 'name': 'Docker', 'level': sl.warrior }
				, { 'name': 'Kubernetes', 'level': sl.rookie }
				, { 'name': 'Ansible', 'level': sl.rookie }
				, { 'name': 'Salt', 'level': sl.rookie }
				]
			}
		,
			{ 'category': 'Scripting'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Bash', 'level': sl.wizard }
				, { 'name': 'Csh', 'level': sl.warrior }
				, { 'name': 'Powershell', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Services réseau'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Apache', 'level': sl.wizard }
				, { 'name': 'Lighttpd', 'level': sl.warrior }
				, { 'name': 'Squid', 'level': sl.warrior }
				, { 'name': 'Bind', 'level': sl.warrior }
				, { 'name': 'DNSMasq', 'level': sl.warrior }
				, { 'name': 'Samba', 'level': sl.warrior }
				, { 'name': 'ProFTPd', 'level': sl.warrior }
				, { 'name': 'SSH', 'level': sl.warrior }
				, { 'name': 'X.org', 'level': sl.warrior }
				, { 'name': 'Memcached', 'level': sl.wizard }
				]
			}
		,
			{ 'category': 'Gestion des courriels'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Postfix', 'level': sl.warrior }
				, { 'name': 'Courier', 'level': sl.warrior }
				, { 'name': 'ClamAV', 'level': sl.warrior }
				, { 'name': 'DKIM', 'level': sl.warrior }
				, { 'name': 'Microsoft SNDS', 'level': sl.warrior }
				]
			}
		,
			{ 'category': 'Bureautique'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Libre Office', 'level': sl.warrior }
				, { 'name': 'The GIMP', 'level': sl.warrior }
				, { 'name': 'Inkscape', 'level': sl.warrior }
				]
			}
		];
})();
