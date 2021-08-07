import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Colours', href: '/colours' },
]

export default function NavHero(props) {
  return (
    <div className="relative overflow-hidden">
      <div className="container mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

          <Popover>
            {({ open }) => (
              <>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                  <nav
                    className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                    aria-label="Global"
                  >
                    <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                      <div className="flex items-center justify-between w-full md:w-auto">
                        <a href="/">
                          <span className="sr-only">Workflow</span>
                          <img
                            className="h-8 rounded-full border-2 border-primary-400 w-auto sm:h-10"
                            src="/ad-logo.png"
                          />
                        </a>
                        <div className="-mr-2 flex items-center md:hidden">
                          <Popover.Button className="bg-dark rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-dark-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-blue">
                            <span className="sr-only">Open main menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                      {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="font-medium text-gray-200 hover:text-primary-200">
                          {item.name}
                        </a>
                      ))}
                      <a href="#" className="font-medium text-primary hover:text-lilac">
                        Hire Me
                      </a>
                    </div>
                  </nav>
                </div>
                
                <Transition
                  show={open}
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-100 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                  >
                    <div className="rounded-lg shadow-md bg-dark-900 ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="px-5 pt-4 flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 rounded-full border-2 border-primary-400 w-auto sm:h-10"
                            src="/ad-logo.png"
                            alt=""
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-dark-900 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-white hover:bg-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300">
                            <span className="sr-only">Close main menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="px-2 pt-2 pb-3 space-y-1">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-dark"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <a
                        href="#"
                        className="block w-full px-5 py-3 text-center font-medium text-white bg-primary hover:bg-primary-600"
                      >
                        Hire Me
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">I'll <span className="text-primary">get</span> your business</span>{' '}
                <span className="block text-lilac xl:inline">Results online</span>
              </h1>
              <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:max-w-lg lg:mx-0">
                Hi, my name is Gavin and I’m a freelance web designer & marketer from Edinburgh. I have over 5 years experience generating leads and sales online. <span className="text-gray-100">I will turn prospects into paying customers</span> for your business.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 md:py-4 md:text-lg md:px-10"
                  >
                    Get in touch
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-blue hover:bg-slate-blue-500 md:py-4 md:text-lg md:px-10"
                  >
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-10 xl:right-40 lg:w-1/2 p-12">
          <img
            className="w-full object-contain sm:h-72 lg:w-full lg:h-full"
            src="/me.svg"
            alt=""
          />
        </div>
    </div>
  )
}
