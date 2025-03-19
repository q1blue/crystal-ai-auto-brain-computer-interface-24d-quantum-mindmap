import React from 'react';
import { Activity, Shield, Users, Atom, Map } from 'lucide-react';

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">24D Quantum Mindmap System</h1>
        <p className="text-gray-400">Holographic visualization of Crystal AI's neural architecture</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">System Performance</h3>
            <Activity className="w-5 h-5 text-blue-400" />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Quantum Coherence</span>
                <span>94.3%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-blue-400 rounded-full" style={{ width: '94.3%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Dimensional Stability</span>
                <span>87.6%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-green-400 rounded-full" style={{ width: '87.6%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Security Status</h3>
            <Shield className="w-5 h-5 text-green-400" />
          </div>
          <p className="text-2xl font-bold mb-2">Protected</p>
          <p className="text-gray-400">All systems operating within normal parameters</p>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Neural Network</h3>
            <Atom className="w-5 h-5 text-purple-400" />
          </div>
          <p className="text-2xl font-bold mb-2">24,891</p>
          <p className="text-gray-400">Active neural connections</p>
        </div>
      </div>

      {/* Visualization Area */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Quantum Mindmap Visualization</h2>
          <Map className="w-5 h-5 text-blue-400" />
        </div>
        <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Interactive visualization loading...</p>
        </div>
      </div>

      {/* Active Users */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Connected Users</h2>
          <Users className="w-5 h-5 text-blue-400" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div>
                <p className="font-medium">User {i}</p>
                <p className="text-sm text-gray-400">Active • Connected 2h ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;