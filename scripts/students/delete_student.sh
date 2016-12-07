TOKEN="W4/ROBrkAMsAyVDulDdIP1qJjlUUDz4XJS7WyX7kd3o=--vUdmFWBy9EBMUjVGYVrJ2eZLTiZ5sWQOO2iUCo+PtPo="
ID="5848683b4350299f2e0320f4"
curl --include --request DELETE http://localhost:4741/students/$ID \
  --header "Authorization: Token token=$TOKEN"
