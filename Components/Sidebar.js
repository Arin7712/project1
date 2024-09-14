'use client';

import { faClose, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleSidebar}  // Close sidebar when clicking outside
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-3/4 max-w-xs bg-white transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        {/* Header with Logo and Close Button */}
        <div className="flex justify-between p-4">
          <Image src='/clerk-logo-dark-accent.png' alt='logo' width={80} height={60} />
          <button onClick={toggleSidebar} className="text-black font-bold">
            <FontAwesomeIcon icon={faClose} style={{ fontSize: '20px', color: 'gray' }} />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full border-[1px] border-gray"></div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-4 p-4">
          <li className="text-[16px] font-semibold">Components</li>
          <li className="text-[16px] font-semibold">Templates</li>
          <li className="text-[16px] font-semibold">Docs</li>
        </ul>

        {/* Divider */}
        <div className="w-full border-[1px] border-gray"></div>

        {/* Sign-in and Button */}
        <div className="gap-4 p-4">
          <p className="text-[16px] font-semibold hover:cursor-pointer mb-4">Sign in</p>
          <button className="bg-black block text-white font-semibold pl-[14px] pr-[14px] pt-[6px] pb-[6px] items-center justify-center rounded-[10px] hover:cursor-pointer">
            Get all-access <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '10px' }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;