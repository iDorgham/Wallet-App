import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const SendMoneyForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Sending', amount, 'to', recipient);
    // Reset form fields
    setAmount('');
    setRecipient('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Quick Transfer</h2>
      <form onSubmit={handleSubmit} className="flex items-center justify-between">
        <div className="flex-grow mr-4">
          <input
            type="text"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
          />
          <input
            type="text"
            placeholder="Enter recipient"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="border border-gray-300 rounded-md px-4 py-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-full transition duration-300"
        >
          <ChevronRight />
        </button>
      </form>
    </div>
  );
};

export default SendMoneyForm;
