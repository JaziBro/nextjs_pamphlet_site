"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {ChevronDown,ChevronRight,Gift,Info,Minus,Plus} from "lucide-react"
import { FaEthereum, FaCreditCard } from "react-icons/fa";
import Image from "next/image"
import createCoinbaseCharge from "../paymentGateway/coinbase"
import { createCryptoInvoice } from "../paymentGateway/nowpayments"
import { createStripe } from "../paymentGateway/stripe"
import { createTransak } from "../paymentGateway/transak"
import { getGooglePayConfig, loadGooglePay } from "../paymentGateway/googlepay";





declare global {
  interface Window {
    ethereum?: any; // Add this to prevent TypeScript errors
  }
}

export default function PaymentModal() {
  const BASE_PRICE = 10
  const [quantity, setQuantity] = useState(1)
  const [amount, setAmount] = useState(BASE_PRICE)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+92")

  // Integration state:
  const [walletAddress, setWalletAddress] = useState<string>("")
  const [paymentName, setPaymentName] = useState<string>("Select Payment Method")
  const [paymentGateway, setPaymentGateway] = useState<any>(null)
  const [showPayOptions, setShowPayOptions] = useState<boolean>(false)

  // Update amount whenever quantity changes
  useEffect(() => {
    setAmount(quantity * BASE_PRICE)
  }, [quantity])

  const applePayRef = useRef<HTMLButtonElement>(null) // 🍎 Ref for Apple Pay button

  // Grab MetaMask address for Transak
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts: string[]) => setWalletAddress(accounts[0]))
        .catch(() => {})
    }
  }, [])

  const incrementQuantity = () => setQuantity(q => q + 1)
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1))

  const selectGateway = async (
    gateway: "transak" | "stripe" | "nowpayments" | "coinbase" | "googlepay" | "applepay"
  ) => {
    setShowPayOptions(false)
  
    if (gateway === "transak") {
      setPaymentName("Transak")
      const t = createTransak(walletAddress)
      setPaymentGateway(t)
    }
    if (gateway === "stripe") {
      setPaymentName("Card (Stripe)")
      const s = await createStripe()
      setPaymentGateway(s)
    }
    if (gateway === "nowpayments") {
      setPaymentName("NowPayments")
      const url = await createCryptoInvoice(amount)
      setPaymentGateway(url)
    }
    if (gateway === "coinbase") {
      setPaymentName("Coinbase")
      const url = await createCoinbaseCharge()
      setPaymentGateway(url)
    }
    if (gateway === "googlepay") {
      setPaymentName("Google Pay")
      // Dummy placeholder – replace with actual Google Pay setup if needed
      setPaymentGateway({ method: "googlepay" })
    }
    
  }
  

  const handlePayment = async () => {
    if (paymentName === "Transak") {
      paymentGateway?.init()
      return
    }
    if (paymentName === "NowPayments") {
      window.location.href = paymentGateway
      return
    }
    if (paymentName === "Coinbase") {
      window.location.href = paymentGateway
      return
    }
  
    if (paymentName === "Card (Stripe)") {
      const stripe = await paymentGateway
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: "price_1RIxgXRxwT7BLSjxopDAGLAT", quantity }],
        mode: "payment",
        successUrl: window.location.origin + "/success",
        cancelUrl: window.location.origin + "/cancel",
      })
      if (error) console.error(error.message)
      return
    }
  
    else if (paymentName === "Google Pay") {
      try {
        await loadGooglePay(); // Load Google Pay script
        const paymentsClient = new window.google.payments.api.PaymentsClient({
          environment: "TEST",
        });
    
        const config = getGooglePayConfig(amount.toFixed(2));
        const isReady = await paymentsClient.isReadyToPay(config);
    
        if (isReady.result) {
          const paymentDataRequest = config;
          const paymentData = await paymentsClient.loadPaymentData(paymentDataRequest);
    
          // console.log("Payment Success", paymentData);
          alert("Payment successful via Google Pay!");
          // TODO: Send token to backend or process the payment further
        } else {
          alert("Google Pay is not available.");
        }
      } catch (error) {
        console.error("Google Pay Error", error);
        alert("Google Pay failed to load or process.");
      }
    }
    
    // Fallback (should never hit)
    alert(`Would launch ${paymentName} here for \$${amount}`)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <div className="w-full max-w-3xl bg-gray-900 rounded-lg p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center">
            <Gift className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-3xl font-bold text-white">The Gift Shop</h2>
          <p className="text-gray-300 text-base max-w-lg">
            Get that hardworking man the best gift, a night out with his future forever buddy!
          </p>
        </div>

        {/* Phone Number Input */}
        <div className="space-y-2 max-w-xl mx-auto">
          <label htmlFor="phone" className="text-sm text-gray-400 flex items-center">
            Phone Number <span className="ml-1 text-pink-500">*</span>
          </label>
          <div className="flex">
            <div className="relative">
              <button
                className="h-12 px-4 flex items-center gap-2 rounded-l-md border border-gray-700 bg-gray-800 text-white"
                onClick={() => {}}
              >
                {countryCode} <ChevronDown className="h-4 w-4 text-gray-400" />
              </button>
            </div>
            <div className="relative flex-grow">
              <Input
                id="phone"
                type="tel"
                placeholder="Phone number"
                className="h-12 rounded-l-none border-gray-700 bg-gray-800 text-white text-base"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <p className="text-xs text-pink-500">Required</p>
        </div>

        {/* Payment Method & Amount */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Method */}
          <div className="space-y-2">
            <p className="text-sm text-gray-400 mb-2">Pay Using</p>
            <div className="bg-gray-800 rounded-md p-5 h-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    {paymentName.includes("Card") ? (
                      <FaCreditCard className="text-gray-900" />
                    ) : (
                      <FaEthereum className="text-gray-900" />
                    )}
                  </div>
                  <span className="text-white text-lg">{paymentName}</span>
                </div>
                <button
                  className="text-pink-500 flex items-center text-base"
                  onClick={() => setShowPayOptions(true)}
                >
                  Change <ChevronRight className="h-5 w-5 ml-2" />
                </button>
              </div>
              {/* Options dropdown */}
              {showPayOptions && (
                <div className="mt-4 space-y-2">
                  <button
                    onClick={() => selectGateway("transak")}
                    className="text-left w-full hover:underline text-sm text-white"
                  >
                    🔹 Transak
                  </button>
                  <button
                    onClick={() => selectGateway("nowpayments")}
                    className="text-left w-full hover:underline text-sm text-white"
                  >
                    🔹 NowPayments
                  </button>
                  <button
                    onClick={() => selectGateway("stripe")}
                    className="text-left w-full hover:underline text-sm text-white"
                  >
                    💳 Stripe
                  </button>
                  <button
                    onClick={() => selectGateway("coinbase")}
                    className="text-left w-full hover:underline text-sm text-white"
                  >
                    🏦 Coinbase
                  </button>
                  <button
                    onClick={() => selectGateway("googlepay")}
                    className="text-left w-full hover:underline text-sm text-white"
                  >
                    💰 Google Pay
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Amount */}
          <div className="bg-gray-800 rounded-md p-5">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center">
                <Info className="h-6 w-6 text-gray-400 mr-3" />
                <span className="text-pink-500 text-2xl font-bold">${amount}</span>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={decrementQuantity}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="text-white text-xl">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
                style={{ width: `${(quantity / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-gray-800 rounded-md p-5">
          <p className="text-sm text-gray-400 mb-3">The places you could go...</p>
          <div className="relative h-48 bg-gray-700 rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop"
              alt="map"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        {/* Action */}
        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
          <Button variant="outline" className="h-12 cursor-pointer">
            Cancel
          </Button>
          <Button onClick={handlePayment} className="h-12 cursor-pointer">
            Pay ${amount}
          </Button>
        </div>
      </div>
    </div>
  )
}
