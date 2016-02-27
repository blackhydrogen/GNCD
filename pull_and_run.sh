#!/bin/bash
cd ~/GNCD-pulled-repo

git pull
screen -S gncd-pull-repo -L -d -m node .