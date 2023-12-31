import { CChart } from "@coreui/react-chartjs";

function Charts() {
  //

  return (
    <div>
      <CChart
        type="line"
        data={{
          labels: ["2016", "2017", "2019", "2020", "2021", "2021", "2023"],
          datasets: [
            {
              borderDashOffset: 0.0,
              label: "Details",
              fill: true,
              backgroundColor: "#25CD2566",
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0, 0, 0,0 )",
              pointBackgroundColor: "rgba(0, 0, 0,0 )",
              pointBorderColor: "rgba(0, 0, 0,0 )",
              data: [0, 100, 150, 180, 200, 225, 270, 290],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: "#F1F1F1",
              },
              ticks: {
                color: "black",
              },
            },
            y: {
              grid: {
                color: "#F1F1F1",
              },
              ticks: {
                // color: "#25CD25",
              },
            },
          },
        }}
      />
    </div>
  );
}
export default Charts;
