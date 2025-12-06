"use client"
import React, { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { BarChart3, PieChart, TrendingUp, Calendar, DollarSign, Package, ShoppingCart, Sparkles } from 'lucide-react';
import Navbar from '@/components/NavBar';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

export default function PredictTrendsPage() {
  const [chartType, setChartType] = useState<'doughnut' | 'bar'>('doughnut');

  // Current data
  const doughnutData = {
    labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books'],
    datasets: [
      {
        data: [35, 25, 20, 12, 8],
        backgroundColor: [
          'rgb(20, 184, 166)',
          'rgb(99, 102, 241)',
          'rgb(239, 68, 68)',
          'rgb(245, 158, 11)',
          'rgb(139, 92, 246)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [125000, 145000, 165000, 155000, 185000, 195000],
        backgroundColor: 'rgb(20, 184, 166)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
      },
    },
  };

  const predictions = [
    {
      month: 'May 2025',
      revenue: '$215,000',
      growth: '+10.3%',
      units: '11,200',
      confidence: '92%',
      icon: Calendar,
      color: 'teal',
    },
    {
      month: 'June 2025',
      revenue: '$235,000',
      growth: '+9.3%',
      units: '12,100',
      confidence: '88%',
      icon: TrendingUp,
      color: 'blue',
    },
    {
      month: 'July 2025',
      revenue: '$248,000',
      growth: '+5.5%',
      units: '12,800',
      confidence: '85%',
      icon: Sparkles,
      color: 'purple',
    },
  ];

  const insights = [
    {
      title: 'Expected Revenue Growth',
      value: '+25%',
      description: 'Projected growth over next 3 months',
      icon: DollarSign,
      trend: 'up',
    },
    {
      title: 'Peak Sales Period',
      value: 'July',
      description: 'Highest predicted sales month',
      icon: ShoppingCart,
      trend: 'up',
    },
    {
      title: 'Top Category',
      value: 'Electronics',
      description: 'Leading category for Q3',
      icon: Package,
      trend: 'stable',
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 pt-16 overflow-y-auto">
        <div className="flex">
          {/* Left Side - Chart Visualization */}
          <div className="w-1/2 bg-gray-50 p-8 flex flex-col">
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Current Data</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setChartType('doughnut')}
                    className={`p-3 transition-all ${chartType === 'doughnut'
                        ? 'bg-teal-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    <PieChart className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setChartType('bar')}
                    className={`p-3 transition-all ${chartType === 'bar'
                        ? 'bg-teal-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    <BarChart3 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Chart Display */}
              <div className="flex-1 bg-white p-6 border border-gray-200 flex items-center justify-center">
                <div className="w-full h-full max-h-96">
                  {chartType === 'doughnut' ? (
                    <Doughnut data={doughnutData} options={chartOptions} />
                  ) : (
                    <Bar data={barData} options={chartOptions} />
                  )}
                </div>
              </div>

              {/* Quick Insights */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                {insights.map((insight, index) => {
                  const Icon = insight.icon;
                  return (
                    <div key={index} className="bg-white p-4 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-teal-500" />
                        <p className="text-xs text-gray-600">{insight.title}</p>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{insight.value}</p>
                      <p className="text-xs text-gray-500 mt-1">{insight.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Predictions */}
          <div className="w-1/2 bg-linear-to-br from-teal-500 to-teal-600 p-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8" />
              <h2 className="text-3xl font-semibold">InsightsForge</h2>
            </div>
            <p className="text-white/90 mb-8">Based on historical data and market trends</p>

            {/* Prediction Cards */}
            <div className="space-y-4 mb-8">
              {predictions.map((pred, index) => {
                const Icon = pred.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-6 border border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/20">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{pred.month}</h3>
                          <p className="text-sm text-white/80">Predicted Period</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{pred.growth}</p>
                        <p className="text-sm text-white/80">Growth</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                      <div>
                        <p className="text-sm text-white/70 mb-1">Revenue</p>
                        <p className="text-lg font-semibold">{pred.revenue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/70 mb-1">Units</p>
                        <p className="text-lg font-semibold">{pred.units}</p>
                      </div>
                      <div>
                        <p className="text-sm text-white/70 mb-1">Confidence</p>
                        <p className="text-lg font-semibold">{pred.confidence}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Key Recommendations */}
            <div className="bg-white/10 backdrop-blur-sm p-6 border border-white/20">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Key Recommendations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-white/90">Increase inventory for Electronics category by 15% for May</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-white/90">Launch promotional campaign in June to maximize peak period</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-white/90">Focus on online channels - 68% growth predicted</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                  <p className="text-white/90">Optimize supply chain for July peak demand</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
