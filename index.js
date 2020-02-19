console.log('Hello from Javascript')

// const fs = require('fs')

// const express = require('express')

// const app = express()

// app.get('/home', (req, res, next) => {
//   console.log('in get request handler')
//   res.send(`<h1>Welcome to the Home Page</h1>`)
// })

// app.get('/contact', (req, res, next) => {
//   res.send(`<h1>Welcome to the Contact Page</h1>`)
// })

// app.listen(8000)

// document.getElementById('')

// import * as data from './backend/data.json'

// import config from './backend/data.json'

// fetch('/Users/alexiswoodbury/dev/VidcodeProject/backend/data.json')
//   .then(function(resp) {
//     return resp.json()
//   })
//   .then(function(data) {
//     console.log('TEST')
//   })

// function makeTableHead(table, data) {
//   let thead = table.createTHead()
//   let row = thead.insertRow()
//   for (let key of data) {
//     let th = document.createElement('th')
//     let text = document.createTextNode(key)
//     th.appendChild(text)
//     row.appendChild(th)
//   }
// }

// let table = document.querySelector('table')
// let data = Object.keys(mountains[0])

// const router = require('express').Router()
// const AllData = require('./backend')

// router.get('/data', async (req, res, next) => {
//   try {
//     console.log(AllData)
//     res.send(AllData)
//   } catch (error) {
//     next(error)
//   }
// })

// var http = require('http')

// http
//   .createServer(function(req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     res.end('Hello World!')
//   })
//   .listen(8080)

// function loadJSON(callback) {
//   var xobj = new XMLHttpRequest()
//   xobj.overrideMimeType('application/json')
//   xobj.open('GET', './backend/data.json', true)
//   xobj.onreadystatechange = function() {
//     if (xobj.readyState == 4 && xobj.status == '200') {
//       callback(xobj.responseText)
//     }
//   }
//   xobj.send(null)
//   console.log('TEST')
// }

// $.getJSON('./backend/data.json', function(json) {
//   console.log(json) // show the JSON file content into console
// })

// fetch('./backend/data.json')
//   .then(response => response.json())
//   .then(
//     parsed => console.log(parsed) /* parsed contains the parsed json object */
//   )

// const express = require('express');
// const app = express();

// app.use(express.static("public"));

// const apiRouter = express.Router();

// apiRouter.get("/books", (req, res) => {

//     let sortOrder = req.query["sortby"];

// fs.readFile('./backend/data.json', { encoding: 'utf8' }, (err, data) => {
//   if (err) {
//     console.error('ERROR is: ', err)
//     return
//   }

//   let books = JSON.parse(data)
//   if (sortOrder === 'author') {
//     books.sort((a, b) => a.author.localeCompare(b.author))
//   } else if (sortOrder === 'title') {
//     books.sort((a, b) => a.title.localeCompare(b.title))
//   }

//   res.send(
//     JSON.stringify({
//       books: books.slice(0, 50),
//       total: books.length,
//     })
//   )
// })

// // })

// // app.use("/api", apiRouter);

// app.listen(8080, () => console.log('Example app listening on port 8080!'))

function loadJSON(callback) {
  var xobj = new XMLHttpRequest()
  console.log('11111')
  xobj.overrideMimeType('application/json')
  xobj.open('GET', './data.json', true) // Replace 'my_data' with the path to your file
  console.log('22222', xobj)
  xobj.onreadystatechange = function() {
    if (xobj.readyState == 4 && xobj.status == '200') {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText)
    }
  }

  xobj.send(null)
}
var json
function init() {
  loadJSON('data.json', function(response) {
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response)
    console.log('4444444', actual_JSON[0].name)
  })
}

init()
