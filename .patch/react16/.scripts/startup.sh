#!/bin/bash

oldversion=`grep -E '"version":\s*"[0-9A-Za-z\.]+"' package.json` && version=`echo "${oldversion}" | sed -e 's/",/-react16",/'` && sed -i -e "s/${oldversion}/${version}/" package.json
sed -i -e 's/"jsx":\s*"react-jsx",/"jsx": "react",/g' tsconfig.json
bash .patch/react16/.scripts/addImportReact.sh
