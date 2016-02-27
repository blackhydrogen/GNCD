#!/bin/bash
cd ~/GNCD-pulled-repo

git pull
npm install
screen -S gncd-pull-repo -L -d -m node .