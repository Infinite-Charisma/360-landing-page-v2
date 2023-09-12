import Highcharts from "highcharts";

export const totalOptions: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    chart: {
      backgroundColor: "transparent",
      plotShadow: false,
      margin: 0,
      // width: 600,
      // height: 600,
    },
    title: {
      text: "",
    },
    tooltip: {
      pointFormat: "<b>{point.name}</b>: {point.percentage:.1f} %",
      useHTML: true,
      backgroundColor: "none",
      style: {
        color: "#FFFFFF",
      },
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          distance: -30,
          enabled: false,
        },
        startAngle: 225,
        center: ["50%", "50%"],
        borderColor: "transparent",
      },
    },
    series: [
      {
        type: "pie",
        name: "Pool Value",
        innerSize: "70%",
        data: [
          {
            y: 40,
            name: "Public sale",
            sliced: true,
            color: "#EB4899",
          },
          {
            y: 10,
            name: "Team",
            color: "#8C3DE6",
          },
          {
            y: 10,
            name: "Treasury",
            color: "#F5AC37",
          },
          {
            y: 10,
            name: "Marketing",
            color: "#28E0B9",
          },
          {
            y: 15,
            name: "Airdrop",
            color: "#1C1D1F",
          },
          {
            y: 15,
            name: "Liquidity pool",
            color: "#47484A",
          },
        ],
      },
    ],
};