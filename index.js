console.log('Hello from Javascript')

const data = [
  {
    name: 'JavaScript Basics',
    submissions: [
      {
        score: 100,
        token: 'f6s1EgEqGe',
      },
    ],
  },
  {
    name: 'Arrays, Objects and Variabless',
    submissions: [
      {
        score: 75,
        token: '2h0c0Y5Vw3',
      },
      {
        score: 55,
        token: 'g9SchVUgUG',
      },
      {
        score: 50,
        token: 'mVYou2QhQK',
      },
    ],
  },
  {
    name: 'Loops and Operators',
    submissions: [
      {
        score: 90,
        token: 'EjCfIOt0XX',
      },
      {
        score: 86,
        token: '5Vwk5tYJWl',
      },
      {
        score: 84,
        token: '64oOS7YBHu',
      },
      {
        score: 80,
        token: 'Hgzwie05rz',
      },
    ],
  },
  {
    name: 'While and For Loops',
    submissions: [],
  },
  {
    name: 'Strings and Methods',
    submissions: [],
  },
]

const express = require('express')

const app = express()

app.get('/home', (req, res, next) => {
  console.log('in get request handler')
  res.send(`<h1>Welcome to the Home Page</h1>`)
})

app.get('/contact', (req, res, next) => {
  res.send(`<h1>Welcome to the Contact Page</h1>`)
})

app.listen(8000)

document.getElementById('')

import * as data from './backend/data.json'

import config from './backend/data.json'

fetch('/Users/alexiswoodbury/dev/VidcodeProject/backend/data.json')
  .then(function(resp) {
    return resp.json()
  })
  .then(function(data) {
    console.log('TEST')
  })

function makeTableHead(table, data) {
  let thead = table.createTHead()
  let row = thead.insertRow()
  for (let key of data) {
    let th = document.createElement('th')
    let text = document.createTextNode(key)
    th.appendChild(text)
    row.appendChild(th)
  }
}

let table = document.querySelector('table')
let data = Object.keys(mountains[0])

const router = require('express').Router()
const AllData = require('./backend')

router.get('/data', async (req, res, next) => {
  try {
    console.log(AllData)
    res.send(AllData)
  } catch (error) {
    next(error)
  }
})
