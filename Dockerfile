# syntax=docker/dockerfile-upstream:master-labs
FROM lupusmichaelis/alpine-lighttpd-secure:1.1.2

COPY security-header.conf /etc/lighttpd/
COPY . /var/www/localhost/htdocs
