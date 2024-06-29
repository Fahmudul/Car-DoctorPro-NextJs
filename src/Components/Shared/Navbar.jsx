"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const session = useSession();
  console.log(session);
  const NavLink = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Blog",
      link: "/blog",
    },
    {
      title: "MyBookings",
      link: "/my-bookings",
    },
    {
      title: "Contact",
      link: "/contacts",
    },
  ];
  return (
    <div className="navbar bg-base-100">
      <div className="navbar w-[95%] mx-auto">
        <div className="navbar-start ">
          <div className="">
            <Link href={"/"}>
              <Image
                alt="Carimage"
                src="/assets/logo.svg"
                width={80}
                height={150}
              />
            </Link>
          </div>
          <div className="dropdown">
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            {NavLink.map((link) => (
              <Link
                href={link.link}
                key={link.title}
                className="mx-2 hover:text-primary duration-300f"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <IoCartOutline className="text-2xl  mr-3" />
          <FaSearch className="text-xl mr-3" />
          <a className="btn btn-outline btn-primary ">Appointment</a>
          {/* <div>
            <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50} className="rounded-full"/>
          </div> */}
          {session?.status === "loading" && <h6>Loading....</h6>}
          {session?.status === "unauthenticated" && (
            <Link href="/login" className="btn btn-primary px-8 ml-2">
              Login
            </Link>
          )}
          {session?.status === "authenticated" && (
            <button
              className="btn btn-outline btn-ghost px-8"
              onClick={() => signOut()}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
