TOKEN="hdH0yDjQStd6QHAUz3bk8xDkkUVJXW+qXMbdTimDM30=--tUvVN3rSoNdUtWE+VGZZuhpMtAf+Gp6MuXRJUM0dU14="
ID="584b0a7bba35dd6a52ae85fd"
S_ID1="5846eaadf093cf4a569a2d21"

curl --include --request PATCH http://localhost:4741/rosters/$ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "roster": {
      "students": ["'"${S_ID1}"'"]
    }
  }'
