// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-8">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Logo and Description */}
//           <div>
//             <h2 className="text-2xl font-bold mb-4">ShopEasy</h2>
//             <p className="text-gray-400">
//               Your one-stop shop for the best products at unbeatable prices.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Shop
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   FAQs
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Returns
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Shipping Info
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-blue-400">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter Signup */}
//           <div>
//             <h3 className="text-xl font-semibold mb-4">
//               Subscribe to our Newsletter
//             </h3>
//             <form className="flex flex-col space-y-3">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="px-4 py-2 rounded-md text-gray-900 focus:outline-none"
//               />
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
//           <p>
//             &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">ShopEasy</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Your one-stop shop for the best products at unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Shop", "About Us", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Customer Service
            </h3>
            <ul className="space-y-2">
              {["FAQs", "Returns", "Shipping Info", "Privacy Policy"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Subscribe to our Newsletter
            </h3>
            <form className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm sm:text-base">
          <p>
            &copy; {new Date().getFullYear()} ShopEasy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
