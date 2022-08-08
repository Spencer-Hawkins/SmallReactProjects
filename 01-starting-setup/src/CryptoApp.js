//this project is used soley for testing individual tools or packages in isolation from a larger prject
//^^^^
//^^^^
//^^^
//Not a project for anything other than testing

import React from "react";

var CryptoJS = require('crypto-js');

const App = () => {
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  //const myText = CryptoJS.AES.encrypt("Encrypt Me", "I'm a secret key");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('Encrypt Me', 'secret key 123').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText, "This is what I'm looking for: Encrypt Me"); // 'my message'



  return (
    //console.log(myText),
    //console.log(CryptoJS.AES.decrypt(myText, "I'm a secret key")),
    <div>
      <h1>
        Hello World,
      </h1>
      <p>myText</p>
    </div>
  );
};

export default App;
