#!/bin/sh

docker build --progress=plain --no-cache -t test3 .

docker run --name sample -p 7878:7878 test3

docker rm sample