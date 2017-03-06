#!/usr/bin/env bash
rsync -avz --exclude node_modules --exclude .git . ubuntu@54.202.103.71:/home/ubuntu/HireSid
ssh ubuntu@54.202.103.71 "bash /home/ubuntu/HireSid/buildAndRunDocker.sh"