import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Colours', href: '/colours' },
]

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <Popover>
                {({ open }) => (
                    <>
                        <div className="py-6 px-4 sm:px-6 lg:px-8">
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
                                                src="./logo-square.png"
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
                                                src="./logo-square.png"
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
        </div>
    );
}

export default Navbar;