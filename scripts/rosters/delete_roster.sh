TOKEN="hdH0yDjQStd6QHAUz3bk8xDkkUVJXW+qXMbdTimDM30=--tUvVN3rSoNdUtWE+VGZZuhpMtAf+Gp6MuXRJUM0dU14="
ID="584af576324d26578de476e3"

curl --include --request DELETE http://localhost:4741/rosters/$ID \
  --header "Authorization: Token token=$TOKEN"
