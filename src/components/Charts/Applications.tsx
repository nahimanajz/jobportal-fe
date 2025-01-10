import { Line } from 'react-chartjs-2';

const ApplicationsOverTime = ({ data }:{data:any}) => {
  const chartData = {
    labels: data.map((item:any) => item.date),
    datasets: [
      {
        label: 'Job Applications Over Time',
        data: data.map((item:any) => item.count),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };

  return (
    <div>
      <h2>Applications Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ApplicationsOverTime;
