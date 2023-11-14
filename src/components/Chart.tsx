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
              // label: "",

              // borderCapStyle: 'none',
              backgroundColor: "#25CD25",
              borderColor: "rgba(220, 220, 220, 1)",
              pointBackgroundColor: "#25CD25",
              pointBorderColor: "#fff",
              data: [0, 100, 200, 225, 275, 290, 300],
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
                color: "#25CD25",
              },
              ticks: {
                color: "#25CD25",
              },
            },
            y: {
              grid: {
                color: "#25CD25",
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
