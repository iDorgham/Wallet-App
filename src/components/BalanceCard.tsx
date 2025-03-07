import React from 'react';

interface Card {
  id: string;
  balance: number;
  available: number;
  lastFour: string;
  color: string;
}

interface BalanceCardProps {
  cards: Card[];
}

const BalanceCard: React.FC<BalanceCardProps> = ({ cards }) => {
  const mainCard = cards.find(card => card.id === 'main');

  const formatBalance = (balance: number) => {
    return balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  };

  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  const formattedDate = `${day}.${month}.${year}`;
  const formattedTime = `${hours}:${minutes}`;

  if (!mainCard) {
    return <div>No main card found</div>;
  }

  return (
    <div className="bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl shadow-lg p-6 text-white flex flex-col justify-between items-start h-full">
      <div className="flex justify-between items-start w-full">
        <div>
          <p className="text-lg">Current Balance</p>
          <p className="text-4xl font-bold mt-2">{formatBalance(mainCard.balance)} LE</p>
        </div>

        <div className="text-right flex flex-col">
          <p className="text-lg font-bold">76.25.50 LE</p>
          <p className="text-sm">This month spending</p>
        </div>
      </div>

      <div className="text-sm">
        <span className="font-bold">{formattedDate}</span><br />
        <span>{formattedTime}</span>
      </div>

      <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full transition duration-300">
        Send
      </button>
    </div>
  );
};

export default BalanceCard;
