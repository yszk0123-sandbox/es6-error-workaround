#!/bin/bash

actual="$(mktemp)"

node ./dist/index.js 2>&1 | head -n 4 > "$actual"

cat <<EOS | diff -q - "$actual"
main -> try
foo -> try
foo -> catch
Trace: CustomErrorA a
EOS
