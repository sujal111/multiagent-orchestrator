import Link from "next/link";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

const navigation = {
  solutions: [
    { name: 'Web Agent', href: '#' },
    { name: 'API Agent', href: '#' },
    { name: 'Enterprise', href: '#' },
    { name: 'Pricing', href: '#' },
  ],
  support: [
    { name: 'Documentation', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'API Status', href: '#' },
    { name: 'Contact Support', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
    { name: 'Security', href: '#' },
  ],
}

const offices = [
  {
    id: 1,
    city: 'New York',
    address: ['8 W 40th St', 'Floor 20', 'New York, NY 10018'],
  },
  {
    id: 2,
    city: 'Irvine',
    address: ['16511 Scientific Way', 'Suite 100', 'Irvine, CA 92618'],
  },
  {
    id: 3,
    city: 'India',
    address: ['2nd Floor, 25, Phoenix Citadel', 'Castle St, Ashok Nagar', 'Bengaluru, Karnataka 560025'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8
          ">
            <span className="text-2xl font-bold text-white">NexusFlow</span>
            <p className="text-sm leading-6 text-gray-300">
              Enterprise-grade multi-agent orchestration platform for seamless automation across your business systems.
            </p>
            <div className="flex space-x-6">
              {/* Social media links can be added here */}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <h3 className="text-sm font-semibold leading-6 text-white">Our offices</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <div key={office.id} className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPinIcon className="h-6 w-6 text-indigo-400" aria-hidden="true" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-white">{office.city} (HQ)</h4>
                  <address className="mt  -2 text-sm leading-6 text-gray-300 not-italic">
                    {office.address.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </address>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="mailto:hello@nexusflow.ai" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Email</span>
              <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} NexusFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
