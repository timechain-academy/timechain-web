# PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/X11/bin
SHELL									:= /bin/bash

PWD										?= pwd_unknown
#space:=
#space+=

#v12.22.0/  30-Mar-2021 14:14
#v12.22.1/  06-Apr-2021 19:58
#v12.22.10/ 01-Feb-2022 20:24
#v12.22.11/ 17-Mar-2022 23:30
#v12.22.12/ 05-Apr-2022 12:21
#v12.22.2/  01-Jul-2021 15:37
#v12.22.3/  05-Jul-2021 15:55
#v12.22.4/  29-Jul-2021 16:46
#v12.22.5/  11-Aug-2021 16:30
#v12.22.6/  31-Aug-2021 14:59
#v12.22.7/  12-Oct-2021 15:21
#v12.22.8/  16-Dec-2021 23:40
#v12.22.9/  10-Jan-2022 23:15

PYTHON                                  := $(shell which python)
export PYTHON
PYTHON2                                 := $(shell which python2)
export PYTHON2
PYTHON3                                 := $(shell which python3)
export PYTHON3

NODE_GYP_FORCE_PYTHON                   := $(shell which python)
export NODE_GYP_FORCE_PYTHON

PIP                                     := $(shell which pip)
export PIP
PIP2                                    := $(shell which pip2)
export PIP2
PIP3                                    := $(shell which pip3)
export PIP3

python_version_full := $(wordlist 2,4,$(subst ., ,$(shell python3 --version 2>&1)))
python_version_major := $(word 1,${python_version_full})
python_version_minor := $(word 2,${python_version_full})
python_version_patch := $(word 3,${python_version_full})

my_cmd.python.3 := $(PYTHON3) some_script.py3
my_cmd := ${my_cmd.python.${python_version_major}}

PYTHON_VERSION                         := ${python_version_major}.${python_version_minor}.${python_version_patch}
PYTHON_VERSION_MAJOR                   := ${python_version_major}
PYTHON_VERSION_MINOR                   := ${python_version_minor}

NODE_VERSION							:=v16
export NODE_VERSION
NODE_ALIAS								:=v14
export NODE_ALIAS
PACKAGE_MANAGER							:=yarn
export PACKAGE_MANAGER
PACKAGE_INSTALL							:=add
export PACKAGE_INSTALL

NODE_DEBUG=1 #for JavaScript logging
export NODE_DEBUG
NODE_DEBUG_NATIVE=1 #for C++ logging
export NODE_DEBUG_NATIVE

# CURRENT_PATH := $(subst $(lastword $(notdir $(MAKEFILE_LIST))),,$(subst $(space),\$(space),$(shell realpath '$(strip $(MAKEFILE_LIST))')))
# export CURRENT_PATH

THIS_DIR=$(dir $(abspath $(firstword $(MAKEFILE_LIST))))
export THIS_DIR

TIME									:= $(shell date +%s)
export TIME

# PROJECT_NAME defaults to name of the current directory.
ifeq ($(project),)
PROJECT_NAME							:= $(notdir $(PWD))
else
PROJECT_NAME							:= $(project)
endif
export PROJECT_NAME

ifeq ($(NODE_VERSION),)
NODE_VERSION									:= $(shell node --version)
else
NODE_VERSION									:= $(NODE_VERSION)
endif
export NODE_VERSION

ifeq ($(force),true)
FORCE									:= --force
endif
export FORCE

#GIT CONFIG
GIT_USER_NAME							:= $(shell git config user.name)
export GIT_USER_NAME
GIT_USER_EMAIL							:= $(shell git config user.email)
export GIT_USER_EMAIL
GIT_SERVER								:= https://github.com
export GIT_SERVER
GIT_PROFILE								:= $(shell git config user.name)
export GIT_PROFILE
GIT_BRANCH								:= $(shell git rev-parse --abbrev-ref HEAD)
export GIT_BRANCH
GIT_HASH								:= $(shell git rev-parse --short HEAD)
export GIT_HASH
GIT_PREVIOUS_HASH						:= $(shell git rev-parse --short HEAD^1)
export GIT_PREVIOUS_HASH
GIT_REPO_ORIGIN							:= $(shell git remote get-url origin)
export GIT_REPO_ORIGIN
GIT_REPO_NAME							:= $(PROJECT_NAME)
export GIT_REPO_NAME
GIT_REPO_PATH							:= $(HOME)/$(GIT_REPO_NAME)
export GIT_REPO_PATH

.ONESHELL:
.SILENT:
-:## -
	#NOTE: 2 hashes are detected as 1st column output with color
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?##/ {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

init:## init
#	@["$(shell $(SHELL))" == "/bin/zsh"] && zsh --emulate sh
	@pushd scripts && ./initialize && popd
	@pushd .       && $(PACKAGE_MANAGER) && popd

.PHONY:install
install:init## make init install $(PACKAGE_MANAGER) install
	$(MAKE) init && $(PACKAGE_MANAGER) install
.PHONY:build
build:## build
	#@pushd ./scripts && $(PACKAGE_MANAGER) run build && popd
	@pushd . && $(PACKAGE_MANAGER) run build && popd
.PHONY:preview
preview:## preview
	@$(PACKAGE_MANAGER) run preview
	@node .output/server/index.mjs
.PHONY:dev
dev:## dev
	@$(PACKAGE_MANAGER) run dev
rebuild:## rebuild
	@$(PACKAGE_MANAGER) run rebuild

burnthemall:## burnthemall - hard reset & build
	@cd ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL) burnthemall
release:## release - build distribution
	@cd ./scripts && $(PACKAGE_MANAGER) $(PACKAGE_INSTALL) release

help:## help
	@echo ''
	#NOTE: 2 hashes are detected as 1st column output with color
	@sed -n 's/^##ARGS//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	# @sed -n 's/^.PHONY//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	@sed -n 's/^# //p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/# /'
	@sed -n 's/^## //p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/## /'
	@sed -n 's/^### //p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/### /'
	@echo ""
	@echo ""
	@echo ""
	@echo "Useful Commands:"
	@echo ""
	@echo "make install init build"
	@echo "make start"
	@echo "make release"
	@echo ""
	@echo ""

report:## report					environment args
	@echo ''
	@echo ' TIME=${TIME}	'
	@echo ' CURRENT_PATH=${CURRENT_PATH}	'
	@echo ' THIS_DIR=${THIS_DIR}	'
	@echo ' PROJECT_NAME=${PROJECT_NAME}	'
	@echo ' NODE_VERSION=${NODE_VERSION}	'
	@echo ' NODE_ALIAS=${NODE_ALIAS}	'
	@echo ' PACKAGE_MANAGER=${PACKAGE_MANAGER}	'
	@echo ' PACKAGE_INSTALL=${PACKAGE_INSTALL}	'
	@echo ' PYTHON=${PYTHON}'
	@echo ' PYTHON2=${PYTHON2}'
	@echo ' PYTHON3=${PYTHON3}'
	@echo ' NODE_GYP_FORCE_PYTHON=${NODE_GYP_FORCE_PYTHON}'
	@echo ' PYTHON_VERSION=${PYTHON_VERSION}'
	@echo ' PYTHON_VERSION_MAJOR=${PYTHON_VERSION_MAJOR}'
	@echo ' PYTHON_VERSION_MINOR=${PYTHON_VERSION_MINOR}'
	@echo ' PIP=${PIP}'
	@echo ' PIP2=${PIP2}'
	@echo ' PIP3=${PIP3}'
	@echo ' GIT_USER_NAME=${GIT_USER_NAME}	'
	@echo ' GIT_USER_EMAIL=${GIT_USER_EMAIL}	'
	@echo ' GIT_SERVER=${GIT_SERVER}	'
	@echo ' GIT_PROFILE=${GIT_PROFILE}	'
	@echo ' GIT_BRANCH=${GIT_BRANCH}	'
	@echo ' GIT_HASH=${GIT_HASH}	'
	@echo ' GIT_PREVIOUS_HASH=${GIT_PREVIOUS_HASH}	'
	@echo ' GIT_REPO_ORIGIN=${GIT_REPO_ORIGIN}	'
	@echo ' GIT_REPO_NAME=${GIT_REPO_NAME}	'
	@echo ' GIT_REPO_PATH=${GIT_REPO_PATH}	'

#.PHONY:
#phony:
#	@sed -n 's/^.PHONY//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'

.PHONY: command
command: executable ## command		example
	@echo "command sequence here..."

.PHONY: executable
executable: ## executable
	chmod +x ./scripts/initialize
.PHONY: exec
exec: executable ## exec	make shell scripts executable

.PHONY: nvm
.ONESHELL:
nvm: executable ## nvm
	@curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash || git pull -C $(HOME)/.nvm && export NVM_DIR="$(HOME)/.nvm" && [ -s "$(NVM_DIR)/nvm.sh" ] && \. "$(NVM_DIR)/nvm.sh" && [ -s "$(NVM_DIR)/bash_completion" ] && \. "$(NVM_DIR)/bash_completion"  && nvm install $(NODE_VERSION) && nvm use $(NODE_VERSION)
	@source ~/.bashrc && nvm alias $(NODE_ALIAS) $(NODE_VERSION)

.PHONY: all
all:- executable install init build ## all - executable install init build
	@echo "make init install build release"

.PHONY: submodule submodules
submodule: submodules ## submodule
submodules: ## submodules
	git submodule update --init --recursive
	git submodule foreach 'git fetch origin; git checkout $$(git rev-parse --abbrev-ref HEAD); git reset --hard origin/$$(git rev-parse --abbrev-ref HEAD); git submodule update --recursive; git clean -dfx'

.PHONY: venv
venv:## create python3 virtualenv .venv
	test -d .venv || $(PYTHON3) -m virtualenv .venv
	( \
	   source .venv/bin/activate; pip install -r requirements.txt; \
	);
	@echo "To activate (venv)"
	@echo "try:"
	@echo ". .venv/bin/activate"
	@echo "or:"
	@echo "make test-venv"
##:	test-venv            source .venv/bin/activate; pip install -r requirements.txt;
test-venv:## 	test virutalenv .venv
	# insert test commands here
	test -d .venv || $(PYTHON3) -m virtualenv .venv
	( \
	   source .venv/bin/activate; pip install -r requirements.txt; \
	);

clean: ## clean
	rm -rf $(find . -name package-lock.json)
	rm -rf $(find . -name yarn.lock)
	#rm -rf $(find ./scripts -name package-lock.json)
	#rm -rf $(find ./scripts -name yarn.lock)
clean-nvm: ## clean-nvm
	@rm -rf ~/.nvm
clean-all: clean clean-nvm ## clean-all
	@rm -rf $(find . -name node_modules)

-include node.mk
# vim: set noexpandtab:
# vim: set setfiletype make