'use client'

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const NavigationMenu = ({isOpen, toggleNavigationMenu}) => {


  return (
    <>

{isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleNavigationMenu}  // Close NavigationMenu when clicking outside
        ></div>
      )}

    <div className="relative group">
      {/* The Menu Button */}
      <button className="text-[14px] font-semibold flex flex-row items-center gap-1">
        Menu <FontAwesomeIcon icon={faAngleDown} style={{fontSize: '10px', color: 'gray'}}/>
      </button>

      {/* Dropdown Menu - show on hover */}
      <div className={`absolute flex top-full left-0 mt-3 bg-white border rounded-[10px] shadow-lg opacity-0 group-hover:opacity-100 group-hover:${isOpen? 'translate-y-1' : '-translate-y-1'} transition-all duration-1000 pointer-events-none group-hover:pointer-events-auto`}>
        
        <div className="flex flex-row">
        <div className="flex flex-col p-3 space-y-2">
          
          {/* Item 1 */}
          <div className="flex w-[300px] h-[80px] items-center gap-4 hover:bg-gray-50 p-2 rounded-[10px]">
            <div className="p-1 shadow-md border rounded-[10px]">
            <Image src='/react-logo.png' alt='React logo' width={50} height={50}/>
            </div>
            <div>
              <h6 className="text-[14px] font-semibold">React Components</h6>
              <p className="text-[12px] text-gray-500">
                Embeddable pre-built UI components for quick and seamless integrations.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex w-[300px] h-[80px] items-center gap-4 hover:bg-gray-50 p-2 rounded-[10px]">
            <div className="p-1 shadow-md border rounded-[10px]">
            <Image src='/react-logo.png' alt='React logo' width={50} height={50}/>
            </div>
            <div>
              <h6 className="text-[14px] font-semibold">User Authentication</h6>
              <p className="text-[12px] text-gray-500">
                Powerful options to securely authenticate and manage your users
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex w-[300px] h-[80px] items-center gap-4 hover:bg-gray-50 p-2 rounded-[10px]">
            <div className="p-1 shadow-md border rounded-[10px]">
            <Image src='/react-logo.png' alt='React logo' width={50} height={50}/>
            </div>
            <div>
              <h6 className="text-[14px] font-semibold">Clerk Elements</h6>
              <p className="text-[12px] text-gray-500">
                Unstyled UI primitives for endless customization. Powered by Clerk
              </p>
            </div>
          </div>

        </div>

        <div className="flex flex-col p-3 space-y-2">
          
          {/* Item 1 */}
          <div className="flex w-[300px] h-[80px] items-center gap-4 hover:bg-gray-50 p-2 rounded-[10px]">
            <div className="p-1 shadow-md border rounded-[10px]">
            <Image src='/react-logo.png' alt='React logo' width={50} height={50}/>
            </div>
            <div>
              <h6 className="text-[14px] font-semibold">React Components</h6>
              <p className="text-[12px] text-gray-500">
                Embeddable pre-built UI components for quick and seamless integrations.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex w-[300px] h-[80px] items-center gap-4 hover:bg-gray-50 p-2 rounded-[10px]">
            <div className="p-1 shadow-md border rounded-[10px]">
            <Image src='/react-logo.png' alt='React logo' width={50} height={50}/>
            </div>
            <div>
              <h6 className="text-[14px] font-semibold">User Authentication</h6>
              <p className="text-[12px] text-gray-500">
                Powerful options to securely authenticate and manage your users
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex w-[300px] h-[80px] items-center gap-4 hover:bg-gray-50 p-2 rounded-[10px]">
            <div className="p-1 shadow-md border rounded-[10px]">
            <Image src='/react-logo.png' alt='React logo' width={50} height={50}/>
            </div>
            <div>
              <h6 className="text-[14px] font-semibold">Clerk Elements</h6>
              <p className="text-[12px] text-gray-500">
                Unstyled UI primitives for endless customization. Powered by Clerk
              </p>
            </div>
          </div>

        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NavigationMenu;

