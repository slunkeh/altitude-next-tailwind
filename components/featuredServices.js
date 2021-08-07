
export default function FeaturedServices() {
    return (
        <div className="py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-0">
                <div className="lg:text-center">
                    <h2 className="text-base text-lilac font-semibold tracking-wide uppercase">My Skills</h2>
                    <p className="mt-2 text-white text-3xl leading-8 font-semibold tracking-tigh sm:text-4xl">
                        What I Do
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                        Setting up and running an online business can be overwhelming. I will remove some of the pain by offering the following services:
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">

                        <div className="relative p-6 rounded-md hover:shadow-2xl hover:bg-dark-900 transition border-primary-400">
                            <dt>
                                <img src="./Strategy.svg" className="absolute h-20 w-20 p-1" aria-hidden="true" />
                                <p className="ml-28 text-lg leading-6 font-medium text-gray-100">
                                    Strategy & Direction</p>
                            </dt>
                            <dd className="mt-2 ml-28 text-base text-gray-400"><span className="font-semibold text-primary-200">First things first.</span> If you don't know the outcome, how can you build a strategy? I will help you define KPI's for your business and work with you to hit them on a consistent basis.</dd>
                        </div>

                        <div className="relative p-6 rounded-md hover:shadow-2xl hover:bg-dark-900 transition border-primary-400">
                            <dt>
                                <img src="./web-design.svg" className="absolute h-20 w-20 p-1" aria-hidden="true" />
                                <p className="ml-28 text-lg leading-6 font-medium text-gray-100">
                                    Web Design</p>
                            </dt>
                            <dd className="mt-2 ml-28 text-base text-gray-400"><span className="font-semibold text-primary-200">Build trust.</span> A flashy eye catching website is not just about aesthetics. It's about connecting with your customers, building trust and guiding them to take action. Let me help.</dd>
                        </div>

                        <div className="relative p-6 rounded-md hover:shadow-2xl hover:bg-dark-900 transition border-primary-400">
                            <dt>
                                <img src="./online-marketing.svg" className="absolute h-20 w-20 p-1" aria-hidden="true" />
                                <p className="ml-28 text-lg leading-6 font-medium text-gray-100">
                                    Online Marketing</p>
                            </dt>
                            <dd className="mt-2 ml-28 text-base text-gray-400"><span className="font-semibold text-primary-200">Plant the seed. </span>When it comes to online marketing, it's important to grab attention. Fast. I will help you get eyes on your offer and move prospects through your sales funnel.</dd>
                        </div>

                        <div className="relative p-6 rounded-md hover:shadow-2xl hover:bg-dark-900 transition border-primary-400">
                            <dt>
                                <img src="./systems-automation.svg" className="absolute h-20 w-20 p-1" aria-hidden="true" />
                                <p className="ml-28 text-lg leading-6 font-medium text-gray-100">
                                    Systems Automation</p>
                            </dt>
                            <dd className="mt-2 ml-28 text-base text-gray-400"><span className="font-semibold text-primary-200">Bring the systems. </span>Ok you your getting the results but how do you manage it? I will help you build systems and procedures to keep your business working like a machine.</dd>
                        </div>


                    </dl>
                </div>
            </div>
        </div>
    )
}