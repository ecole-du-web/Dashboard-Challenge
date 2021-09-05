var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"],
    datasets: [
      {
        label: "Last 6 Months Savings",
        data: [537, 847, 530, 1254, 1530, 1210],
        fill: true,
        borderColor: "violet",
        backgroundColor: "#CBD0FF",
        tension: 0.3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  },
});

var ctx = document.getElementById("pieChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    datasets: [
      {
        label: "My First Dataset",
        data: [1500, 300],
        backgroundColor: [
          "rgb(54, 162, 235)",
          "rgb(255, 99, 132)",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      //   display: false,
    },
  },
});


// Nav

const floatingBtn = document.querySelector('.floating-btn')
const sidenav = document.querySelector('.sidenav')

floatingBtn.addEventListener('click', () => {
  sidenav.classList.toggle('active')
})