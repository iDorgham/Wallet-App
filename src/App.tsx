import React from 'react';
import BalanceCard from './components/BalanceCard';
import TransactionHistory from './components/TransactionHistory';
import { Home, CreditCard, ChevronRight, User, Bell } from 'lucide-react';

const dummyTransactions = [
  { id: 1, type: 'receive', amount: 200.00, description: 'Payment from John', date: '2024-05-03', time: '12:28 PM' },
  { id: 2, type: 'send', amount: 50.00, description: 'Dinner with friends', date: '2024-05-02', time: '09:48 AM' },
  { id: 3, type: 'receive', amount: 100.00, description: 'Freelance work', date: '2024-05-01', time: '01:41 PM' },
  { id: 4, type: 'receive', amount: 300.00, description: 'Payment from Alice', date: '2024-05-04', time: '03:15 PM' },
  { id: 5, type: 'send', amount: 75.00, description: 'Grocery shopping', date: '2024-05-03', time: '06:55 PM' },
  { id: 6, type: 'receive', amount: 150.00, description: 'Consulting fee', date: '2024-05-02', time: '11:20 AM' },
  { id: 7, type: 'send', amount: 25.00, description: 'Coffee with Bob', date: '2024-05-01', time: '08:30 AM' },
  { id: 8, type: 'receive', amount: 400.00, description: 'Payment from Client X', date: '2024-05-05', time: '09:00 AM' },
  { id: 9, type: 'send', amount: 100.00, description: 'Online purchase', date: '2024-05-04', time: '04:45 PM' },
  { id: 10, type: 'receive', amount: 120.00, description: 'Refund', date: '2024-05-03', time: '10:10 AM' },
];

const dummyCards = [
  { id: 'main', balance: 24129.50, available: 20000.00, lastFour: '8992', color: 'bg-green-500' },
  { id: 'secondary', balance: 4129.50, available: 1500.00, lastFour: '8141', color: 'bg-blue-500' },
];

function App() {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="container mx-auto">
          <BalanceCard cards={dummyCards} />
          <TransactionHistory transactions={dummyTransactions} />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 bg-opacity-50 backdrop-blur-lg py-4 px-6 shadow-md sticky bottom-0">
        <div className="container mx-auto flex items-center justify-around">
          <Home className="text-gray-300" />
          <CreditCard className="text-gray-300" />
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
            <ChevronRight className="text-white" />
          </div>
          <User className="text-gray-300" />
          <Bell className="text-gray-300" />
        </div>
      </footer>
    </div>
  );
}

export default App;
