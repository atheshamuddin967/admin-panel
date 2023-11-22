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
              fill: false,
              backgroundColor: "green",
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "#25CD25",
              pointBorderColor: "#fff",
              data: [0, 100, 150, 180, 200, 225, 270, 290],
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "#25CD25",
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: "",
              },
              ticks: {
                color: "#25CD25",
              },
            },
            y: {
              grid: {
                color: "",
              },
              ticks: {
                color: "#25CD25",
              },
            },
          },
        }}
      />
    </div>
  );
}
export default Charts;
