"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa6";
import { Gift } from "lucide-react"
import { createTransak } from "../paymentGateway/transak";
import { createPaymentGateway } from "../paymentGateway/factory";

declare global {
  interface Window {
    ethereum?: any;
  }
}


export default function GiftShop() {
  const [count, setCount] = useState<number>(1);
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [transak, setTransak] = useState<any>(null);

  useEffect(() => {
    async function getWalletAddress() {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } else {
        alert('MetaMask not detected');
      }
    }

    getWalletAddress();
  }, []);

  useEffect(() => {
    if (walletAddress) {
      const transakInstance = createTransak(walletAddress);
      setTransak(transakInstance);
    }
  }, [walletAddress]);

  const handlePayment = () => {
    if (transak) {
      transak.init();
    } else {
      alert('Payment gateway not ready yet!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white px-4 py-12 mt-20">
      <div className="text-center mb-10">
        <Gift className="w-16 h-16 mx-auto mb-4"/>
        <h1 className="text-3xl font-bold">The Gift Shop</h1>
        <p className="text-gray-300 mt-2 max-w-md mx-auto">
          Get that hardworking man the best gift, a night out with his future forever buddy!
        </p>
      </div>

      {/* Phone Input */}
      <div className="w-full max-w-md mb-6">
        <label className="text-sm text-gray-400">Phone Number</label>
        <div className="flex items-center mt-1 border border-pink-500 rounded-full overflow-hidden shadow-md">
          <span className="bg-pink-700 px-4 py-2">+92</span>
          <input
            type="text"
            placeholder="Phone number"
            className="flex-1 bg-transparent px-4 py-2 text-white focus:outline-none"
          />
          <button className="px-4 text-pink-400 hover:text-pink-200">📞</button>
        </div>
      </div>

      {/* Payment + Counter aligned in row */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Google Pay */}
        <div className="flex-1 flex">
          <div className="bg-[#1c1c1e]/80 backdrop-blur-lg rounded-2xl p-6 w-full shadow-lg flex flex-col justify-between">
            <p className="text-gray-400 text-center">Pay Using</p>
            <div className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-xl">
              <div className="flex items-center gap-3">
                <FaEthereum width={24} height={24} />
                <span>Crypto Pay (via Transak)</span>
              </div>
              <button className="text-pink-400 hover:underline">Change ➤</button>
            </div>
          </div>
        </div>

        {/* Counter + Map */}
        <div className="flex-1 flex">
          <div className="bg-[#1c1c1e]/80 backdrop-blur-lg rounded-2xl p-6 w-full shadow-lg flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Location"
                className="bg-zinc-800 px-4 py-2 rounded-lg w-1/2 text-white"
              />
              <div className="flex items-center gap-3 text-lg">
                <span className="text-pink-400">${count * 25}</span>
                <button
                  onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                  className="bg-zinc-700 px-2 rounded-full"
                >
                  -
                </button>
                <span className="w-6 text-center">{count}</span>
                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="bg-zinc-700 px-2 rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="rounded-xl overflow-hidden mb-2">
                <Image
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop"
                  alt="Map"
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                />
              </div>
              <p className="text-gray-400 text-sm">WESTMINSTER</p>
              <p className="text-xs text-gray-500 mt-2">The places you could go...</p>
              <div className="flex flex-wrap gap-2 mt-2 text-sm text-pink-300">
                <span className="bg-zinc-800 px-2 py-1 rounded-lg">Palace</span>
                <span className="bg-zinc-800 px-2 py-1 rounded-lg">Temple</span>
                <span className="bg-zinc-800 px-2 py-1 rounded-lg">Options...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-10">
        <button className="bg-zinc-700 px-6 py-2 rounded-full text-pink-400 hover:bg-zinc-600 shadow-md">
          Cancel
        </button>
        <button
          className="bg-pink-600 px-6 py-2 rounded-full text-white hover:bg-pink-700 shadow-md"
          onClick={handlePayment}
        >
          Pay ${count * 25}
        </button>


      </div>
    </div>
  );
}
