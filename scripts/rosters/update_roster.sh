TOKEN="hdH0yDjQStd6QHAUz3bk8xDkkUVJXW+qXMbdTimDM30=--tUvVN3rSoNdUtWE+VGZZuhpMtAf+Gp6MuXRJUM0dU14="
ID="584b0a7bba35dd6a52ae85fd"
S_ID1="5846eaadf093cf4a569a2d21"
S_ID2="584ac28aad34ef34bae461f7"
S_ID3="584b1b49966c609291627675"
S_ID4="584b1b25d6ed998d905cbe26"

curl --include --request PATCH http://localhost:4741/rosters/$ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "roster": {
      "students": ["'"${S_ID1}"'","'"${S_ID2}"'","'"${S_ID3}"'","'"${S_ID4}"'"]
    }
  }'
