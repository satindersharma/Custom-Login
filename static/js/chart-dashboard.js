var endpoint = "/api/data/";
var Data = [];
var chartCreated = [];
var saving_config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Daily dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [],
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
          },
          type: "time",
          ticks: {
            display: true,
            autoSkip: false,
          },
          time: {
            unit: "",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "D MMM",
              minute: "ddd D MMM",
              hour: "ddd D MMM hA",
              day: "ddd MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY",
            },
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

var usage_config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Daily dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [],
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
          },
          type: "time",
          ticks: {
            display: true,
          },
          time: {
            unit: "",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "D MMM",
              minute: "ddd D MMM",
              hour: "ddd D MMM hA",
              day: "ddd MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY",
            },
          },
          offsetGridLines: true,
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
var energy_config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Daily dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [],
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
          },
          type: "time",
          ticks: {
            display: true,
          },
          time: {
            unit: "",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "D MMM",
              minute: "ddd D MMM",
              hour: "ddd D MMM hA",
              day: "ddd MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY",
            },
          },
          offsetGridLines: true,
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
var power_config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Daily dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [],
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
          },
          type: "time",
          ticks: {
            display: true,
          },
          time: {
            unit: "",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "D MMM",
              minute: "ddd D MMM",
              hour: "ddd D MMM hA",
              day: "ddd MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY",
            },
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

var thd_config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Daily dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [],
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
          },
          type: "time",
          ticks: {
            display: true,
          },
          time: {
            unit: "",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "D MMM",
              minute: "ddd D MMM",
              hour: "ddd D MMM hA",
              day: "ddd MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY",
            },
          },
          offsetGridLines: true,
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

var tdi_config = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Daily dataset",
        backgroundColor: window.chartColors.red,
        borderColor: window.chartColors.red,
        data: [],
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
          },
          type: "time",
          ticks: {
            display: true,
          },
          time: {
            unit: "",
            displayFormats: {
              millisecond: "h:mm:ss.SSS a",
              second: "D MMM",
              minute: "ddd D MMM",
              hour: "ddd D MMM hA",
              day: "ddd MMM D",
              week: "ll",
              month: "MMM YYYY",
              quarter: "[Q]Q - YYYY",
              year: "YYYY",
            },
          },
          offsetGridLines: true,
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

var combconfig = [
  saving_config,
  usage_config,
  energy_config,
  power_config,
  thd_config,
  tdi_config,
];

// combinectx[0].getContext("2d");
// window.dailyLine = new Chart(combinectx[0], dailyconfig);
var dropselect = document.getElementById("dropdown-select-dashboard");
// var combinectx = document.getElementsByClassName("line-bar-canvas");
var saving_id = document.getElementById("saving-line-bar-canvas");
var usage_id = document.getElementById("usage-line-bar-canvas");
var energy_id = document.getElementById("energy-line-bar-canvas");
var power_factor_id = document.getElementById("power-factor-line-bar-canvas");
var thd_id = document.getElementById("thd-line-bar-canvas");
var tdi_id = document.getElementById("tdi-line-bar-canvas");

var combinectx = [
  saving_id,
  usage_id,
  energy_id,
  power_factor_id,
  thd_id,
  tdi_id,
];

dropselect.addEventListener("change", (event) => {
  if (event.target.value) {
    showchartdata(event.target.value);
  } else {
    // console.log("here it runs");
    showchartdata("daily");
  }
});

var saving_dash_line = "";
var usage_dash_line = "";
var energy_dash_line = "";
var power_factor_dash_line = "";
var thd_dash_line = "";
var tdi_dash_line = "";
var dashline = [
  saving_dash_line,
  usage_dash_line,
  energy_dash_line,
  power_factor_dash_line,
  thd_dash_line,
  tdi_dash_line,
];

async function fetchdata() {
  $.ajax({
    method: "GET",
    url: endpoint,
    dataType: "json",
    success: function (data) {
      Data = data;
      console.log(data["daily"]);
      // console.log(data["daily"][0]["time"]);
      // showchartdata();
      showchartdata();
    },
    error: function (error_data) {
      console.log(error_data);
    },
  });
}

async function showchartdata(t = "daily") {
  d_type = t.toLowerCase();

  var requirechartData = Data[d_type];
  console.log(requirechartData);
  var requireDatakey = Object.keys(requirechartData[0]);

  //   if(chartCreated.length <= 4 || chartCreated.length !== new Set(chartCreated).size) {
  //     console.log("it should run")
  //  }else{
  //   console.log("it should not run")
  //  }

  combconfig.forEach(function (u, v) {
    u.options.scales.xAxes[0].time.unit = "";
    // console.log(u.data.labels.length);
    u.data.labels.splice(0, u.data.labels.length);
    
    u.data.datasets.forEach((dataset) => {
      dataset.data.splice(0, dataset.data.length);
      // console.log(x)
      // dataset.label = `${d_type} dataset`;
    });

    requirechartData.forEach(function (x, i) {
      // console.log(x[requirechartData[i]]);

      u.data.labels.push(x["time"]);
      // chartCreated.push(x["time"]);

      // u.data.datasets.data.push(x[requirechartData[i]]);
      u.data.datasets.forEach((dataset) => {
        dataset.data.push(x[requireDatakey[v]]);
        // console.log(x)
        dataset.label = `${d_type} dataset`;
      });
    });
    // distroy previous chart
    if (combinectx[v] != null) {
      combinectx[v].getContext("2d");
      if (window.dashline[v] != "" || window.dashline[v]) {
        // console.log("distroying");
        window.dashline[v].destroy();
      }
      // console.log(d_type);
      d_type == "weekly"
        ? ((u.type = "bar"), (u.options.scales.xAxes[0].time.unit = "day"),(u.data.datasets[0].backgroundColor = window.chartColors.lightergreen),
        (u.data.datasets[0].borderColor = window.chartColors.lightergreen))
        : d_type == "monthly"
        ? ((u.type = "bar"), (u.options.scales.xAxes[0].time.unit = "day"),(u.data.datasets[0].backgroundColor = window.chartColors.bluegreen),
          (u.data.datasets[0].borderColor = window.chartColors.bluegreen))
        : d_type == "yearly"
        ? ((u.type = "bar"), (u.options.scales.xAxes[0].time.unit = "month"),(u.data.datasets[0].backgroundColor = window.chartColors.cyan),
        (u.data.datasets[0].borderColor = window.chartColors.cyan))
        : ((u.type = "line"), (u.options.scales.xAxes[0].time.unit = "hour"));

      window.dashline[v] = new Chart(combinectx[v], u);
    }
    // if (chartCreated.includes(x["time"])) {
    //   console.log("already added");
    // }
  });
}

// function clearchart
$(document).ready(function () {
  // var ctx = document.getElementById("myChart");
  fetchdata();
});
