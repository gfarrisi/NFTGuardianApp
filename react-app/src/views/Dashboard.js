import React from "react";
import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Dashboard() {
  return (
    <>
      <Navbar transparent />
      <main style={{backgroundColor: '#D8E6ED'}}>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
         
      
        <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-black font-semibold text-5xl">
                   Dashboard Page
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                   
                  </p>
                   {/* <Link
                        to="/disputes"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        }
                        >
                        Disputes
                        </Link>
                        <Link
                        to="/admin/settings"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        }
                        >
                        Settings
                        </Link>
                        <Link
                        to="/admin/tables"
                        className={
                            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        }
                        >
                        Tables
                        </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      <Footer />
      </main>
    </>
  );
}
