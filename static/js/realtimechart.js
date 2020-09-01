var endpoint = "/last/";
var defaultData = [];
var defaultlabel = [];
var requireData = [];
var requireIconData = [];
var flag = 1;
async function fetchdata() {
  $.ajax({
    method: "GET",
    url: endpoint,
    dataType: "json",
    success: function (data) {
      defaultlabel = Object.keys(data);
      defaultData = Object.values(data);
      requireIconData = Object.values(data);
      // console.log(defaultData);
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
    changeIcon();
  }
}

var realtimectx_volt1 = document.getElementById("volt1-line-bar-canvas");
var realtimectx_volt1_config = {
  type: "line",
  data: {
    labels: defaultData[1],
    datasets: [
      {
        label: "Volt1",
        data: defaultData[2],
        borderColor: "rgba(229, 102, 39, 1)",
        backgroundColor: "rgba(229, 102, 39, 0.5)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          ticks: {
            display: true,
            autoskip: false,
            min: 5,
          },
          time: {
            unit: "second",
          },
          offsetGridLines: true,
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "Volt1",
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
        label: "amp1",
        data: defaultData[3],
        backgroundColor: "rgba(199, 143, 22, 0.5)",
        borderColor: "rgba(199, 143, 22, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          ticks: {
            display: true,
            autoskip: false,
            maxTicksLimit: 20,
          },
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "amp1",
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
        label: "kw1",
        data: defaultData[4],
        backgroundColor: "rgba(143, 186, 19, 0.5)",
        borderColor: "rgba(143, 186, 19, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,

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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "kw1",
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
        label: "pf1",
        data: defaultData[5],
        backgroundColor: "rgba(12, 178, 58, 0.5)",
        borderColor: "rgba(12, 178, 58, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "pf1",
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
        label: "kvar1",
        data: defaultData[6],
        backgroundColor: "rgba(7, 147, 133, 0.5)",
        borderColor: "rgba(77, 147, 133, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "kvar1",
          },
        },
      ],
    },
  },
};
var realtimectx_kva1 = document.getElementById("kva1-line-bar-canvas");
var realtimectx_kva1_config = {
  type: "line",
  data: {
    labels: defaultData[7],
    datasets: [
      {
        label: "kva1",
        data: defaultData[7],
        backgroundColor: "rgba(15, 98, 137, 0.5)",
        borderColor: "rgba(15, 98, 137, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "kva1",
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
        label: "volt2",
        data: defaultData[10],
        backgroundColor: "rgba(15, 25, 151, 0.5)",
        borderColor: "rgba(15, 25, 151, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt2",
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
        label: "amp2",
        data: defaultData[11],
        backgroundColor: "rgba(55, 11, 119, 0.5)",
        borderColor: "rgba(55, 11, 119, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "amp2",
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
        label: "kw2",
        data: defaultData[12],
        backgroundColor: "rgba(90, 9, 103, 0.5)",
        borderColor: "rgba(90, 9, 103, 1)",
        borderWidth: 1,
        fill: true,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "kw2",
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
        label: "pf2",
        data: defaultData[13],
        backgroundColor: "rgba(95, 9, 59, 0.5)",
        borderColor: "rgba(95, 9, 59, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "pf2",
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
        label: "kvar2",
        data: defaultData[14],
        backgroundColor: "rgba(234, 5, 57, 0.5)",
        borderColor: "rgba(234, 5, 57, 1)",
        borderWidth: 1,
        fill: true,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "kvar2",
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
        label: "kva2",
        data: defaultData[15],
        backgroundColor: "rgba(181, 227, 7, 0.5)",
        borderColor: "rgba(181, 227, 7, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "kva2",
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
        label: "volt3",
        data: defaultData[18],
        backgroundColor: "rgba(231, 205, 24, 0.5)",
        borderColor: "rgba(231, 205, 24, 1)",
        borderWidth: 1,
        fill: true,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "volt3",
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
        label: "amp3",
        data: defaultData[19],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(46, 191, 7, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "amp3",
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
        label: "kw3",
        data: defaultData[20],
        backgroundColor: "rgba(41, 246, 122,0.5)",
        borderColor: "rgba(41, 246, 122,1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "kw3",
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
        label: "pf3",
        data: defaultData[21],
        backgroundColor: "rgba(244, 151, 33, 0.5)",
        borderColor: "rgba(244, 151, 33,1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
          time: {
            unit: "second",
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: "pf3",
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
        label: "kvar3",
        data: defaultData[22],
        backgroundColor: "rgba(104, 231, 5, 0.5)",
        borderColor: "rgba(104, 231, 5, 1)",
        borderWidth: 1,
        fill: true,
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
            labelString: "kvar3",
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
        label: "kva3",
        data: defaultData[23],
        backgroundColor: "rgba(6, 178, 183, 0.5)",
        borderColor: "rgba(6, 178, 183, 1)",
        borderWidth: 1,
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    maintainAspectRatio: false,
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
            labelString: "kva3",
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
var realtimectx_kva1_line = "";
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
  realtimectx_kva1_config,
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
  realtimectx_kva1,
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
  realtimectx_kva1_line,
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

var clo1_icon = document.getElementById("clo1-icon");
var rct1_icon = document.getElementById("rct1-icon");
var clo2_icon = document.getElementById("clo2-icon");
var rct2_icon = document.getElementById("rct2-icon");
var clo3_icon = document.getElementById("clo3-icon");
var rct3_icon = document.getElementById("rct3-icon");
var cap1_icon = document.getElementById("cap1-icon");
var cap2_icon = document.getElementById("cap2-icon");
var cap3_icon = document.getElementById("cap3-icon");
var cap4_icon = document.getElementById("cap4-icon");
var cap5_icon = document.getElementById("cap5-icon");
var cap6_icon = document.getElementById("cap6-icon");
var cap7_icon = document.getElementById("cap7-icon");
var cap8_icon = document.getElementById("cap8-icon");
var cap9_icon = document.getElementById("cap9-icon");
var ca10_icon = document.getElementById("ca10-icon");
var cap11_icon = document.getElementById("cap11-icon");
var cap12_icon = document.getElementById("cap12-icon");

var other_array = [
  "clo1",
  "rct1",
  "clo2",
  "rct2",
  "clo3",
  "rct3",
  "cap1",
  "cap2",
  "cap3",
  "cap4",
  "cap5",
  "cap6",
  "cap7",
  "cap8",
  "cap9",
  "cap10",
  "cap11",
  "cap12",
];
var icon_array = [
  clo1_icon,
  rct1_icon,
  clo2_icon,
  rct2_icon,
  clo3_icon,
  rct3_icon,
  cap1_icon,
  cap2_icon,
  cap3_icon,
  cap4_icon,
  cap5_icon,
  cap6_icon,
  cap7_icon,
  cap8_icon,
  cap9_icon,
  ca10_icon,
  cap11_icon,
  cap12_icon,
];

var volt1_span = document.getElementById("volt1-span");
var amp1_span = document.getElementById("amp1-span");
var kw1_span = document.getElementById("kw1-span");
var pf1_span = document.getElementById("pf1-span");
var kvar1_span = document.getElementById("kvar1-span");
var kva1_span = document.getElementById("kva1-span");
var volt2_span = document.getElementById("volt2-span");
var amp2_span = document.getElementById("amp2-span");
var kw2_span = document.getElementById("kw2-span");
var pf2_span = document.getElementById("pf2-span");
var kvar2_span = document.getElementById("kvar2-span");
var kva2_span = document.getElementById("kva2-span");
var volt3_span = document.getElementById("volt3-span");
var amp3_span = document.getElementById("amp3-span");
var kw3_span = document.getElementById("kw3-span");
var pf3_span = document.getElementById("pf3-span");
var kvar3_span = document.getElementById("kvar3-span");
var kva3_span = document.getElementById("kva3-span");

var realtime_value_array = [
  volt1_span,
  amp1_span,
  kw1_span,
  pf1_span,
  kvar1_span,
  kva1_span,
  volt2_span,
  amp2_span,
  kw2_span,
  pf2_span,
  kvar2_span,
  kva2_span,
  volt3_span,
  amp3_span,
  kw3_span,
  pf3_span,
  kvar3_span,
  kva3_span,
];

async function setChart() {
  // realtime
  ctx_id.forEach(function (item, index) {
    if (item != null) {
      item.getContext("2d");
      window.ctx_line[index] = new Chart(item, ctx_config[index]);
    }
    // if (ctx_config[index].data.datasets.label == undefined) {
    //   console.log('its undefined'+defaultlabel[index + 2])
    //   ctx_config[index].data.datasets.label = defaultlabel[index + 2];
    //   window.ctx_line[index].update();
    // }
  });
}

async function addData() {
  var requireData = defaultData;
  requireData.splice(7, 2); // removing clo1 and rct1
  requireData.splice(14, 2); // removing clo2 and rct2
  requireData.splice(20, 20); // removing clo3 and so on
  // ShowRealtimeValue(requireData);
  // console.log(requireData);
  ctx_config.forEach(function (item, index) {
    if (item.data.labels.includes(requireData[1])) {
      return false;
    } else {
      if (item.data.labels.length == 10) {
        item.data.labels.shift();
      }
      item.data.labels.push(requireData[1]);

      // item.data.datasets.label = defaultlabel[index + 2] + ' ' + defaultData[index + 2]

      item.data.datasets.forEach((dataset) => {
        if (item.data.labels.length == 10) {
          dataset.data.shift();
        }
        dataset.data.push(requireData[index + 2]);

        // console.log(defaultlabel[index + 2] + " " + requireData[index + 2]);
      });

      // chart.update();
    }
    // console.log(requireData);
    realtime_value_array[index].innerHTML = requireData[index + 2];
    window.ctx_line[index].update();
    // realtime_value_array[index].innerHTML = requireData[index + 2] + "";
  });
}

// async function ShowRealtimeValue(data) {
//   console.log(data);
//   realtime_value_array.forEach(function (item1, index1) {
//     item1.innerHTML = data[index1 + 2];
//   });
// }

async function changeIcon() {
  requireIconData.splice(0, 8);
  requireIconData.splice(2, 6);
  requireIconData.splice(4, 6);
  // console.log(requireIconData);
  icon_array.forEach(function (item, index) {
    if (requireIconData[index] === 1) {
      if (index < 6) {
        item.style.color = "red";
      } else {
        item.style.color = "green";
      }
    } else {
      item.style.color = "grey";
    }
  });
}

function fetchdataa() {
  console.log("helllow");
}
$(document).ready(function () {
  // var ctx = document.getElementById("myChart");
  setInterval(fetchdata, 1000);
});
