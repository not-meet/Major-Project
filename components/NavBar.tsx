import { Upload, TrendingUp, BarChart3, Sparkles } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="flex items-center justify-between px-8 py-4">
        {/* Left - Project Name */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-semibold text-gray-900">
            esilyse
          </a>
        </div>

        {/* Right - Navigation Buttons */}
        <div className="flex items-center gap-2">
          <button onClick={() => router.push('/upload')} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-teal-500 hover:bg-teal-50 transition-all">
            <Upload className="w-4 h-4" />
            <span className="text-sm font-medium">Upload new data</span>
          </button>

          <button onClick={() => router.push('/predict-data')} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-teal-500 hover:bg-teal-50 transition-all">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Predict trends</span>
          </button>

          <button onClick={() => router.push('/dashboard')} className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-teal-500 hover:bg-teal-50 transition-all">
            <BarChart3 className="w-4 h-4" />
            <span className="text-sm font-medium">Analyse existing data</span>
          </button>

          <button onClick={() => router.push('/ask-moonlit')} className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white hover:bg-teal-600 transition-all">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Ask Moonlit</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
