import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Brain, Activity, Shield, Users, Atom, Map, Code, Book, Settings as SettingsIcon, Play } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Dynamic imports for route-based code splitting
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Visualization = React.lazy(() => import('./pages/Visualization'));
const Documentation = React.lazy(() => import('./pages/Documentation'));
const SettingsPage = React.lazy(() => import('./pages/Settings'));

function QuantumParticles() {
  return (
    <mesh>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial 
        color="#4299e1"
        emissive="#2b6cb0"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Navigation */}
        <nav className="fixed w-full border-b border-gray-800 bg-black/50 backdrop-blur-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center">
                  <Brain className="w-8 h-8 text-blue-400" />
                  <span className="ml-2 text-xl font-bold">Crystal AI Brain</span>
                </Link>
                <div className="hidden md:flex ml-10 space-x-4">
                  <Link to="/visualization" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
                    Visualization
                  </Link>
                  <Link to="/docs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
                    Documentation
                  </Link>
                  <Link to="/settings" className="text-gray-300 hover:text-white px-3 py-2 rounded-md">
                    Settings
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition">
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* 3D Background */}
        <div className="fixed inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Environment preset="night" />
              <QuantumParticles />
              <EffectComposer>
                <Bloom 
                  intensity={1.5}
                  luminanceThreshold={0.9}
                  luminanceSmoothing={0.9}
                />
              </EffectComposer>
              <OrbitControls 
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
              />
            </Suspense>
          </Canvas>
        </div>

        {/* Main Content */}
        <main className="relative z-10 pt-16">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-blue-400 animate-spin">
                <Activity className="w-8 h-8" />
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/visualization" element={<Visualization />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-gray-800 bg-black/50 backdrop-blur-sm mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Crystal AI Brain</h3>
                <p className="text-gray-400">Advanced quantum computing visualization and interaction platform</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/docs" className="text-gray-400 hover:text-white">Documentation</Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Code className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Book className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Play className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Crystal AI Brain. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;