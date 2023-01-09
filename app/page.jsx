"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import LoggedHome from "./components/LoggedHome";
import HeaderLogged from "./components/HeaderLogged";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    let access = JSON.parse(localStorage.getItem("access"));
    if (access) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, []);
  return isLogged ? (
    <>
      <HeaderLogged 
      setIsLogged={setIsLogged} 
      />
      <LoggedHome />
    </>
  ) : (
    <>
      <Header />
      <HomePage />
    </>
  );
}
