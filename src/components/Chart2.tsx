import { CChart } from "@coreui/react-chartjs";

function Charts2() {
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
              backgroundColor: "rgba(151, 143, 237, 0.5)",
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              borderColor: "#978FED",
              pointBackgroundColor: "rgba(0, 0, 0,0 )",
              pointBorderColor: "rgba(0, 0, 0,0 )",
              data: [0, 100, 150, 90, 200, 125, 270, 290],
              spanGaps: true,
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
                color: "",
              },
              ticks: {
                display: false, // Hide y-axis ticks
              },
            },
            y: {
              grid: {
                color: "",
              },
              ticks: {
                display: false, // Hide y-axis ticks
              },
            },
          },
        }}
      />
    </div>
  );
}
export default Charts2;
