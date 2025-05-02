"use client";

import { useEffect, useState } from "react";
import { FaEthereum, FaCreditCard } from "react-icons/fa6";
import { Gift } from "lucide-react";
import { createTransak } from "../paymentGateway/transak";
import { createStripe } from "../paymentGateway/stripe";
import { createPaddle } from "../paymentGateway/paddle";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function GiftShop() {
  const [count, setCount] = useState<number>(1);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [paymentGateway, setPaymentGateway] = useState<any>(null);
  const [paymentName, setPaymentName] = useState<string>("Crypto Pay (via Transak)");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  useEffect(() => {
    async function getWalletAddress() {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } else {
        alert("MetaMask not detected");
      }
    }

    getWalletAddress();
  }, []);

  useEffect(() => {
    if (walletAddress && paymentName.includes("Crypto")) {
      const transakInstance = createTransak(walletAddress);
      setPaymentGateway(transakInstance);
    }
  }, [walletAddress]);

  const handlePayment = async () => {
    if (!paymentGateway) {
      alert("Payment gateway not ready yet!");
      return;
    }

    if (paymentName.includes("Crypto")) {
      paymentGateway.init();
    } else if (paymentName.includes("Stripe")) {
      const stripe = await paymentGateway;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: "price_1RIxgXRxwT7BLSjxopDAGLAT", quantity: count }],
        mode: "payment",
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      });
      if (error) console.error(error.message);
    } else if (paymentName.includes("Paddle")) {
      if (paymentGateway?.Checkout?.open) {
        paymentGateway.Checkout.open({
          override: true,
          product: "price_1RIxgXRxwT7BLSjxopDAGLAT", // You may dynamically inject priceId later if needed
          successCallback: () => console.log("Paddle payment successful"),
          closeCallback: () => console.log("Paddle checkout closed"),
        });
      } else {
        console.error("Paddle checkout not available");
      }
    }
  };

  const handleChangePayment = () => {
    setShowOptions(true);
  };

  const selectGateway = async (gateway: "transak" | "stripe" | "paddle") => {
    if (gateway === "transak") {
      const transakInstance = createTransak(walletAddress);
      setPaymentGateway(transakInstance);
      setPaymentName("Crypto Pay (via Transak)");
    } else if (gateway === "stripe") {
      const stripeInstance = await createStripe();
      setPaymentGateway(stripeInstance);
      setPaymentName("Card Payment (via Stripe)");
    } else if (gateway === "paddle") {
      const paddleInstance = await createPaddle("pri_01jt122n14vsx60gkzb8t3mnsn");
      setPaymentGateway(paddleInstance);
      setPaymentName("Card Payment (via Paddle)");
    }
    setShowOptions(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white px-4 py-12 mt-20">
      <div className="text-center mb-10">
        <Gift className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold">The Gift Shop</h1>
        <p className="text-gray-300 mt-2 max-w-md mx-auto">
          Get that hardworking man the best gift, a night out with his future forever buddy!
        </p>
      </div>

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

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-[#1c1c1e]/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400 text-center">Pay Using</p>
            <div className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-xl mt-2">
              <div className="flex items-center gap-3">
                {paymentName.includes("Crypto") ? (
                  <FaEthereum width={24} height={24} />
                ) : (
                  <FaCreditCard width={24} height={24} />
                )}
                <span>{paymentName}</span>
              </div>
              <button className="text-pink-400 hover:underline" onClick={handleChangePayment}>
                Change ➤
              </button>
            </div>
            {showOptions && (
              <div className="mt-4 space-y-2">
                <button onClick={() => selectGateway("transak")} className="text-left w-full hover:underline text-sm">
                  🔹 Crypto (via Transak)
                </button>
                <button onClick={() => selectGateway("stripe")} className="text-left w-full hover:underline text-sm">
                  💳 Card (via Stripe)
                </button>
                <button onClick={() => selectGateway("paddle")} className="text-left w-full hover:underline text-sm">
                  💳 Card (via Paddle)
                </button>
              </div>
            )}
            <button
              onClick={handlePayment}
              className="mt-6 w-full bg-pink-600 hover:bg-pink-700 transition-colors py-2 rounded-full"
            >
              Pay Now
            </button>
          </div>
        </div>

        <div className="flex-1 h-[300px] rounded-2xl overflow-hidden shadow-lg border-2 border-pink-600">
          <MapContainer center={[33.6844, 73.0479]} zoom={12} style={{ height: "100%", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[33.6844, 73.0479]}>
              <Popup>Your gift will be dispatched from here 🎁</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
