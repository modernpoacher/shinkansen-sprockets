#!/bin/bash

DEBUG="${DEBUG:-@modernpoacher/sprockets*}"
node -e 'import("./build/transform.mjs").then(({ default: transform }) => transform())'
