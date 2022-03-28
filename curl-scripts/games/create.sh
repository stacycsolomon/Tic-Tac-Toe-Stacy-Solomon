#!/bin/bash

curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{
      "game": {
        "cell": {
          "index": "'"${INDEX}"'",
          "value": "'"${VALUE}"'"
        },
        "over": "'"${OVER}"'"
      }
    }'

echo