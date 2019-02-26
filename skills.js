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

	var sl = assets.skill_levels;
	var sk = assets.skill_kinds;
	var sll = assets.skill_language_levels;

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
				[ { 'name': 'Scrum', 'level': 'warrior' }
				, { 'name': 'Waterfall', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Conception'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Diagrammes logiques', 'level': 'warrior' }
				, { 'name': 'Modélisation UML', 'level': 'warrior' }
				, { 'name': 'Mock up graphiques', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Paradigmes'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Design patterns', 'level': 'wizard' }
				, { 'name': 'Loi de Demeter', 'level': 'wizard' }
				, { 'name': 'TDD', 'level': 'sensei' }
				, { 'name': 'OOP', 'level': 'sensei' }
				, { 'name': 'Fonctionnel', 'level': 'warrior' }
				, { 'name': 'Procédural', 'level': 'sensei' }
				]
			}
		,
			{ 'category': 'Gestion de projet'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'JIRA', 'level': 'warrior' }
				, { 'name': 'Trac', 'level': 'wizard' }
				, { 'name': 'Mantis', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'C'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'C99', 'level': 'warrior' }
				, { 'name': 'POSIX', 'level': 'warrior' }
				, { 'name': 'GLib', 'level': 'warrior' }
				, { 'name': 'Gtk', 'level': 'warrior' }
				, { 'name': 'SDL', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'C++'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '11', 'level': 'warrior' }
				, { 'name': '14', 'level': 'warrior' }
				, { 'name': 'STL', 'level': 'warrior' }
				, { 'name': 'Boost', 'level': 'warrior' }
				, { 'name': 'CGreen', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'PHP'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '4', 'level': { 'user': 'sensei', 'dev': 'warrior', 'op': 'sensei' } }
				, { 'name': '5.3', 'level': { 'user': 'sensei', 'dev': 'warrior', 'op': 'sensei' } }
				, { 'name': 'Composer', 'level': 'sensei' }
				, { 'name': 'XDebug', 'level': { 'user': 'sensei', 'dev': 'rookie', 'op': 'sensei' } }
				, { 'name': 'Zend 1', 'level': 'sensei' }
				, { 'name': 'Zend 2', 'level': 'sensei' }
				, { 'name': 'CodeIgniter', 'level': 'sensei' }
				, { 'name': 'Symfony', 'level': 'sensei' }
				, { 'name': 'PEAR', 'level': 'warrior' }
				, { 'name': 'Phing', 'level': 'warrior' }
				, { 'name': 'PHPUnit', 'level': 'warrior' }
				, { 'name': 'BeHat', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Java'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '5', 'level': 'rookie' }
				, { 'name': 'Android SDK', 'level': 'rookie' }
				]
			}
		,
			{ 'category': 'Python'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': '2.4', 'level': 'warrior' }
				, { 'name': '3', 'level': 'rookie' }
				, { 'name': 'Pip', 'level': 'warrior' }
				, { 'name': 'Paste', 'level': 'warrior' }
				, { 'name': 'Django', 'level': 'warrior' }
				, { 'name': 'Pylons', 'level': 'warrior' }
				, { 'name': 'SQLAlchemy', 'level': 'warrior' }
				, { 'name': 'Web.Py, Bottle', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'JavaScript'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Ecmascript 5.1', 'level': 'warrior' }
				, { 'name': 'jQuery', 'level': 'warrior' }
				, { 'name': 'jQuery UI', 'level': 'warrior' }
				, { 'name': 'jQuery Mobile', 'level': 'warrior' }
				, { 'name': 'Dojo', 'level': 'warrior' }
				, { 'name': 'Prototype', 'level': 'warrior' }
				, { 'name': 'Twitter\'s bootstrap', 'level': 'warrior' }
				, { 'name': 'Node.js', 'level': 'warrior' }
				, { 'name': 'Coffeescript', 'level': 'warrior' }
				, { 'name': 'TypeScript', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Autres langages'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Elm', 'level': 'rookie' }
				, { 'name': 'Haskell', 'level': 'rookie' }
				, { 'name': 'Perl 5', 'level': 'rookie' }
				, { 'name': 'SQL', 'level': 'warrior' }
				, { 'name': 'Pascal Delphi', 'level': 'rookie' }
				, { 'name': 'GNU Assembleur', 'level': 'rookie' }
				, { 'name': 'Assembleur x86', 'level': 'rookie' }
				, { 'name': 'Regex POSIX', 'level': 'sensei' }
				, { 'name': 'Regex PCRE', 'level': 'sensei' }
				]
			}
		,
			{ 'category': 'Formats'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'JSON', 'level': 'wizard' }
				, { 'name': 'Markdown', 'level': 'warrior' }
				, { 'name': 'Javadoc', 'level': 'warrior' }
				, { 'name': 'Swagger', 'level': 'rookie' }
				, { 'name': 'Latex', 'level': 'warrior' }
				, { 'name': 'XML', 'level': 'warrior' }
				, { 'name': 'XSLT', 'level': 'warrior' }
				, { 'name': 'XPath', 'level': 'warrior' }
				, { 'name': 'DTD', 'level': 'warrior' }
				, { 'name': 'XShema', 'level': 'rookie' }
				, { 'name': 'SVG', 'level': 'rookie' }
				, { 'name': 'XML', 'level': 'warrior' }
				, { 'name': 'HTML 4', 'level': 'warrior' }
				, { 'name': 'HTML 5', 'level': 'rookie' }
				, { 'name': 'CSS', 'level': 'warrior' }
				, { 'name': 'SCSS', 'level': 'warrior' }
				, { 'name': 'Bulma', 'level': 'warrior' }
				, { 'name': 'Mustache', 'level': 'sensei' }
				, { 'name': 'Jinja2', 'level': 'warrior' }
				, { 'name': 'YAML', 'level': 'warrior' }
				, { 'name': 'ASCII', 'level': 'wizard' }
				, { 'name': 'Unicode', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Systèmes'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Debian GNU/Linux', 'level': { 'user': 'wizard', 'dev': 'warrior', 'op': 'warrior' } }
				, { 'name': 'RedHat GNU/Linux', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'warrior' } }
				, { 'name': 'Microsoft Windows XP', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'rookie' } }
				, { 'name': 'Microsoft Windows 7', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'rookie' } }
				, { 'name': 'Microsoft Windows 8', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'rookie' } }
				, { 'name': 'Microsoft Windows 10', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'rookie' } }
				, { 'name': 'Microsoft Windows 2012', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'rookie' } }
				, { 'name': 'Microsoft Windows 2016', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'rookie' } }
				, { 'name': 'Cisco IOS', 'level': { 'user': 'rookie', 'op': 'rookie' } }
				, { 'name': 'FreeBSD', 'level': { 'user': 'warrior', 'dev': 'warrior', 'op': 'warrior' } }
				, { 'name': 'Mac OS X', 'level': { 'user': 'rookie', 'dev': 'rookie' } }
				, { 'name': 'Google Android', 'level': { 'user': 'warrior', 'dev': 'rookie' } }
				]
			}
		,
			{ 'category': 'Réseau'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'OSI', 'level': 'sensei' }
				, { 'name': 'IPv4', 'level': 'wizard' }
				, { 'name': 'IPv6', 'level': 'warrior' }
				, { 'name': 'TCP', 'level': 'warrior' }
				, { 'name': 'UDP', 'level': 'warrior' }
				, { 'name': 'ICMP', 'level': 'warrior' }
				, { 'name': 'DHCP', 'level': 'warrior' }
				, { 'name': 'RIP', 'level': 'rookie' }
				, { 'name': 'OSPF', 'level': 'rookie' }
				, { 'name': 'Ethernet', 'level': 'warrior' }
				, { 'name': 'Wireless', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'IDE'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Vim', 'level': 'wizard' }
				, { 'name': 'Notepad++', 'level': 'warrior' }
				, { 'name': 'Microsoft Visual Studio', 'level': 'rookie' }
				, { 'name': 'Netbeans', 'level': 'rookie' }
				, { 'name': 'Eclipse', 'level': 'rookie' }
				, { 'name': 'Android Studio', 'level': 'rookie' }
				]
			}
		,
			{ 'category': 'Gestion des sources'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Git', 'level': 'wizard' }
				, { 'name': 'Subversion', 'level': 'wizard' }
				, { 'name': 'Mercurial', 'level': 'rookie' }
				]
			}
		,
			{ 'category': 'Outils divers'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'GNU Make', 'level': 'wizard' }
				, { 'name': 'CMake', 'level': 'rookie' }
				, { 'name': 'Ant', 'level': 'rookie' }
				, { 'name': 'Autotools', 'level': 'warrior' }
				, { 'name': 'sed', 'level': 'warrior' }
				, { 'name': 'awk', 'level': 'warrior' }
				, { 'name': 'Oracle VirtualBox', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Base de données'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'MySQL MyISAM', 'level': { 'user': 'wizard', 'dev': 'wizard', 'op': 'wizard'}}
				, { 'name': 'MariaDB XtraDB', 'level': { 'user': 'warrior', 'dev': 'rookie', 'op': 'warrior'}}
				, { 'name': 'PostgreSQL', 'level': { 'user': 'warrior', 'op': 'rookie'}}
				, { 'name': 'MongoDB', 'level': { 'user': 'warrior', 'op': 'warrior'}}
				, { 'name': 'Cassandra', 'level': { 'user': 'warrior', 'op': 'warrior'}}
				, { 'name': 'SQLite', 'level': 'warrior'}
				, { 'name': 'BerkleyDB', 'level': 'warrior'}
				]
			}
		,
			{ 'category': 'Déploiement'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'KVM', 'level': 'warrior' }
				, { 'name': 'VMWare', 'level': 'rookie' }
				, { 'name': 'Vagrant', 'level': 'warrior' }
				, { 'name': 'Docker', 'level': 'warrior' }
				, { 'name': 'Ansible', 'level': 'warrior' }
				, { 'name': 'Salt', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Scripting'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Bash', 'level': 'wizard' }
				, { 'name': 'Csh', 'level': 'warrior' }
				, { 'name': 'Powershell', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Services réseau'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Apache', 'level': 'wizard' }
				, { 'name': 'Lighttpd', 'level': 'warrior' }
				, { 'name': 'Squid', 'level': 'warrior' }
				, { 'name': 'Bind', 'level': 'warrior' }
				, { 'name': 'DNSMasq', 'level': 'warrior' }
				, { 'name': 'Samba', 'level': 'warrior' }
				, { 'name': 'ProFTPd', 'level': 'warrior' }
				, { 'name': 'SSH', 'level': 'warrior' }
				, { 'name': 'X.org', 'level': 'warrior' }
				, { 'name': 'Memcached', 'level': 'wizard' }
				]
			}
		,
			{ 'category': 'Gestion des courriels'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Postfix', 'level': 'warrior' }
				, { 'name': 'Courier', 'level': 'warrior' }
				, { 'name': 'ClamAV', 'level': 'warrior' }
				, { 'name': 'DKIM', 'level': 'warrior' }
				, { 'name': 'Microsoft SNDS', 'level': 'warrior' }
				]
			}
		,
			{ 'category': 'Bureautique'
			, 'kind': sk.technology
			, 'content':
				[ { 'name': 'Libre Office', 'level': 'warrior' }
				, { 'name': 'The GIMP', 'level': 'warrior' }
				, { 'name': 'Inkscape', 'level': 'warrior' }
				]
			}
		];
})();
