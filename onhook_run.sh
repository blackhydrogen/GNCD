#!/bin/bash
cd ~/GNCD-pulled-repo

git pull
npm install
screen -S gncd-pulled-repo -X quit
screen -S gncd-pulled-repo -L -d -m 0 node .