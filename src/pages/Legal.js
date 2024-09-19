import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../img/react.png";
import "../styles/Home.css";

function Legal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "home" },
    { name: "About us", href: "#about" },
    { name: "Prices", href: "#prices" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <div className="bg-neutral-950">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="home" className="-m-1.5 p-1.5">
              <span className="sr-only">FMenoni</span>
              <img alt="Logo FMenoni" src={Logo} className="h-8 w-auto" />
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
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">FMenoni</span>
                <img alt="" src={Logo} className="h-8 w-auto" />
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
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="text-left">
                <h1
                  className="text-4xl font-bold text-center tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-700 sm:text-6xl"
                  style={{ lineHeight: "1.2" }}
                >
                  Legal Notice
                </h1>
                <p className="mt-6 text-lg text-center leading-8 text-gray-500">
                  You can find here all the legal information about our company.
                </p>
                <div className="mt-12 text-center text-gray-300">
                  <p>
                    <strong>First Name :</strong> John
                  </p>
                  <p>
                    <strong>Last Name :</strong> Doe
                  </p>
                  <br />
                  <p>
                    <strong>Adress :</strong> Somewhere on the Earth
                  </p>
                  <p>
                    <strong>Email :</strong> contact@mail.com
                  </p>
                  <br />
                  <p>
                    <strong>Host :</strong>
                  </p>
                  <p>
                    <strong>Company Name :</strong> LWS (Ligne Web Services)
                  </p>
                  <p>
                    <strong>Adress :</strong> 10 rue Penthièvre, 75008 Paris
                  </p>
                  <p>
                    <strong>Phone Number :</strong> 01 77 62 30 03
                  </p>
                  <p>
                    <strong>Website :</strong> www.lws.fr
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;
