import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Clock Bakers. All rights reserved.</p>
        <div className="mt-4">
          <a href="/privacy" className="mx-2 hover:text-gray-400">Privacy Policy</a>
          <a href="/terms" className="mx-2 hover:text-gray-400">Terms & Conditions</a>
          <a href="/contact" className="mx-2 hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
