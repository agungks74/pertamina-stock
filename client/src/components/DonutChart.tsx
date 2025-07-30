import { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables);

interface DonutChartProps {
  percentage: number;
  size?: number;
  className?: string;
}

export default function DonutChart({ percentage, size = 80, className = "" }: DonutChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Destroy existing chart
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percentage, 100 - percentage],
          backgroundColor: [
            percentage === 100 ? 'hsl(145, 63%, 42%)' : // green
            percentage > 0 ? 'hsl(35, 91%, 51%)' : // orange
            'hsl(220, 13%, 91%)', // gray
            'hsl(220, 13%, 91%)' // gray for remaining
          ],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            enabled: false
          }
        }
      }
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [percentage]);

  const getPercentageColor = () => {
    if (percentage === 100) return 'text-green-600';
    if (percentage > 0) return 'text-orange-500';
    return 'text-gray-400';
  };

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="absolute inset-0"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className={`text-xs font-bold ${getPercentageColor()}`}>
          {percentage}%
        </span>
      </div>
    </div>
  );
}
