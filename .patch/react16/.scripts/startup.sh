#!/bin/bash

mv .patch/react16/tsconfig.json tsconfig.json
sh .patch/react16/.scripts/addImportReact.sh
