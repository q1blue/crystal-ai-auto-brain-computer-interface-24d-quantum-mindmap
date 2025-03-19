import React from 'react';
import { Settings as SettingsIcon, Shield, Eye, Bell } from 'lucide-react';

function Settings() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Shield className="w-6 h-6 text-blue-400 mr-2" />
            <h2 className="text-xl font-bold">Security</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span>Two-Factor Authentication</span>
                <button className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-sm">
                  Enable
                </button>
              </label>
            </div>
            <div>
              <label className="flex items-center justify-between">
                <span>API Key Management</span>
                <button className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-sm">
                  Manage
                </button>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Eye className="w-6 h-6 text-green-400 mr-2" />
            <h2 className="text-xl font-bold">Display</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span>Dark Mode</span>
                <button className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-sm">
                  Enabled
                </button>
              </label>
            </div>
            <div>
              <label className="flex items-center justify-between">
                <span>Animation Speed</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="50"
                  className="w-32"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center mb-6">
            <Bell className="w-6 h-6 text-purple-400 mr-2" />
            <h2 className="text-xl font-bold">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span>Email Notifications</span>
                <button className="px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 text-sm">
                  Configure
                </button>
              </label>
            </div>
            <div>
              <label className="flex items-center justify-between">
                <span>System Alerts</span>
                <button className="px-3 py-1 rounded bg-purple-500 hover:bg-purple-600 text-sm">
                  Manage
                </button>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
          <div className="flex items-center mb-6">
            <SettingsIcon className="w-6 h-6 text-orange-400 mr-2" />
            <h2 className="text-xl font-bold">Advanced</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="flex items-center justify-between">
                <span>Developer Mode</span>
                <button className="px-3 py-1 rounded bg-orange-500 hover:bg-orange-600 text-sm">
                  Enable
                </button>
              </label>
            </div>
            <div>
              <label className="flex items-center justify-between">
                <span>Performance Mode</span>
                <button className="px-3 py-1 rounded bg-orange-500 hover:bg-orange-600 text-sm">
                  Configure
                </button>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;