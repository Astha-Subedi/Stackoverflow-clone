import React from 'react';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b shadow-sm">
      <div className="flex items-center space-x-4">
        <img
          src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=ac8d4b7f3c0e"
          alt="stackoverflow logo"
          className="h-8 w-auto max-w-[150px]"
        />
        <h1 className="text-xl font-semibold text-gray-800">Stack Overflow Clone</h1>
      </div>
      <input
        type="text"
        placeholder="Search…"
        className="border rounded px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </header>
  );
}
