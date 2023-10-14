#!/bin/sh


pwd

cd /app

ls -al
echo '-----------------------------------------------------'
ls /app -al
echo '-----------------------------------------------------'

yarn install --production
yarn start