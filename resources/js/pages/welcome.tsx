import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="ThriveHelp">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-[#0A0A0A] text-white">
                {/* Navbar */}
                <header className="border-b border-[#1E1E1E] bg-[#0A0A0A]">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-white">ThriveHelp</span>
                        </div>
                        <nav className="flex items-center space-x-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="hover:bg-opacity-90 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all"
                                >
                                    Chat
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="text-sm font-medium text-gray-300 transition-colors hover:text-white">
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="hover:bg-opacity-90 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all"
                                    >
                                        Get started
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative overflow-hidden">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#13151A] to-[#0A0A0A]"></div>

                    {/* Gradient Orbs */}
                    <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
                    <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>

                    <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                                    Your Compassionate{' '}
                                    <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                                        Wellbeing Guide
                                    </span>
                                </h1>
                                <p className="mt-6 max-w-3xl text-xl text-gray-300">
                                    A safe, stigma-free space to explore your feelings. Our AI companion offers supportive conversation and helps identify patterns to guide you toward calm.
                                </p>
                                <div className="mt-10 flex items-center gap-x-6">
                                    <Link
                                        href={route('register')}
                                        className="rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:from-purple-600 hover:to-blue-600"
                                    >
                                        Start Your Journey
                                    </Link>
                                    <Link href={route('login')} className="text-base font-medium text-white">
                                        Learn more <span aria-hidden="true">→</span>
                                    </Link>
                                </div>
                                <p className="mt-4 text-sm text-gray-400">
                                    <strong>Important:</strong> ThriveHelp offers supportive guidance, not crisis care. If you're in immediate distress, please call 999 or the Samaritans at 116 123.
                                </p>
                            </div>
                            <div className="relative flex items-center justify-center lg:justify-end">
                                {/* Stylized Wellness Icon/Illustration */}
                                <div className="relative h-[400px] w-[400px] rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-1">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <svg
                                            className="h-64 w-64 text-white opacity-80"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14.828 14.828L12 12M12 12L9.172 9.172M12 12L14.828 9.172M12 12L9.172 14.828M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="currentColor"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Supportive, Early Guidance</h2>
                            <p className="mt-4 text-lg text-gray-300">Our AI companion is designed to help you navigate stress and anxiety with empathy and insight</p>
                        </div>
                        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] p-8 transition-all hover:border-purple-500/30">
                                <div className="mb-5 inline-flex rounded-xl bg-purple-500/10 p-3">
                                    <svg className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Stigma-Free Conversation</h3>
                                <p className="mt-2 text-gray-400">
                                    A confidential space to express your thoughts without judgment, available whenever you need it.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] p-8 transition-all hover:border-blue-500/30">
                                <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3">
                                    <svg className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Early-Signal Detection</h3>
                                <p className="mt-2 text-gray-400">Identifies patterns in mood and stress to help you recognise and address concerns proactively.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] p-8 transition-all hover:border-indigo-500/30">
                                <div className="mb-5 inline-flex rounded-xl bg-indigo-500/10 p-3">
                                    <svg className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-white">Personalised Guidance</h3>
                                <p className="mt-2 text-gray-400">
                                    Offers supportive strategies and coping techniques tailored to your unique situation and feelings.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="border-t border-[#1E1E1E] py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">How It Works</h2>
                            <p className="mt-4 text-lg text-gray-300">A simple, supportive path to better mental wellbeing</p>
                        </div>
                        <div className="mt-16">
                            <div className="relative">
                                {/* Connection Line */}
                                <div className="absolute top-0 left-12 h-full w-0.5 bg-gradient-to-b from-purple-500 to-blue-500 md:left-1/2 md:-ml-0.5"></div>

                                {/* Step 1 */}
                                <div className="relative mb-12 md:mb-24">
                                    <div className="flex flex-col items-center md:flex-row">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#0F0F0F] text-2xl font-bold text-white ring-4 ring-purple-500/20 md:absolute md:left-1/2 md:-ml-12">
                                            1
                                        </div>
                                        <div className="mt-6 rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] p-6 md:mt-0 md:w-5/12 md:pr-12">
                                            <h3 className="text-xl font-semibold text-white">Share How You Feel</h3>
                                            <p className="mt-2 text-gray-400">
                                                In a private chat, talk about what's on your mind—your mood, stress, sleep, or anything affecting your wellbeing.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="relative mb-12 md:mb-24">
                                    <div className="flex flex-col items-center md:flex-row md:justify-end">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#0F0F0F] text-2xl font-bold text-white ring-4 ring-blue-500/20 md:absolute md:left-1/2 md:-ml-12">
                                            2
                                        </div>
                                        <div className="mt-6 rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] p-6 md:mt-0 md:w-5/12 md:pl-12">
                                            <h3 className="text-xl font-semibold text-white">Receive Supportive Insight</h3>
                                            <p className="mt-2 text-gray-400">
                                                Our AI helps identify patterns and offers empathetic guidance, coping strategies, and a clearer perspective.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative">
                                    <div className="flex flex-col items-center md:flex-row">
                                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#0F0F0F] text-2xl font-bold text-white ring-4 ring-indigo-500/20 md:absolute md:left-1/2 md:-ml-12">
                                            3
                                        </div>
                                        <div className="mt-6 rounded-2xl border border-[#1E1E1E] bg-[#0F0F0F] p-6 md:mt-0 md:w-5/12 md:pr-12">
                                            <h3 className="text-xl font-semibold text-white">Find Your Path Forward</h3>
                                            <p className="mt-2 text-gray-400">
                                                Get help understanding your next steps, whether that's self-care strategies or connections to further resources in Scotland.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-purple-500 to-blue-500">
                            <div className="px-6 py-24 sm:px-12 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-16">
                                <div>
                                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Ready to explore your wellbeing?
                                        <br />
                                        Start a conversation today.
                                    </h2>
                                    <p className="mt-6 max-w-xl text-lg text-purple-100">
                                        Take the first step in a supportive, judgment-free space designed for your mental health journey.
                                    </p>
                                </div>
                                <div className="mt-8 lg:mt-0 lg:shrink-0">
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-full bg-white px-12 py-4 text-base font-medium text-purple-600 shadow-md transition-all hover:bg-gray-100"
                                    >
                                        Begin Your Journey
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-[#1E1E1E] py-12">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-between md:flex-row">
                            <div className="mb-6 md:mb-0">
                                <span className="text-xl font-bold text-white">ThriveHelp CIC</span>
                                <p className="mt-2 text-sm text-gray-400">A social enterprise for Scotland's mental wellbeing.</p>
                            </div>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Terms
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Privacy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contact
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Safety
                                </a>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-[#1E1E1E] pt-8 text-center text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} ThriveHelp CIC. All rights reserved.
                            <p className="mt-2">ThriveHelp offers guidance, not crisis or medical care. In an emergency, call 999.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
