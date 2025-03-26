import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-gray-600 px-15 py-10">
            <div className="max-w-7xl mx-20 flex justify-between">
                {/* Left Section */}
                <div className="w-1/3 text-sm leading-relaxed">
                    <p>
                        aljkd aouijwe lkjad f,mn adslkjf oui adf adfljlkadf oiou wer
                        oidslkh fdslkdjf lkjfdslk jlkjsdlf
                    </p>
                    <p className="mt-4">Kupondole, Lalitpur</p>
                    <p className="mt-2">Phone: 1231231231</p>
                    <p className="mt-2">Email: sandipgottastycake@gmail.com</p>
                </div>

                {/* Middle Section - Useful Links */}
                <div className="w-1/3 text-center">
                    <h3 className="text-gray-700 font-semibold">USEFUL LINKS</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                        <li>Contact Us</li>
                        <li>Our Location</li>
                        <li>Return Policy</li>
                    </ul>
                </div>

                {/* Right Section - Footer Menu */}
                <div className="w-1/3 text-center">
                    <h3 className="text-gray-700 font-semibold">FOOTER MENU</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>Instagram Profile</li>
                        <li>New Collections</li>
                        <li>LinkedIn Profile</li>
                        <li>Team Members</li>
                        <li>Blogs</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
