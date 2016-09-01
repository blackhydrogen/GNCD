#!/bin/bash
cd ~/personalsite

git pull
npm install
screen -S personalsite -X quit
screen -S personalsite -L -d -m node .