#!/bin/sh
URL=`gp url 8888`
PORT="8888"
IS_PROD="false"
GITPOD="true"

echo -e "\nHOST=$URL" >> .env
echo "PORT=\"$PORT\"" >> .env
echo "IS_PROD=\"$IS_PROD\"" >> .env
echo "GITPOD=\"$GITPOD\"" >> .env
