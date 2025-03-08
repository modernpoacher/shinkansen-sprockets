#!/bin/bash

DEBUG="${DEBUG:-shinkansen-sprockets*}"

node -e 'import("./.storybook/transform.mjs").then(({ default: transform }) => transform())'
