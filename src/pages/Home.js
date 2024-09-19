import React, { useState } from "react"; // Import React and the useState hook to manage state
import { Dialog, DialogPanel } from "@headlessui/react"; // Import Dialog components from Headless UI
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons for mobile menu
import {
  BoltIcon,
  ChevronDoubleUpIcon,
  SparklesIcon,
} from "@heroicons/react/20/solid"; // Import icons for feature descriptions
import Logo from "../img/react.png"; // Import logo image
import Linkedin from "../img/linkedin.svg"; // Import LinkedIn logo
import VSC from "../img/image.png"; // Import image
import "../styles/Home.css"; // Import CSS for the Home component

function Home() {
  // 1. State management
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu toggle
  const [inputValue, setInputValue] = useState(""); // State for terminal input
  const [commands, setCommands] = useState([
    { type: "info", text: "$ npm install profile" },
    { type: "output", text: '+ loading "First name, Last name"' },
    { type: "output", text: '+ loading "Fullstack Developer"' },
    {
      type: "output",
      text: (
        <>
          + loading "LinkedIn :{" "}
          <a
            href="https://www.linkedin.com/"
            className="text-green-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Your LinkedIn
          </a>
          "
        </>
      ),
    },
    {
      type: "output",
      text: (
        <>
          + loading "Email :{" "}
          <a href="mailto:contact@mail.com" className="text-green-400">
            contact@mail.com
          </a>
          "
        </>
      ),
    },
    { type: "info", text: "$ loaded successfully!" },
  ]); // State to store commands in terminal
  const [isFocused, setIsFocused] = useState(false); // State to track terminal input focus

  // 2. Lists (static data)
  // Navigation links for the header
  const navigation = [
    { name: "Home", href: "home" },
    { name: "About us", href: "#about" },
    { name: "Prices", href: "#prices" },
    { name: "Contact", href: "#contact" },
  ];

  // Pricing plans with details
  const plans = [
    {
      name: "First Plan",
      price: "500-1500€",
      features: [
        "Basic features",
        "Good for small businesses",
        "Simple design",
        "No complex features",
        "No database required",
        "No content management required",
        "No user account creation",
      ],
    },
    {
      name: "Second Plan",
      price: "1500-5000€",
      features: [
        "Advanced features",
        "Good for medium businesses",
        "Custom design",
        "Easy to update",
        "Database required",
        "Content management required",
        "User account creation",
      ],
    },
    {
      name: "Custom Plan",
      price: "0 - 5000€+",
      features: [
        "Custom features",
        "Good for large businesses",
        "Unique design",
        "Complex features",
        "Database required",
        "Content management required",
        "User account creation",
      ],
    },
  ];

  // Features with icons and descriptions
  const features = [
    {
      name: "Fast delivery",
      description:
        "We deliver your website in a short amount of time. We work fast and efficiently.",
      icon: BoltIcon,
    },
    {
      name: "Good performances",
      description:
        "We make sure your website is fast and has good performances. We optimize it for you.",
      icon: ChevronDoubleUpIcon,
    },
    {
      name: "High quality",
      description:
        "We make sure your website is of the best quality. We test it and make sure it's perfect.",
      icon: SparklesIcon,
    },
  ];

  // Footer navigation links
  const footerNavs = [
    { href: "home", name: "Home" },
    { href: "#about", name: "About us" },
    { href: "#prices", name: "Prices" },
    { href: "#contact", name: "Contact" },
    { href: "legal", name: "Legal" },
  ];

  // 3. Functions

  // Function to send an email using mailto link with form data
  function sendMail() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const message = document.getElementById("message").value;
    const country = document.getElementById("country")
      ? document.getElementById("country").value
      : "";

    // Construct mailto link with the form data
    const mailtoLink = `mailto:example@example.com?subject=Contact Form Submission&body=
        First Name: ${encodeURIComponent(firstName)}%0D%0A
        Last Name: ${encodeURIComponent(lastName)}%0D%0A
        Company: ${encodeURIComponent(company)}%0D%0A
        Email: ${encodeURIComponent(email)}%0D%0A
        Phone Number: ${encodeURIComponent(phoneNumber)}%0D%0A
        Country: ${encodeURIComponent(country)}%0D%0A
        Message: ${encodeURIComponent(message)}`;

    // Trigger mailto link to open email client
    window.location.href = mailtoLink;
  }

  // Handle the Enter key press in the terminal input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setCommands([...commands, { type: "info", text: `$ ${inputValue}` }]); // Add the input as a new command
      setInputValue(""); // Clear input after submission
    }
  };

  // Handle focus event for the terminal input
  const handleFocus = () => {
    setIsFocused(true); // Set focus state
  };

  // Handle blur event for the terminal input
  const handleBlur = () => {
    setIsFocused(false); // Reset focus state
    setInputValue(""); // Clear input on blur
  };

  // Function to check terminal commands and execute specific actions
  const checkCommands = () => {
    const sanitizedValue = document
      .getElementById("terminal")
      .value.replace(/[^a-zA-Z0-9_-]/g, ""); // Sanitize input

    setInputValue(sanitizedValue); // Update state with sanitized input

    // Check for specific commands and execute actions
    if (sanitizedValue === "cat") {
      window.open("https://www.fmenoni.com/yeah_Bounce.webm", "_blank"); // Open cat link
    } else if (sanitizedValue === "rick") {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // Rickroll
    } else if (sanitizedValue === "clear") {
      setCommands([]); // Clear terminal commands
    }
  };

  // Event listener to blur the terminal input on page load
  window.addEventListener("load", function () {
    document.getElementById("terminal").blur(); // Remove focus from terminal input on load
  });

  return (
    <div className="bg-neutral-950" id="container">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="home" className="-m-1.5 p-1.5">
              <span className="sr-only">Company Name</span>
              <img alt="Logo FMenoni" src={Logo} className="h-8 w- rounded" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 justify-end">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="home" className="-m-1.5 p-1.5">
                <span className="sr-only">Company Name</span>
                <img alt="" src={Logo} className="h-8 w-auto rounded" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="relative isolate px-6 lg:px-8 min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              background:
                "linear-gradient(135deg, rgba(92, 32, 152, 0.8) 0%, rgba(132, 21, 149, 0.7) 50%, rgba(304, 31, 88, 0.8) 100%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl flex items-center justify-center min-h-screen">
          <div className="flex flex-wrap justify-start">
            <div className="w-full sm:w-1/2 xl:w-1/2">
              <div className="text-left">
                <h1 className="text-4xl font-bold tracking-tight py-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700 sm:text-6xl">
                  Your Company Name
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-500">
                  A short description of your company. Introduce your products
                  or services to your visitors.
                </p>
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <a
                    className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-zinc-300 py-2.5 px-4 rounded-full border border-gray-900 duration-150 font-medium text-center text-sm inline-block w-full hover:bg-gray-700 sm:w-auto"
                    href="#prices"
                  >
                    Discover
                  </a>
                  <a
                    href="#about"
                    className="text-sm font-semibold leading-6 text-gray-200"
                  >
                    More <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex items-center justify-end">
              <div className="relative pt-4 sm:pt-10">
                {" "}
                <div className="background-blob"></div>
                <aside className="blurred-background border border-neutral-900 text-white p-6 rounded-lg w-full max-w-lg font-mono">
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2 text-red-500">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>

                  <div className="mt-4">
                    {commands.map((command, index) => (
                      <p
                        key={index}
                        className={
                          command.type === "info"
                            ? "text-green-400"
                            : "text-white"
                        }
                      >
                        {command.text}
                      </p>
                    ))}

                    <div className="text-green-400 flex items-center">
                      $
                      <input
                        className="bg-transparent border-none outline-none text-white ml-2 w-full"
                        value={inputValue}
                        id="terminal"
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onInput={checkCommands}
                        autoFocus
                      />
                      {!isFocused && (
                        <span className="absolute left-8 cursor-block w-2 h-5 bg-green-400 ml-1 cursor"></span>
                      )}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-20rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              background:
                "linear-gradient(135deg, rgba(92, 32, 152, 0.8) 0%, rgba(132, 21, 149, 0.7) 50%, rgba(304, 31, 88, 0.8) 100%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      <div className="overflow-hidden py-24 sm:py-32" id="about">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Company Name
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700 sm:text-4xl">
                  Who we are
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We are a team of passionate developers who love to create
                  tools that make your life easier. We are always looking for
                  new ways to improve our products and make them more
                  user-friendly.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-400">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src={VSC}
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl items-center z-50 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      <section className="py-14" id="prices">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="relative max-w-xl mx-auto sm:text-center">
            <h3 className="text-3xl font-semibold sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700">
              Our Prices
            </h3>
            <div className="mt-3 max-w-xl">
              <p>
                Discover our pricing plans and choose the one that best suits.
              </p>
            </div>
          </div>
          <div className="mt-16 space-y-6 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
            {plans.map((item, idx) => (
              <div
                key={idx}
                className="relative flex-1 flex items-stretch flex-col p-8 rounded-xl border border-neutral-800"
              >
                <div>
                  <span className="text-indigo-600 font-medium">
                    {item.name}
                  </span>
                  <div className="mt-4 text-gray-400 text-3xl font-semibold">
                    {item.price}
                  </div>
                </div>
                <ul className="py-8 space-y-3">
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className="flex items-center gap-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
                <div className="flex-1 flex items-end">
                  <button className="z-50 px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700">
                    I am interested
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div
        className="relative isolate py-20 px-6 lg:px-8 text-gray-100"
        id="contact"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[-5rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative right-full -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-2 rotate-[-230deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-20rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-500">
            Do you have any questions? Feel free to contact us.
          </p>
        </div>
        <form
          id="contact-form"
          action="#"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            sendMail();
          }}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                First Name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 bg-gray-800 text-gray-100 px-3.5 py-2 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Last Name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 bg-gray-800 text-gray-100 px-3.5 py-2 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold leading-6"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 bg-gray-800 text-gray-100 px-3.5 py-2 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 bg-gray-800 text-gray-100 px-3.5 py-2 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6"
              >
                Phone Number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-gray-800 bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  >
                    <option>EU</option>
                    <option>US</option>
                    <option>AS</option>
                  </select>
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 bg-gray-800 text-gray-100 px-3.5 py-2 pl-24 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 bg-gray-800 text-gray-100 px-3.5 py-2 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
        <div className="max-w-lg sm:mx-auto sm:text-center">
          <img
            src={Logo}
            alt="Logo of the Company"
            className="w-32 sm:mx-auto rounded-lg"
          />
          <p className="leading-relaxed mt-2 text-[15px]">
            A better way to build. A better way to grow. A better way to scale.
          </p>
        </div>
        <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
          {footerNavs.map((item, idx) => (
            <li className=" hover:text-gray-800">
              <a key={idx} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 items-center justify-between sm:flex">
          <div className="mt-4 sm:mt-0">
            &copy; 2024 Company <a href="legal">All rights reserved</a>.
          </div>
          <div className="mt-6 sm:mt-0">
            <ul className="flex items-center space-x-4">
              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src={Linkedin} alt="Linkedin" className="h-5 w-5" />
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="https://www.linkedin.com/" target="_blank">
                  <img src={Linkedin} alt="Linkedin" className="h-5 w-5" />
                </a>
              </li>

              <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                <a href="mailto:contact@mail.com">
                  <img src={Linkedin} alt="Linkedin" className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <style jsx>{`
          .svg-icon path,
          .svg-icon polygon,
          .svg-icon rect {
            fill: currentColor;
          }
        `}</style>
      </footer>
    </div>
  );
}

export default Home; // Export the Home component for use in other parts of the app
