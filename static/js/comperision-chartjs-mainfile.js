var cdailyconfig = {
  type: "line",
  data: {
    labels: [
      "Mon 1",
      "Tue 2",
      "Wed 3",
      "Thu 4",
      "Fri 5",
      "Sat 6",
      "Sun 7",
      "Mon 8",
      "Tue 9",
      "Wed 10",
      "Thu 11",
      "Fri 12",
      "Sat 13",
      "Sun 14",
      "Mon 15",
      "Tue 16",
      "Wed 17",
      "Thu 18",
      "Fri 19",
      "Sat 20",
      "Sun 21",
      "Mon 22",
      "Tue 23",
      "Wed 24",
      "Thu 25",
      "Fri 26",
      "Sat 27",
      "Sun 28",
      "Mon 29",
      "Tue 30",
      "Wed 31",
    ],
    datasets: [
      {
        label: "Old Daily dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: false,
      },
      {
        label: "New Daily dataset",
        backgroundColor: window.chartColors.lightorage,
        borderColor: window.chartColors.lightorage,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },

    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Days",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
      ],
    },
  },
};

var cweeklyconfig = {
  type: "bar",
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Last Week",
        backgroundColor: window.chartColors.orange,
        borderColor: window.chartColors.orange,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: true,
      },
      {
        label: "Current Week",
        backgroundColor: window.chartColors.bluegreen,
        borderColor: window.chartColors.bluegreen,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Week",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
      ],
    },
  },
};

var cmonthlyconfig = {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Last Month",
        backgroundColor: window.chartColors.blue,
        borderColor: window.chartColors.blue,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: false,
      },
      {
        label: "Currunt Month",
        backgroundColor: window.chartColors.darkorange,
        borderColor: window.chartColors.darkorange,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Month",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
      ],
    },
  },
};

var cyearlyconfig = {
  type: "line",
  data: {
    labels: [
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
    ],
    datasets: [
      {
        label: "last year",
        lineTension: 0,
        backgroundColor: window.chartColors.darkgrey,
        borderColor: window.chartColors.darkgrey,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: false,
      },
      {
        label: "Current year",
        lineTension: 0,
        backgroundColor: window.chartColors.green,
        borderColor: window.chartColors.green,
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        fill: false,
      },
    ],
  },
  options: {
    responsive: true,
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
    tooltips: {
      mode: "index",
      intersect: false,
    },
    hover: {
      mode: "nearest",
      intersect: true,
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Year",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Value",
          },
        },
      ],
    },
  },
};


  // daily
  var cdailyctx = document.getElementById("cdaily-line-bar-canvas")
  if (cdailyctx != null) {
    cdailyctx.getContext("2d");
    window.cdailyLine = new Chart(cdailyctx, cdailyconfig);
  }
  // Weekly
  var cweeklyctx = document
    .getElementById("cweekly-line-bar-canvas")
    if (cweeklyctx != null) {
      cweeklyctx.getContext("2d");
  window.cweeklyLine = new Chart(cweeklyctx, cweeklyconfig);
    }
  // monthly
  var cmonthlyctx = document
    .getElementById("cmonthly-line-bar-canvas")
    if (cmonthlyctx != null) {
      cmonthlyctx.getContext("2d");
  window.cmonthlyLine = new Chart(cmonthlyctx, cmonthlyconfig);
    }
  // yearly
  var cyearlyctx = document
    .getElementById("cyearly-line-bar-canvas")
    if (cyearlyctx != null) {
      cyearlyctx.getContext("2d");
  window.cyearlyLine = new Chart(cyearlyctx, cyearlyconfig);
    }




var cdailybutton = document
.getElementById("cdaily-line-bar-randomizeData")

if(cdailybutton != null){

  cdailybutton.addEventListener("click", function () {
    cdailyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });

    window.cdailyLine.update();
  });

}
  

var cweeklybutton = document
  .getElementById("cweekly-line-bar-canvas-randomizeData")
  if(cweeklybutton != null){
    cweeklybutton.addEventListener("click", function () {
    cweeklyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    window.cweeklyLine.update();
  });
  }


  var cmonthlybutton = document
  .getElementById("cmonthly-line-bar-canvas-randomizeData")
  if(cmonthlybutton != null){

    cmonthlybutton.addEventListener("click", function () {
    cmonthlyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    window.cmonthlyLine.update();
  });
  }

  var cyearlybutton = document
  .getElementById("cyearly-line-bar-canvas-randomizeData")
  if(cyearlybutton != null){

    cyearlybutton.addEventListener("click", function () {
    cyearlyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    window.cyearlyLine.update();
  });
}

// var colorNames = Object.keys(window.chartColors);
// document
//   .getElementById("line-bar-addDataset")
//   .addEventListener("click", function () {
//     var colorName = colorNames[config.data.datasets.length % colorNames.length];
//     var newColor = window.chartColors[colorName];
//     var newDataset = {
//       label: "Dataset " + config.data.datasets.length,
//       backgroundColor: newColor,
//       borderColor: newColor,
//       data: [],
//       fill: false,
//     };

//     for (var index = 0; index < config.data.labels.length; ++index) {
//       newDataset.data.push(randomScalingFactor());
//     }

//     config.data.datasets.push(newDataset);
//     window.myLine.update();
//   });

// document
//   .getElementById("line-bar-addData")
//   .addEventListener("click", function () {
//     if (config.data.datasets.length > 0) {
//       var month = MONTHS[config.data.labels.length % MONTHS.length];
//       config.data.labels.push(month);

//       config.data.datasets.forEach(function (dataset) {
//         dataset.data.push(randomScalingFactor());
//       });

//       window.myLine.update();
//     }
//   });

// document
//   .getElementById("line-bar-removeDataset")
//   .addEventListener("click", function () {
//     config.data.datasets.splice(0, 1);
//     window.myLine.update();
//   });

// document
//   .getElementById("line-bar-removeData")
//   .addEventListener("click", function () {
//     config.data.labels.splice(-1, 1); // remove the label first

//     config.data.datasets.forEach(function (dataset) {
//       dataset.data.pop();
//     });

//     window.myLine.update();
//   });
