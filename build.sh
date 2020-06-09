#!/bin/bash

set -e
export NODE_ENV='prod'
# store app secrets
source ./environments/environment.${NODE_ENV}.sh

npm run build
# npm start