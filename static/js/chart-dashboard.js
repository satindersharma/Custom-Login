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

var combconfig = [dailyconfig, weeklyconfig, monthlyconfig, yearlyconfig];

var combinectx = document.querySelectorAll("line-bar-canvas");

combinectx.forEach(function (item, index) {
  if (item != null) {
    item.getContext("2d");
    window.dailyLine = new Chart(item, dailyconfig);
  }
});

