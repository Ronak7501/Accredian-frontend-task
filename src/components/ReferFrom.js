import React from 'react';

const ReferForm = () => {

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Collect form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch('http://localhost:3000/api/referrals', {  // Replace with your actual API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      // Optionally show a success message or redirect the user
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your referral.');
    }
  };

  return (
    <form className="refer-earn-form space-y-4">
      <h2 className="text-2xl font-bold mb-4">Refer and Earn</h2>
      
      {/* Referrer Information */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Your Information</h3>
        <label className="block mb-2">
          Full Name:
          <input type="text" name="referrerName" required className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          Email Address:
          <input type="email" name="referrerEmail" required className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          Phone Number:
          <input type="tel" name="referrerPhone" className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          Referral Code:
          <input type="text" name="referralCode" className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          Course Interested In:
          <input type="text" name="courseInterested" className="block w-full mt-1 p-2 border rounded"/>
        </label>
      </div>
      
      {/* Referee Information */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Friend's Information</h3>
        <label className="block mb-2">
          Full Name:
          <input type="text" name="refereeName" required className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          Email Address:
          <input type="email" name="refereeEmail" required className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          Phone Number:
          <input type="tel" name="refereePhone" className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          Preferred Course:
          <input type="text" name="preferredCourse" className="block w-full mt-1 p-2 border rounded"/>
        </label>
      </div>
      
      {/* Additional Information */}
      <div>
        <label className="block mb-2">
          Message:
          <textarea name="message" className="block w-full mt-1 p-2 border rounded"></textarea>
        </label>
        <label className="block mb-2">
          <input type="checkbox" name="terms" required className="mr-2"/>
          I agree to the terms and conditions
        </label>
        <label className="block mb-2">
          <input type="checkbox" name="privacy" required className="mr-2"/>
          I agree to the privacy policy
        </label>
      </div>
      
      {/* Optional Fields */}
      <div>
        <label className="block mb-2">
          LinkedIn Profile:
          <input type="url" name="linkedinProfile" className="block w-full mt-1 p-2 border rounded"/>
        </label>
        <label className="block mb-2">
          How Did You Hear About Us?:
          <input type="text" name="howDidYouHear" className="block w-full mt-1 p-2 border rounded"/>
        </label>
      </div>
      
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Submit</button>
    </form>
  );
};

export default ReferForm;
