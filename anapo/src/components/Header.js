// src/components/Header.js
import { UserCircle } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Anapo</h1>
        <button className="text-gray-600 hover:text-blue-600">
          <UserCircle className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}