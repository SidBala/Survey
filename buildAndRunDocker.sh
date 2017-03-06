#!/usr/bin/env bash
cd /home/ubuntu/HireSid
docker build . -t hiresid
docker kill $(docker ps -q) || true 
docker run -p 3000:80 -d hiresid