TOKEN="hdH0yDjQStd6QHAUz3bk8xDkkUVJXW+qXMbdTimDM30=--tUvVN3rSoNdUtWE+VGZZuhpMtAf+Gp6MuXRJUM0dU14="

curl --include --request GET http://localhost:4741/rosters/ \
  --header "Authorization: Token token=$TOKEN"
