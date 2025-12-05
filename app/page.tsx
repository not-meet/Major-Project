"use client"
import { Upload, TrendingUp, BarChart3, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-700 leading-tight tracking-tight">
            Analysing monthly data and upcoming trends with your data{' '}
            <span className="text-teal-500 font-extrabold">
              made so simple like never before!
            </span>
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <button onClick={() => {router.push('/upload')}} className="group flex items-center gap-3 px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all duration-300 shadow-sm hover:shadow-md">
            <Upload className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Upload new data</span>
          </button>

          <button onClick={() => {router.push('/predict-data')}} className="group flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border-2 border-teal-500 rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-sm hover:shadow-md">
            <TrendingUp className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Predict trends</span>
          </button>

          <button onClick={() => {router.push('/dashboard')}} className="group flex items-center gap-3 px-8 py-4 bg-white text-gray-900 border-2 border-teal-500 rounded-lg hover:bg-teal-50 transition-all duration-300 shadow-sm hover:shadow-md">
            <BarChart3 className="w-5 h-5 text-teal-500 group-hover:scale-110 transition-transform" />
            <span className="font-bold">Analyse existing data</span>
          </button>

          <button onClick={() => {router.push('/ask-moonlit')}} className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-lg hover:from-teal-600 hover:to-teal-500 transition-all duration-300 shadow-sm hover:shadow-md">
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span className="font-bold">Ask Moonlit</span>
          </button>
        </div>
      </div>
    </div>
  );
}
