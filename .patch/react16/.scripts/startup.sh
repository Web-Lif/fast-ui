#!/bin/bash

apt update -y
apt install bash -y

mv .patch/react16/tsconfig.json tsconfig.json
sh .patch/react16/.scripts/addImportReact.sh
