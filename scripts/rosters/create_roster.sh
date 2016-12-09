TOKEN="hdH0yDjQStd6QHAUz3bk8xDkkUVJXW+qXMbdTimDM30=--tUvVN3rSoNdUtWE+VGZZuhpMtAf+Gp6MuXRJUM0dU14="
NAME="WDI006"

curl --include --request POST http://localhost:4741/rosters \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "roster": {
      "name": "'"${NAME}"'"
    }
  }'
