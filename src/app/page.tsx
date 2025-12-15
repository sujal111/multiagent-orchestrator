import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import DemoSection from "@/components/DemoSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden pt-24 sm:pt-32">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-600 to-blue-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Multi-Agent Orchestration for the Enterprise
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The Emergence Orchestrator coordinates and manages interactions between AI agents across enterprise systems, 
              enabling seamless automation of complex workflows that span modern and legacy platforms.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#contact"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
              <Link href="#features" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-600 to-blue-500 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Emergence Multi-Agent Orchestrator</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Today we are announcing the Emergence Orchestrator, an autonomous meta-agent that coordinates and manages interactions between AI agents across enterprise systems. Through dynamic orchestration, it enables multiple autonomous agents to work together seamlessly, handling sophisticated workflows that span modern and legacy software platforms.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <div className="relative flex-1">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">Web Agent</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Optimized for interacting with over the top web interfaces, automating complex web-based workflows with human-like precision.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="relative flex-1">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">API Agent</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Tailored for managing enterprise APIs, ensuring seamless integration and data flow between diverse systems.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="relative flex-1">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">Orchestrator</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">
                    Coordinates multiple agents to work in concert, handling complex workflows that require both web and API interactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Why It Matters Section */}
      <section id="why-it-matters" className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Multi-Agent Orchestration Matters</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Future of Enterprise Automation
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Organizations use a wide variety of applications, from decades-old mainframes to modern cloud services. 
              The Emergence Orchestrator bridges these systems through intelligent agent coordination.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Adaptability',
                  description: 'Dynamically adjusts to changing requirements and system landscapes without manual intervention.',
                },
                {
                  name: 'Efficiency',
                  description: 'Automates complex workflows across multiple systems, reducing manual effort and errors.',
                },
                {
                  name: 'Scalability',
                  description: 'Easily scales to handle enterprise-grade workloads across thousands of systems.',
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <div className="relative mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to transform your enterprise?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Contact our sales team to learn how Emergence can help you automate complex workflows across your enterprise systems.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact Sales
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">Request a demo</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    See how Emergence can transform your enterprise automation strategy.
                  </p>
                  <form className="mt-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Request Demo
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
