#!/bin/bash

sed -i -e 's/"jsx":\s*"react-jsx",/"jsx": "react",/g' tsconfig.json

bash .patch/react16/.scripts/addImportReact.sh
