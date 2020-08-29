var endpoint = "/last/";
var defaultData = [];
var labelss = [];
var realtimectx_volt1_Line = "";
var flag = 1;
function fetchdata() {
  $.ajax({
    method: "GET",
    url: endpoint,
    dataType: "json",
    success: function (data) {
      labelss = Object.keys(data);
      defaultData = Object.values(data);

      console.log(new Date(defaultData[1]));
      console.log(defaultData[2]);

      setChart();
      flag = 0;
    },
    error: function (error_data) {
      console.log("error");
    },
  });
  if (flag) {
    setChart();
  } else {
    addData();
  }
}

var realtimectx_volt1 = document.getElementById("volt1-line-bar-canvas");

var realtimectx_volt1_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_amp1 = document.getElementById("amp1-line-bar-canvas");
var realtimectx_amp1_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kw1 = document.getElementById("kw1-line-bar-canvas");
var realtimectx_kw1_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_pf1 = document.getElementById("pf1-line-bar-canvas");
var realtimectx_pf1_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kvar1 = document.getElementById("kvar1-line-bar-canvas");
var realtimectx_kvar1_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_volt2 = document.getElementById("volt2-line-bar-canvas");
var realtimectx_volt2_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_amp2 = document.getElementById("amp2-line-bar-canvas");
var realtimectx_amp2_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kw2 = document.getElementById("kw2-line-bar-canvas");
var realtimectx_kw2_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_pf2 = document.getElementById("pf2-line-bar-canvas");
var realtimectx_pf2_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kvar2 = document.getElementById("kvar2-line-bar-canvas");
var realtimectx_kvar2_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kva2 = document.getElementById("kva2-line-bar-canvas");
var realtimectx_kva2_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_volt3 = document.getElementById("volt3-line-bar-canvas");
var realtimectx_volt3_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_amp3 = document.getElementById("amp3-line-bar-canvas");
var realtimectx_amp3_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kw3 = document.getElementById("kw3-line-bar-canvas");
var realtimectx_kw3_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_pf3 = document.getElementById("pf3-line-bar-canvas");
var realtimectx_pf3_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kvar3 = document.getElementById("kvar3-line-bar-canvas");
var realtimectx_kvar3_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};
var realtimectx_kva3 = document.getElementById("kva3-line-bar-canvas");
var realtimectx_kva3_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "volt1",
        data: defaultData[2],
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 1,
        fill: false,
      },
    ],
  },

  options: {
    responsive: true,
    animation: false,
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
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt1",
          },
        },
      ],
    },
  },
};

var realtimectx_volt1_line = "";
var realtimectx_amp1_line = "";
var realtimectx_kw1_line = "";
var realtimectx_pf1_line = "";
var realtimectx_kvar1_line = "";
var realtimectx_volt2_line = "";
var realtimectx_amp2_line = "";
var realtimectx_kw2_line = "";
var realtimectx_pf2_line = "";
var realtimectx_kvar2_line = "";
var realtimectx_kva2_line = "";
var realtimectx_volt3_line = "";
var realtimectx_amp3_line = "";
var realtimectx_kw3_line = "";
var realtimectx_pf3_line = "";
var realtimectx_kvar3_line = "";
var realtimectx_kva3_line = "";

var ctx_config = [
  realtimectx_volt1_config,
  realtimectx_amp1_config,
  realtimectx_kw1_config,
  realtimectx_pf1_config,
  realtimectx_kvar1_config,
  realtimectx_volt2_config,
  realtimectx_amp2_config,
  realtimectx_kw2_config,
  realtimectx_pf2_config,
  realtimectx_kvar2_config,
  realtimectx_kva2_config,
  realtimectx_volt3_config,
  realtimectx_amp3_config,
  realtimectx_kw3_config,
  realtimectx_pf3_config,
  realtimectx_kvar3_config,
  realtimectx_kva3_config,
];
var ctx_id = [
  realtimectx_volt1,
  realtimectx_amp1,
  realtimectx_kw1,
  realtimectx_pf1,
  realtimectx_kvar1,
  realtimectx_volt2,
  realtimectx_amp2,
  realtimectx_kw2,
  realtimectx_pf2,
  realtimectx_kvar2,
  realtimectx_kva2,
  realtimectx_volt3,
  realtimectx_amp3,
  realtimectx_kw3,
  realtimectx_pf3,
  realtimectx_kvar3,
  realtimectx_kva3,
];
var ctx_line = [
  realtimectx_volt1_line,
  realtimectx_amp1_line,
  realtimectx_kw1_line,
  realtimectx_pf1_line,
  realtimectx_kvar1_line,
  realtimectx_volt2_line,
  realtimectx_amp2_line,
  realtimectx_kw2_line,
  realtimectx_pf2_line,
  realtimectx_kvar2_line,
  realtimectx_kva2_line,
  realtimectx_volt3_line,
  realtimectx_amp3_line,
  realtimectx_kw3_line,
  realtimectx_pf3_line,
  realtimectx_kvar3_line,
  realtimectx_kva3_line,
];

function setChart() {
  // realtime
  ctx_id.forEach(function (item, index) {
    if (item != null) {
      item.getContext("2d");
      window.ctx_line[index] = new Chart(item, ctx_config[index]);
    }
  });
}

function addData() {
  ctx_id.forEach(function (item, index) {
    if (item.data.labels.includes(defaultData[1])) {
      return false;
    } else {
      item.data.labels.push(defaultData[1]);

      item.data.datasets.forEach((dataset) => {
        dataset.data.push(defaultData[index + 2]);
      });
      // chart.update();
      window.ctx_line[index].update();
    }
  });
}

// var ctx = document.getElementById("myChart");

$(document).ready(function () {
  setInterval(fetchdata, 2000);
});
