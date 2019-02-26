#!/bin/bash -x

echo 'var assets = {};' $(cat id.js xp.js training.js generate.js ) \
	 | js \
	 | pandoc -s  -f markdown - -o cv-md.html
