// import React, { Component } from "react";


// const writeJsonFile = require('write-json-file');

// export default class InstaRefresh extends Component {

//   componentDidMount() {
//     this.refreshData();
//   }

//   refreshData() {
//     var url =
//       "https://api.instagram.com/v1/users/self/media/recent/?access_token=927635119.e6873b5.fcd374c1687e423e8dd81bb2a78c4744";

//     fetch(url)
//       .then(response => {
//         return response.json();
//       })
//       .then(responseData => {
//         console.log(responseData);
//         return responseData;
//       })
//       .then(data => {

//         console.log("Writing data to file")
//         var fs = require("fs");

// 		fs.writeFile("./sample.txt", data, (err) => {
// 		    if (err) {
// 		        console.error(err);
// 		        return;
// 		    };
// 		    console.log("File has been created");
// 		});


//       })
//       .catch(err => {
//         console.log("fetch error" + err);
//       });
//   }

//   render(){
//   	return(
//   		<p> Instagram Refreshed.</p>
//   		);
//   }

// }