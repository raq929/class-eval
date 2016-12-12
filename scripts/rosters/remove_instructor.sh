TOKEN="hdH0yDjQStd6QHAUz3bk8xDkkUVJXW+qXMbdTimDM30=--tUvVN3rSoNdUtWE+VGZZuhpMtAf+Gp6MuXRJUM0dU14="
ID="584b0a7bba35dd6a52ae85fd"
I_ID1="584ebc25d34477c40797a032"

curl --include --request PATCH http://localhost:4741/rosters/$ID/remove-instructor \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "roster": {
      "instructor": "'"${I_ID1}"'"
    }
  }'
