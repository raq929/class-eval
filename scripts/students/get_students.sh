#!/bin/bash
TOKEN="W4/ROBrkAMsAyVDulDdIP1qJjlUUDz4XJS7WyX7kd3o=--vUdmFWBy9EBMUjVGYVrJ2eZLTiZ5sWQOO2iUCo+PtPo="


curl --include --request GET http://localhost:4741/students/ \
  --header "Authorization: Token token=$TOKEN"
