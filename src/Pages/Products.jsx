import React from 'react'

const Products = () => {
  return (
    <>
     <div className="bg-gray-100 p-8 rounded-lg max-w-4xl mx-auto mt-40">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 font-poppins">
        Want to Sell Your Mobile Device?
      </h2>
      <p className="text-center text-gray-600 mb-8 font-poppins">
      We pay in cash! It’s so simple to sell or swarp old/used devices. We're here to help! Reach out to us using any of the contact methods below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4 font-poppins">Contact Us</h3>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Phone Number:</strong>{' '}
            <a href="tel:+1234567890" className="text-blue-500 hover:text-blue-700">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@example.com" className="text-blue-500 hover:text-blue-700">
              support@example.com
            </a>
          </p>
          <p className="text-gray-600 mb-2 font-poppins">
            <strong>Business Address:</strong> 123 Main Street, City, Country
          </p>
          <p className="text-gray-600 mb-4 font-poppins">
            <strong>Opening Hours:</strong> Mon - Fri: 9:00 AM - 6:00 PM
          </p>
        </div>

    
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-medium text-gray-800 mb-4 font-poppins">Chat with Us on WhatsApp</h3>
          <p className="text-gray-600 font-poppins">
            Scan the QR code to quickly connect with our team on WhatsApp for any questions or inquiries.
          </p>
          <div className="flex justify-center mt-4">
            <img
              src="https://via.placeholder.com/150?text=WhatsApp+QR"
              alt="WhatsApp QR Code"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Products