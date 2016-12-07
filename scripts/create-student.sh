TOKEN="/Q13fwbcTUjRS8y9cfl4ZYLXGcNsaXGVRLkdZjCtbTo=--ABESLlb6hnyY8casx5k5C/DmEmoHO8yutP68jfFedJQ="
curl --include --request POST http://localhost:4741/students \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "student": {
      "first_name": "Suja",
      "last_name": "S"
    }
  }'
