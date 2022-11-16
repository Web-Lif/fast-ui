#!/bin/bash

files=(
    src/autosize/index.tsx
    src/avatar/index.tsx
    src/badge/index.tsx
    src/button/index.tsx
    src/card/index.tsx
    src/cascader/index.tsx
    src/checkbox/index.tsx
    src/color-picker/index.tsx
    src/date-picker/index.tsx
    src/dropdown/index.tsx
    src/form/index.tsx
    src/input-number/index.tsx
    src/input/index.tsx
    src/modal/index.tsx
    src/pagination/index.tsx
    src/radio/index.tsx
    src/rate/index.tsx
    src/splitpane/index.tsx
    src/switch/index.tsx
    src/table/body.tsx
    src/table/header.tsx
    src/table/index.tsx
    src/tree/index.tsx
    src/upload/index.tsx
)

for element in ${files[@]}
do
    sed -i "1i\import React from 'react'" ${element}
done
