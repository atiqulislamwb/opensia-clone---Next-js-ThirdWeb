import React, { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import { useWeb3 } from "@3rdweb/hooks";
import { faker } from "@faker-js/faker";
import { client } from "../lib/sanity.js";
import toast, { Toaster } from "react-hot-toast";
// <Head>
// <title>Opensia clone blockchain with next and sanity</title>
// <meta name="description" content="Opensia clone blockchain with next and sanity" />
// <link rel="icon" href="/opensea.png" />
// </Head>

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#1DBF73] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-2xl text-center text-white font-semibold mt-4`,
};
export default function Home() {
  const { address, connectWallet } = useWeb3();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName === "undefined" ? `${userName}` : " "}`,
      {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: "users",
        _id: address,
        userName: faker.name.findName(),
        walletAddress: address,
      };

      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);
    })();
  }, [address]);

  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      {address ? (
        <>
          <Navbar />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={() => connectWallet("injected")}
          >
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
}
