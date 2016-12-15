I_ID1="5846eaadf093cf4a569a2d21"
I_ID2="584ac28aad34ef34bae461f7"
I_ID3="584b1b49966c609291627675"
I_ID4="584b1b25d6ed998d905cbe26"

curl --include --request PATCH http://localhost:4741/rosters/$ID/add-instructors \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "roster": {
      "instructors": ["'"${I_ID1}"'","'"${I_ID2}"'"]
    }
  }'
