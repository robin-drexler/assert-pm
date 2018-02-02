#!/usr/bin/env bash

yarn run exec yarn

if [ ! $? -eq 0 ]; then
  exit 1
fi

yarn run exec npm

if [ $? -eq 0 ]; then
  exit 1
fi

npm run exec npm

if [ ! $? -eq 0 ]; then
  exit 1
fi

npm run exec yarn

if [ $? -eq 0 ]; then
  exit 1
fi