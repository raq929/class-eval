#!/bin/bash

API="http://localhost:4741"
URL_PATH="/make-admin"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}"

echo
