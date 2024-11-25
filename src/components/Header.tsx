"use client";

// import { ModeToggle } from "@/components/global/mode-toggle";
// import { UserButton } from "@clerk/nextjs";
// import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";
import Login from "./Login";

// type Props = {
//   user?: null | User;
// };

const Navigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setOpenModal(true);
  };
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image src={"/plura-logo.svg"} width={40} height={40} alt="plur logo" />
        <span className="text-xl font-bold"> Plura.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </button>
        {/* <UserButton /> */}
        {/* <ModeToggle /> */}
      </aside>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Login />
      </Modal>
    </div>
  );
};

export default Navigation;
