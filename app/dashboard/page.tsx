"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import { BarChart3, LineChart, PieChart, Radar as RadarIcon } from 'lucide-react';
import Navbar from '@/components/NavBar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend);

export default function AnalyticsPage() {
  const [chartType, setChartType] = useState<'line' | 'bar' | 'doughnut' | 'radar'>('line');
  const [insightMetric, setInsightMetric] = useState<'revenue' | 'profit' | 'units' | 'orders'>('revenue');

  // Sample data - replace with actual data
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [125000, 145000, 165000, 155000, 185000, 195000, 210000, 225000, 215000, 240000, 255000, 270000],
        borderColor: 'rgb(20, 184, 166)',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const doughnutData = {
    labels: ['Online', 'Offline'],
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ['rgb(20, 184, 166)', 'rgb(203, 213, 225)'],
        borderWidth: 0,
      },
    ],
  };

  const radarData = {
    labels: ['Revenue', 'Profit', 'Units Sold', 'Orders', 'Customer Satisfaction', 'Market Share'],
    datasets: [
      {
        label: 'Performance Metrics',
        data: [85, 75, 90, 80, 88, 72],
        borderColor: 'rgb(20, 184, 166)',
        backgroundColor: 'rgba(20, 184, 166, 0.2)',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
    },
    scales: chartType !== 'doughnut' ? {
      y: {
        beginAtZero: true,
      },
    } : undefined,
  };

  // Sample insights data
  const insights = {
    revenue: {
      highest: { label: 'December', value: '$270,000', region: 'North America' },
      lowest: { label: 'January', value: '$125,000', region: 'Asia' },
      average: { label: 'Monthly Avg', value: '$198,750', region: 'Global' },
      total: { label: 'Total Revenue', value: '$2,385,000', region: 'All Regions' },
    },
    profit: {
      highest: { label: 'December', value: '$85,000', region: 'Europe' },
      lowest: { label: 'February', value: '$32,000', region: 'South America' },
      average: { label: 'Monthly Avg', value: '$58,500', region: 'Global' },
      total: { label: 'Total Profit', value: '$702,000', region: 'All Regions' },
    },
    units: {
      highest: { label: 'December', value: '12,500 units', region: 'Asia' },
      lowest: { label: 'January', value: '5,800 units', region: 'Africa' },
      average: { label: 'Monthly Avg', value: '9,200 units', region: 'Global' },
      total: { label: 'Total Units', value: '110,400 units', region: 'All Regions' },
    },
    orders: {
      highest: { label: 'November', value: '1,850 orders', region: 'North America' },
      lowest: { label: 'March', value: '890 orders', region: 'Australia' },
      average: { label: 'Monthly Avg', value: '1,425 orders', region: 'Global' },
      total: { label: 'Total Orders', value: '17,100 orders', region: 'All Regions' },
    },
  };

  const currentInsights = insights[insightMetric];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 overflow-y-auto">
        <div className="p-8">
          <div className="max-w-7xl mx-auto space-y-8">
        {/* Chart Section */}
        <div className="bg-white border border-gray-200 p-6">
          {/* Chart Header with Toggle */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Data Visualization</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setChartType('line')}
                className={`p-3 transition-all ${
                  chartType === 'line'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <LineChart className="w-5 h-5" />
              </button>
              <button
                onClick={() => setChartType('bar')}
                className={`p-3 transition-all ${
                  chartType === 'bar'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <BarChart3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setChartType('doughnut')}
                className={`p-3 transition-all ${
                  chartType === 'doughnut'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <PieChart className="w-5 h-5" />
              </button>
              <button
                onClick={() => setChartType('radar')}
                className={`p-3 transition-all ${
                  chartType === 'radar'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <RadarIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chart Display */}
          <div className="h-96">
            {chartType === 'line' && <Line data={chartData} options={chartOptions} />}
            {chartType === 'bar' && <Bar data={chartData} options={chartOptions} />}
            {chartType === 'doughnut' && (
              <div className="h-full flex items-center justify-center">
                <div className="w-96 h-96">
                  <Doughnut data={doughnutData} options={chartOptions} />
                </div>
              </div>
            )}
            {chartType === 'radar' && (
              <div className="h-full flex items-center justify-center">
                <div className="w-full max-w-2xl h-96">
                  <Radar data={radarData} options={chartOptions} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Key Insights Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Key Insights</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setInsightMetric('revenue')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  insightMetric === 'revenue'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Revenue
              </button>
              <button
                onClick={() => setInsightMetric('profit')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  insightMetric === 'profit'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Profit
              </button>
              <button
                onClick={() => setInsightMetric('units')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  insightMetric === 'units'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Units Sold
              </button>
              <button
                onClick={() => setInsightMetric('orders')}
                className={`px-4 py-2 text-sm font-medium transition-all ${
                  insightMetric === 'orders'
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Orders
              </button>
            </div>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-linear-to-br from-teal-500 to-teal-400 p-6 text-white">
              <p className="text-sm font-medium text-white/80 mb-2">Highest</p>
              <p className="text-3xl font-bold mb-1">{currentInsights.highest.value}</p>
              <p className="text-sm text-white/90">{currentInsights.highest.label}</p>
              <p className="text-xs text-white/70 mt-2">{currentInsights.highest.region}</p>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-600 mb-2">Lowest</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">{currentInsights.lowest.value}</p>
              <p className="text-sm text-gray-700">{currentInsights.lowest.label}</p>
              <p className="text-xs text-gray-500 mt-2">{currentInsights.lowest.region}</p>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <p className="text-sm font-medium text-gray-600 mb-2">Average</p>
              <p className="text-3xl font-bold text-gray-900 mb-1">{currentInsights.average.value}</p>
              <p className="text-sm text-gray-700">{currentInsights.average.label}</p>
              <p className="text-xs text-gray-500 mt-2">{currentInsights.average.region}</p>
            </div>

            <div className="bg-linear-to-br from-gray-900 to-gray-800 p-6 text-white">
              <p className="text-sm font-medium text-white/80 mb-2">Total</p>
              <p className="text-3xl font-bold mb-1">{currentInsights.total.value}</p>
              <p className="text-sm text-white/90">{currentInsights.total.label}</p>
              <p className="text-xs text-white/70 mt-2">{currentInsights.total.region}</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}