#!/bin/bash

curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{}'

echo