#!/bin/bash
ID="5846eaadf093cf4a569a2d21"
TOKEN="W4/ROBrkAMsAyVDulDdIP1qJjlUUDz4XJS7WyX7kd3o=--vUdmFWBy9EBMUjVGYVrJ2eZLTiZ5sWQOO2iUCo+PtPo="
curl --include --request GET http://localhost:4741/students/$ID \
  --header "Authorization: Token token=$TOKEN"
