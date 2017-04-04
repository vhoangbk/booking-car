import React from 'react';

import {
  Alert,
} from 'react-native';

module.exports = {
  postRequest(url, params, sucess, error){
    fetch(url, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
          })
          .then((response)=> response.json())
          .then(sucess)
          .catch(error)
          .done()
  }
};