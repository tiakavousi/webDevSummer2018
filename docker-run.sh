#!/bin/bash

docker stop `docker ps -aq`
docker rm `docker ps -aq`

docker run \
--detach \
--name=mysql-db \
--env="MYSQL_ROOT_PASSWORD=123456" \
--publish 3306:3306 \
--volume=/Users/tayebekavousi/Desktop/webDev/webDev-fall-2021-server-java-Teya/mysql:/var/lib/mysql \
mysql