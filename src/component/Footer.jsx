import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-600 text-white py-12 mt-28">
      {/* Newsletter Section */}
      <div className="text-center mb-10">
        <div className="text-3xl font-bold mb-4">Subscribe To Our Newsletter</div>
        <p className="mb-6">Stay updated about the latest discounts and offers</p>
        <div className="flex justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none w-1/3"
          />
          <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 px-10">
        <div>
          <h3 className="font-semibold text-lg mb-4">PRODUCTS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Text</a></li>
            
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">LEGAL PAGES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">PRODUCTS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Text</a></li>
            
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">PRODUCTS</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Text</a></li>
            
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">LEGAL PAGES</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Lorem Ipsum</a></li>
            <li><a href="#" className="hover:underline">Lorem Ipsum Text</a></li>
          
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-10">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
