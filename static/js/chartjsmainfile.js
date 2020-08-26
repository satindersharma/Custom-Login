var MONTHS = [
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
];
var config = {
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
        label: "Monthly dataset",
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

var dailyconfig = {
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
        label: "Daily dataset",
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

var weeklyconfig = {
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
        label: "Weekly dataset",
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

var monthlyconfig = {
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
        label: "Monthly dataset",
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

var yearlyconfig = {
  type: "line",
  data: {
    labels: ["2010", "2011", "2012", "2013","2014","2015","2016","2017","2018","2019","2020",],
    datasets: [
      {
        label: "Yearly dataset",
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

window.onload = function () {
  // daily
  var dailyctx = document
    .getElementById("daily-line-bar-canvas")
    .getContext("2d");
  window.dailyLine = new Chart(dailyctx, dailyconfig);

  // Weekly
  var weeklyctx = document
    .getElementById("weekly-line-bar-canvas")
    .getContext("2d");
  window.weeklyLine = new Chart(weeklyctx, weeklyconfig);

  // monthly
  var monthlyctx = document
    .getElementById("monthly-line-bar-canvas")
    .getContext("2d");
  window.monthlyLine = new Chart(monthlyctx, monthlyconfig);

  // yearly
  var yearlyctx = document
    .getElementById("yearly-line-bar-canvas")
    .getContext("2d");
  window.yearlyLine = new Chart(yearlyctx, yearlyconfig);
};



document
  .getElementById("daily-line-bar-randomizeData")
  .addEventListener("click", function () {
    dailyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });

    window.dailyLine.update();
  });

document
  .getElementById("weekly-line-bar-canvas-randomizeData")
  .addEventListener("click", function () {
    weeklyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    window.weeklyLine.update();
  });

document
  .getElementById("monthly-line-bar-canvas-randomizeData")
  .addEventListener("click", function () {
    monthlyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    window.monthlyLine.update();
  });


  document
  .getElementById("yearly-line-bar-canvas-randomizeData")
  .addEventListener("click", function () {
    yearlyconfig.data.datasets.forEach(function (dataset) {
      dataset.data = dataset.data.map(function () {
        return randomScalingFactor();
      });
    });
    window.yearlyLine.update();
  });

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
