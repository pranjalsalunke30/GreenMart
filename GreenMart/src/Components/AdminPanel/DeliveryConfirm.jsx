// import { useState } from "react";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../firebaseConfig"; // Ensure this path is correct
// import { toast, Toaster } from "react-hot-toast";

// export default function DeliveryOTPVerification({ orderId, customerPhone, onVerified }) {
//   const [otp, setOtp] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [confirmation, setConfirmation] = useState(null);

//   const setupRecaptcha = () => {
//     if (!window.recaptchaVerifier) {
//         try {
//             window.recaptchaVerifier = new RecaptchaVerifier(
//                 auth,  // ✅ Pass auth instance
//                 "recaptcha-container", 
//                 {
//                     size: "invisible",
//                     callback: (response) => {
//                         console.log("🟢 reCAPTCHA Verified:", response);
//                     },
//                     "expired-callback": () => {
//                         console.log("⚠️ reCAPTCHA expired. Resetting...");
//                         window.recaptchaVerifier.reset();
//                     }
//                 }
//             );
//         } catch (error) {
//             console.error("❌ Error initializing reCAPTCHA:", error);
//         }
//     }
// };

// const sendOTP = async () => {
//   setLoading(true);

//   // Ensure reCAPTCHA is initialized before sending OTP
//   setupRecaptcha();

//   try {
//       const formattedPhone = `+${customerPhone.replace(/\s+/g, "")}`;
//       const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, window.recaptchaVerifier);
//       setConfirmation(confirmationResult);
//       toast.success("OTP sent successfully!");
//   } catch (error) {
//       toast.error("Failed to send OTP: " + error.message);
//       console.error("❌ OTP Error:", error);
//   } finally {
//       setLoading(false);
//   }
// };


//   const verifyOTP = async () => {
//     setLoading(true);
//     try {
//       await confirmation.confirm(otp);
//       toast.success("Order Delivered Successfully!");
      
//       // Call function to update order status
//       onVerified(orderId);

//     } catch (error) {
//       toast.error("Invalid OTP!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 border rounded-lg shadow-md">
//       <Toaster />
      
//       <h2 className="text-lg font-bold mb-2">Delivery OTP Verification</h2>
//       <div id="recaptcha-container"></div>

//       {confirmation ? (
//         <>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             className="border p-2 w-full"
//           />
//           <button
//             onClick={verifyOTP}
//             className="bg-green-500 text-white w-full p-2 mt-2 rounded-lg"
//           >
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </>
//       ) : (
//         <>
//           <button
//             onClick={sendOTP}
//             className="bg-blue-500 text-white w-full p-2 rounded-lg"
//           >
//             {loading ? "Sending OTP..." : "Send OTP to Customer"}
//           </button>
//         </>
//       )}
//     </div>
//   );
// }
