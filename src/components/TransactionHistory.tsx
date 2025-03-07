import React from 'react';
import { ArrowDown, ArrowUp, User2, Users2, Home } from 'lucide-react';

interface Transaction {
  id: number;
  type: 'send' | 'receive';
  amount: number;
  description: string;
  date: string;
  time: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Transfers</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-none">
            <div className="flex items-center">
              <div className="rounded-full p-2 mr-3 bg-gray-100">
                {transaction.type === 'send' ? (
                  <ArrowUp size={20} className="text-red-500" />
                ) : (
                  transaction.description.includes('John') ?
                    <User2 size={20} className="text-blue-500" /> :
                    transaction.description.includes('friends') ?
                      <Users2 size={20} className="text-yellow-500" /> :
                      <Home size={20} className="text-green-500" />
                )}
              </div>
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-500">{transaction.date} {transaction.time}</p>
              </div>
            </div>
            <p className={transaction.type === 'send' ? 'text-red-500' : 'text-green-500'}>
              {transaction.type === 'send' ? '-' : '+'} ${transaction.amount.toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
