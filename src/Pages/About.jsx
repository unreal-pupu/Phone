import React from 'react'
import VGQR from '../assets/VGQR.jpg'

const About = () => {
  return (
    <>
     <div className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto mt-20">
      
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-6 font-poppins">
        Get In Touch With Us
      </h1>
      <p className="text-center text-gray-600 mb-6 font-poppins">
        We are here to assist you! Whether you have a question or want to sell your mobile device, we're happy to help.
      </p>
      <p className="text-center text-gray-600 mb-12 font-poppins">
        Reach out to us via the contact methods below or scan the QR code to start a chat with us on WhatsApp.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-800 mb-4 font-poppins">Contact Information</h3>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Phone Number:</strong>{' '}
            <a href="tel:+234 7031513455" className="text-blue-500 hover:text-blue-700">
              +234 7031513455
            </a>
          </p>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@example.com" className="text-blue-500 hover:text-blue-700">
              support@example.com
            </a>
          </p>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Business Address:</strong> Address: Shop 39,First Floor, Zebra Plaza, New GSM and Computer Village, Etegwe, Yenagoa, Bayelsa State, Nigeria.
          </p>
          <p className="text-gray-600 mb-4 font-poppins">
            <strong>Opening Hours:</strong> Mon - Sat: 8:00 AM - 6:00 PM
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-medium text-gray-800 mb-4 font-poppins">Our Location</h3>
          <p className="text-gray-600 mb-4 font-poppins">
            <strong>Visit Us:</strong> Address: Shop 39,First Floor, Zebra Plaza, New GSM and Computer Village, Etegwe, Yenagoa, Bayelsa State, Nigeria.. Feel free to stop by during business hours.
          </p>
          <div className="text-center">
            <h4 className="text-lg font-medium text-gray-800 mb-2 font-poppins">Opening Hours:</h4>
            <p className="text-gray-600 font-poppins">Mon - Fri: 8:00 AM - 6:00 PM</p>
            <p className="text-gray-600 font-poppins"> Sun: Closed</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mt-12">
        <h3 className="text-xl font-medium text-gray-800 mb-4 text-center font-poppins">Chat with Us on WhatsApp</h3>
        <p className="text-gray-600 text-center mb-6 font-poppins">
          Scan the QR code below to quickly connect with our team on WhatsApp for any questions or inquiries.
        </p>
        <div className="flex justify-center">
          <img
            src={VGQR}
            alt="WhatsApp QR Code"
            className="w-[250px] h-[250px] object-contain"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default About