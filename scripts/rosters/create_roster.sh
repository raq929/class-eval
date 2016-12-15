NAME="WDI007"

curl --include --request POST http://localhost:4741/rosters \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "roster": {
      "name": "'"${NAME}"'"
    }
  }'
