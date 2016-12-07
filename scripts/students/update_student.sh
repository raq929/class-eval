TOKEN="W4/ROBrkAMsAyVDulDdIP1qJjlUUDz4XJS7WyX7kd3o=--vUdmFWBy9EBMUjVGYVrJ2eZLTiZ5sWQOO2iUCo+PtPo="
FIRST_NAME="Suja!!!"
ID="5846eaadf093cf4a569a2d21"

curl --include --request PATCH http://localhost:4741/students/$ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "student": {
      "first_name": "'"${FIRST_NAME}"'"
    }
  }'
