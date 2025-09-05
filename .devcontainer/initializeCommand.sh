#!/usr/bin/env bash
#initializeCommand.sh
set -e

PREFIX="👀  "
echo "$PREFIX Running $(basename $0)"

echo "$PREFIX Initializing  GH CLI  $GH_CLI_AUTH_REQUIRED"

$(dirname $0)/gh-login.sh initialize

echo "$PREFIX SUCCESS"
exit 0