import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Menu, Moon, X } from 'lucide-react';

import { assets } from '@/assets/assets';
import { menu } from '@/libs/constants';

const Header = () => {
  return (
    <header>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href={'/'}>
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt={'ZIO 🫠'}
            title="ZIO 🫠"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          {menu.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="font-ovo">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button>
            <Moon className="w-6" />
          </button>

          <SignedOut>
            <SignInButton mode="modal">
              <span className="font-ovo cursor-pointer px-10 py-2.5 border border-gray-500 rounded-full ml-4">
                Sign In
              </span>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <button className="md:hidden block ml-3">
            <Menu className="w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-150 z-50 h-screen bg-rose-50 transition duration-500">
          <button className="absolute top-6 right-6">
            <X className="w-6" />
          </button>

          {menu.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="font-ovo">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
