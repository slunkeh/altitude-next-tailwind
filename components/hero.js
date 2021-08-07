const Hero = () => {
    return (
        <div className="container pb-12 mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="sm:text-center lg:text-left max-w-2xl pt-24 px-4 sm:px-6 lg:pl-8 lg:pr-0">
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
            <div className="mt-20 lg:mt-0 flex">
                <img
                    className="w-full sm:h-72 lg:h-full xl:pr-40"
                    src="./me.svg"
                    alt=""
                />
            </div>
        </div>


    );
}

export default Hero;