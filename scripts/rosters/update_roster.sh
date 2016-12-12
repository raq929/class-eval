TOKEN="hdH0yDjQStd6QHAUz3bk8xDkkUVJXW+qXMbdTimDM30=--tUvVN3rSoNdUtWE+VGZZuhpMtAf+Gp6MuXRJUM0dU14="
ID="584b0a7bba35dd6a52ae85fd"
S_ID1="5846eaadf093cf4a569a2d21"
S_ID2="584ac28aad34ef34bae461f7"
S_ID3="584b1b49966c609291627675"
S_ID4="584b1b25d6ed998d905cbe26"
I_ID1="5846e4c556902b123faa0c5f"
I_ID2="584ebc25d34477c40797a032"
I_ID3="584ebc30d34477c40797a033"
I_ID4="584ebc3ad34477c40797a034"

curl --include --request PATCH http://localhost:4741/rosters/$ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "roster": {
      "students": ["'"${S_ID1}"'","'"${S_ID2}"'","'"${S_ID3}"'","'"${S_ID4}"'"],
      "instructors": ["'"${I_ID1}"'","'"${I_ID2}"'","'"${I_ID3}"'","'"${I_ID4}"'"]
    }
  }'
