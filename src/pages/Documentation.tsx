import React from 'react';
import { Book, Code, Terminal } from 'lucide-react';

function Documentation() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Code className="w-6 h-6 text-blue-400 mr-2" />
              <h2 className="text-xl font-bold">API Reference</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Complete API documentation for integrating with the Crystal AI Brain system.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              View API Docs →
            </a>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center mb-4">
              <Terminal className="w-6 h-6 text-green-400 mr-2" />
              <h2 className="text-xl font-bold">SDK Documentation</h2>
            </div>
            <p className="text-gray-400 mb-4">
              Detailed guides for using the Crystal AI Brain SDK in your applications.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">
              View SDK Docs →
            </a>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-12">
          <div className="flex items-center mb-4">
            <Book className="w-6 h-6 text-purple-400 mr-2" />
            <h2 className="text-xl font-bold">Getting Started</h2>
          </div>
          
          <div className="space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <code>npm install @crystal-ai/brain</code>
              </pre>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Basic Usage</h3>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto">
                <code>{`import { CrystalAI } from '@crystal-ai/brain';

const brain = new CrystalAI({
  apiKey: 'your-api-key',
  dimensions: 24
});

await brain.initialize();`}</code>
              </pre>
            </section>

            <section>
              <h3 className="text-lg font-semibold mb-2">Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Quantum Processing</h4>
                  <p className="text-gray-400">Process data through quantum channels</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Neural Mapping</h4>
                  <p className="text-gray-400">Create neural network visualizations</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;