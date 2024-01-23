#!/usr/bin/env bash
PWD=$( pwd )
cd $PWD/node_modules/ts-animal && pnpm show:$1
