'use client';

import { useState } from 'react';

type WorkflowStep = {
  id: number;
  name: string;
  agent: 'orchestrator' | 'web' | 'api';
  status: 'pending' | 'processing' | 'completed' | 'error';
  description: string;
};

type Workflow = {
  id: string;
  name: string;
  description: string;
  steps: WorkflowStep[];
};

const demoWorkflows: Workflow[] = [
  {
    id: 'customer-onboarding',
    name: 'Customer Onboarding',
    description: 'End-to-end customer onboarding process',
    steps: [
      {
        id: 1,
        name: 'Collect Customer Data',
        agent: 'web',
        status: 'pending',
        description: 'Customer submits onboarding form',
      },
      {
        id: 2,
        name: 'Verify Identity',
        agent: 'api',
        status: 'pending',
        description: 'Run KYC/AML checks',
      },
      {
        id: 3,
        name: 'Create Accounts',
        agent: 'orchestrator',
        status: 'pending',
        description: 'Coordinate account creation',
      },
      {
        id: 4,
        name: 'CRM Integration',
        agent: 'api',
        status: 'pending',
        description: 'Add to CRM system',
      },
      {
        id: 5,
        name: 'Billing Setup',
        agent: 'api',
        status: 'pending',
        description: 'Configure billing and subscriptions',
      },
      {
        id: 6,
        name: 'Send Welcome Kit',
        agent: 'web',
        status: 'pending',
        description: 'Deliver welcome email and resources',
      },
    ],
  },
  {
    id: 'ecom-order',
    name: 'E-commerce Order Processing',
    description: 'Processes an online order from cart to fulfillment',
    steps: [
      {
        id: 1,
        name: 'Receive Order',
        agent: 'web',
        status: 'pending',
        description: 'Customer places order on website',
      },
      {
        id: 2,
        name: 'Check Inventory',
        agent: 'api',
        status: 'pending',
        description: 'Verify product availability',
      },
      {
        id: 3,
        name: 'Process Payment',
        agent: 'api',
        status: 'pending',
        description: 'Handle payment processing',
      },
      {
        id: 4,
        name: 'Update Order Status',
        agent: 'web',
        status: 'pending',
        description: 'Notify customer and update order status',
      },
    ],
  },
  {
    id: 'data-sync',
    name: 'Enterprise Data Sync',
    description: 'Synchronize data across multiple systems',
    steps: [
      {
        id: 1,
        name: 'Extract Data',
        agent: 'api',
        status: 'pending',
        description: 'Pull data from source system',
      },
      {
        id: 2,
        name: 'Transform Data',
        agent: 'orchestrator',
        status: 'pending',
        description: 'Convert data to target format',
      },
      {
        id: 3,
        name: 'Load Data',
        agent: 'api',
        status: 'pending',
        description: 'Push data to destination system',
      },
      {
        id: 4,
        name: 'Verify Sync',
        agent: 'web',
        status: 'pending',
        description: 'Confirm data integrity',
      },
    ],
  },
];

export default function DemoSection() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string>('ecom-order');
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<WorkflowStep[]>(demoWorkflows[0].steps);

  const workflow = demoWorkflows.find(w => w.id === selectedWorkflow) || demoWorkflows[0];

  const handleWorkflowChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const workflowId = e.target.value;
    setSelectedWorkflow(workflowId);
    const selected = demoWorkflows.find(w => w.id === workflowId) || demoWorkflows[0];
    setSteps(selected.steps.map(step => ({ ...step, status: 'pending' })));
    setCurrentStep(0);
  };

  const runWorkflow = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setCurrentStep(0);
    
    // Reset all steps to pending
    setSteps(steps.map(step => ({ ...step, status: 'pending' })));
    
    // Simulate workflow execution
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      
      // Update current step to processing
      setSteps(prevSteps => 
        prevSteps.map((step, idx) => 
          idx === i 
            ? { ...step, status: 'processing' as const }
            : step
        )
      );
      
      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update current step to completed
      setSteps(prevSteps => 
        prevSteps.map((step, idx) => 
          idx === i 
            ? { ...step, status: 'completed' as const }
            : step
        )
      );
      
      // Small delay between steps
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    setIsRunning(false);
  };

  const getStatusColor = (status: WorkflowStep['status']) => {
    switch (status) {
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'error':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getAgentColor = (agent: WorkflowStep['agent']) => {
    switch (agent) {
      case 'orchestrator':
        return 'bg-purple-100 text-purple-800';
      case 'web':
        return 'bg-blue-100 text-blue-800';
      case 'api':
        return 'bg-indigo-100 text-indigo-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="demo" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Interactive Demo
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how the Emergence Orchestrator manages multi-agent workflows
          </p>
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="space-y-4">
                <div>
                  <label htmlFor="workflow" className="block text-sm font-medium text-gray-700">
                    Select Workflow
                  </label>
                  <select
                    id="workflow"
                    className="mt-1 block w-full pl-3 pr-10 py-2.5 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                    value={selectedWorkflow}
                    onChange={handleWorkflowChange}
                    disabled={isRunning}
                  >
                    {demoWorkflows.map((workflow) => (
                      <option key={workflow.id} value={workflow.id}>
                        {workflow.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="p-4 bg-white rounded-md shadow">
                  <h3 className="text-lg font-medium text-gray-900">{workflow.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{workflow.description}</p>
                </div>
                
                <button
                  type="button"
                  onClick={runWorkflow}
                  disabled={isRunning}
                  className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                    isRunning
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  {isRunning ? 'Running...' : 'Run Workflow'}
                </button>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="bg-white rounded-md shadow overflow-hidden">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">Workflow Execution</h3>
                  <div className="mt-4 space-y-4">
                    {steps.map((step, index) => (
                      <div 
                        key={step.id} 
                        className={`p-4 border rounded-md transition-all duration-300 ${
                          index === currentStep ? 'ring-2 ring-indigo-500' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <span className="text-gray-500 mr-3">{step.id}.</span>
                            <div>
                              <h4 className="text-sm font-medium text-gray-900">{step.name}</h4>
                              <p className="text-sm text-gray-500">{step.description}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getAgentColor(step.agent)}`}>
                              {step.agent.toUpperCase()}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(step.status)}`}>
                              {step.status.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900">How It Works</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-md">
                <h4 className="font-medium text-blue-800">1. Select a Workflow</h4>
                <p className="mt-1 text-sm text-blue-700">Choose from different workflow scenarios to see how agents collaborate.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-md">
                <h4 className="font-medium text-purple-800">2. Run the Workflow</h4>
                <p className="mt-1 text-sm text-purple-700">Watch as the Orchestrator coordinates between different agents.</p>
              </div>
              <div className="p-4 bg-indigo-50 rounded-md">
                <h4 className="font-medium text-indigo-800">3. Observe the Process</h4>
                <p className="mt-1 text-sm text-indigo-700">See real-time updates as each agent completes its tasks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
