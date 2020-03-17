const fakeJSON = [
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

function buildTable() {
  // Create the table and table heads
  var table = document.createElement('table')
  var columns = [
    'Activity',
    'Best Score',
    'Average Score',
    'Project(s) Created',
  ]
  var tr = table.insertRow(-1) // TABLE ROW.

  // Create the top row (header) from columns array
  for (var i = 0; i < columns.length; i++) {
    var th = document.createElement('th') // TABLE HEADER.
    th.innerHTML = columns[i]
    th.className = 'table-head'
    tr.appendChild(th)
  }

  // ADD JSON DATA TO THE TABLE AS ROWS.
  for (var g = 0; g < fakeJSON.length; g++) {
    tr = table.insertRow(-1)
    tr.className = 'single-row'
    // grabbing score arrays
    let scores = fakeJSON[g]['submissions'].map(elem => {
      return elem['score']
    })
    let divisor = scores.length

    let sum = scores.reduce(function(a, b) {
      return a + b
    }, 0)

    for (var j = 0; j < columns.length; j++) {
      var tCell = tr.insertCell(-1)

      // Activity name
      if (columns[j] === 'Activity') {
        let activityName = fakeJSON[g]['name']
        tCell.innerHTML = `Unit ${g + 1}: ${activityName}`
      }

      // projects created, attempts
      if (columns[j] === 'Project(s) Created') {
        let numberOfAttempts = fakeJSON[g]['submissions'].length
        if (numberOfAttempts === 0) {
          tCell.innerHTML = 'N/A'
        } else if (numberOfAttempts === 1) {
          let singleAttempt = '1 Attempt'
          let token = fakeJSON[g]['submissions'][0]['token']
          let hyplink = singleAttempt.link(
            `https://www.vidcode.com/share/${token}`
          )
          tCell.innerHTML = hyplink
        } else {
          let attempts = `${numberOfAttempts} Attempts`
          let token = fakeJSON[g]['submissions'][divisor - 1]['token']
          let hyplink = attempts.link(`https://www.vidcode.com/share/${token}`)
          tCell.innerHTML = hyplink
        }
      }

      // Best scroes
      if (columns[j] === 'Best Score') {
        if (divisor) {
          tCell.innerHTML = `${Math.max(...scores)}`
        } else {
          tCell.innerHTML = 'N/A'
        }
      }

      // Average scores
      if (columns[j] === 'Average Score') {
        if (divisor) {
          tCell.innerHTML = `${Math.round(sum / divisor)}%`
        } else {
          tCell.innerHTML = 'N/A'
        }
      }
    }
  }
  // add the table with the added rows to a container
  var dataContainer = document.getElementById('studentData')
  dataContainer.innerHTML = ''
  dataContainer.appendChild(table)
}

buildTable()
