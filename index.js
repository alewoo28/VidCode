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

//--------------------------------------------------------

function buildTable() {
  // Create the table and table headers
  var table = document.createElement('table')
  var columns = [
    'Activity',
    'Best Score',
    'Average Score',
    'Project(s) Created',
  ]
  var tr = table.insertRow(-1) // Table Row

  // Create the top row (header) from columns array
  for (var i = 0; i < columns.length; i++) {
    var th = document.createElement('th') // TABLE HEADER.
    th.innerHTML = columns[i]
    th.className = 'table-head'
    tr.appendChild(th)
  }

  // Iterate through the JSON Data and create a row for each object (unit)
  for (var g = 0; g < fakeJSON.length; g++) {
    tr = table.insertRow(-1)

    // Make an array of each unit's submisson scores
    // Establish some helpful variables to calculate best & average scores
    let scores = fakeJSON[g]['submissions'].map(elem => {
      return elem['score']
    })
    let divisor = scores.length

    let sum = scores.reduce(function(a, b) {
      return a + b
    }, 0)

    // for styling, make every other row the same color with classnames
    if (g % 2 !== 0) {
      tr.className = 'single-rowOdd'
    } else {
      tr.className = 'single-rowEven'
    }

    // Iterate through the columns and add to the cells for each row
    for (var j = 0; j < columns.length; j++) {
      var tCell = tr.insertCell(-1)

      // COLUMN: Activity name
      if (columns[j] === 'Activity') {
        let activityName = fakeJSON[g]['name']
        tCell.innerHTML = `Unit ${g + 1}: ${activityName}`
      }

      // COLULMN: projects created, attempts with hyperlinks
      if (columns[j] === 'Project(s) Created') {
        let numberOfAttempts = fakeJSON[g]['submissions'].length

        if (numberOfAttempts === 0) {
          // no attempts
          tCell.innerHTML = 'N/A'
        } else if (numberOfAttempts === 1) {
          // 1 attempt
          let singleAttempt = '1 Attempt'
          let token = fakeJSON[g]['submissions'][0]['token']
          let hyplink = singleAttempt.link(
            `https://www.vidcode.com/share/${token}`
          )
          tCell.innerHTML = hyplink
          tCell.id = 'hyperlink'
        } else {
          // more than one attempt
          let attempts = `${numberOfAttempts} Attempts`
          let token = fakeJSON[g]['submissions'][divisor - 1]['token']
          let hyplink = attempts.link(`https://www.vidcode.com/share/${token}`)
          tCell.innerHTML = hyplink
          tCell.id = 'hyperlink'
        }
      }

      // COLUMN: Best scores
      let greatScore = 90
      let modest = 75

      if (columns[j] === 'Best Score') {
        if (divisor) {
          let highest = `${Math.max(...scores)}`
          tCell.innerHTML = `${highest}%`

          // Assign ids to the cells for color styling
          tCell.id =
            highest >= 90
              ? 'highScore'
              : highest >= 75
              ? 'modestScore'
              : 'lowScore'
        } else {
          tCell.innerHTML = 'N/A'
        }
      }

      // COLUMN: Average scores
      if (columns[j] === 'Average Score') {
        if (divisor) {
          let average = `${Math.round(sum / divisor)}`
          tCell.innerHTML = `${average}%`

          // Assign ids to the cells for color styling
          tCell.id =
            average >= 90
              ? 'highScore'
              : average >= 75
              ? 'modestScore'
              : 'lowScore'
        } else {
          tCell.innerHTML = 'N/A'
        }
      }
    }
  }
  // grab studentData from the HTML and add our new table to it
  var dataContainer = document.getElementById('studentData')
  dataContainer.innerHTML = ''
  dataContainer.appendChild(table)
}

// invoke the table building function
buildTable()
