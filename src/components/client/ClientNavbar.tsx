'use client';

import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { Bell, User, MessageSquare } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  email: string;
  business: {
    name: string;
  };
  unreadMessages?: number;
  unreadNotifications?: number;
}

interface ClientNavbarProps {
  client: Client;
}

export default function ClientNavbar({ client }: ClientNavbarProps) {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/client/dashboard" className="text-xl font-bold text-gray-800">
                {client.business.name}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/client/messages"
              className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Messages</span>
              <MessageSquare className="h-6 w-6" />
              {client.unreadMessages && client.unreadMessages > 0 && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              )}
            </Link>
            <Link
              href="/client/notifications"
              className="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">Notifications</span>
              <Bell className="h-6 w-6" />
              {client.unreadNotifications && client.unreadNotifications > 0 && (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
              )}
            </Link>
            <div className="flex items-center space-x-3">
              <Link
                href="/client/profile"
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                <User className="h-6 w-6" />
                <span>{client.name}</span>
              </Link>
              <button
                onClick={() => signOut()}
                className="text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 