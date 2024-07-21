import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const PopupModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerEmail: '',
    referrerPhone: '',
    referralLink: '',
    referralCode: '',
    // termsAccepted: false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('FormData before submit:', formData);

    try {
      const response = await fetch('http://localhost:5000/api/referrals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(formData),
        
      });
      console.log(response);
      
  if (response.ok) {
    const data = await response.json();
    console.log('Data received from form:', data);
    alert('Your referral has been submitted successfully!');
    setFormData({
      referrerName: '',
      referrerEmail: '',
      referrerPhone: '',
      referralLink: '',
      referralCode: '',
    });
    onClose(); 
  } else {
    console.error('Failed to submit form:', response.status);
    alert('There was an error submitting your referral.');
  }
} catch (error) {
  console.error('Error:', error);
  alert('There was an error submitting your referral.');
}
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[40%]  relative max-h-[90vh] overflow-auto">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl text-blue-600 font-bold mb-4">Refer and Earn Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="referrerName">Your Name</label>
            <input
              type="text"
              id="referrerName"
              name="referrerName" 
              value={formData.referrerName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="referrerEmail">Your Email</label>
            <input
              type="email"
              id="referrerEmail"
              name="referrerEmail"
              value={formData.referrerEmail}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="referrerPhone">Your Phone (Optional)</label>
            <input
              type="tel"
              id="referrerPhone"
              name="referrerPhone"
              value={formData.referrerPhone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="referralLink">Referral Link</label>
            <input
              type="url"
              id="referralLink"
              name="referralLink"
              value={formData.referralLink}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter Referral Link"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="referralCode">Referral Code</label>
            <input
              type="text"
              id="referralCode"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
              placeholder="Enter referral Code"
            />
          </div>


          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="termsAccepted"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="termsAccepted" className="ml-2 text-gray-600">I agree to the terms and conditions</label>
          </div>

          <div className='flex justify-center'>
            <button
              type="submit"
              className=" w-[50%] bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

PopupModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default PopupModal;



      
