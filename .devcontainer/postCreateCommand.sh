#!/usr/bin/env bash
#postCreateCommand.sh

set -e

PREFIX="🍰  "
echo "$PREFIX Running $(basename $0)"

echo "$PREFIX Setting up safe git repository to prevent dubious ownership errors"
git config --global --add safe.directory "$(pwd)"

echo "$PREFIX Setting up git configuration to support .gitconfig in repo-root"
git config --local --get include.path | grep -e ../.gitconfig >/dev/null 2>&1 || git config --local --add include.path ../.gitconfig


# Check if the GH CLI is required (defined in devcontainer.env)
#if [ "$GH_CLI_AUTH_REQUIRED" = "1" ]; then
if [ -e $(dirname $0)/_temp.token ]; then
    $(dirname $0)/gh-login.sh postcreate
    echo "$PREFIX setting up GitHub CLI"
    echo "$PREFIX Installing the techcollective/gh-tt gh cli extension"
    gh extension install thetechcollective/gh-tt --pin stable
    echo "$PREFIX Installing the lakruzz/gh-semver gh cli extension"
    gh extension install lakruzz/gh-semver
    echo "$PREFIX Installing the gh aliases"
    gh alias import .devcontainer/.gh_alias.yml --clobber
fi

echo "$PREFIX SUCCESS"
exit 0