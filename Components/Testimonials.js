import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center m-0 md:m-auto mt-20 bg-white-gradient pt-20">
      <div className="flex flex-col text-center gap-4 w-full md:w-4/12 p-10 md:p-auto">
        <p className="text-[14px] text-purple-600 font-semibold">
          What people are saying
        </p>
        <h3 className="text-[32px] font-bold leading-[36px] ">
          Trusted by start-ups and world's largest companies
        </h3>
        <p className="text-[16px] font-normal text-gray-600">
          Join the growing number of customers and Champions who trust clerk for
          authentication and user management.
        </p>
      </div>

      {/* Container for the cards*/}
      <div className="pl-6 pr-6 pt-2 md:pt-8 md:pl-20 md:pr-20 pb-20">
      <div className="grid mt-14 grid-cols-1 md:grid-cols-3 gap-2 outline-dotted outline-2 outline-zinc-400 outline-offset-2">
        {/* Container for the first row of card container */}
        <div className="flex flex-col gap-2">
          {/* First row - card 1 */}
          <div className=" bg-white shadow-lg shadow-slate-300 rounded-[10px] items-start flex flex-col gap-4">
            <Image src="/vercel.png" alt="vercel" width={170} height={120} />
            <div className="flex flex-col pl-8 pr-8 gap-6">
              <h2 className="text-[20px]">
                "The best practices built-in to their SignIn and UserProfile
                components would take months to implement in-house, yet no
                sacrifice is made in terms of Enterprise extensibility or
                customization to your brand."
              </h2>
              <div className="flex flex-row justify-between items-center mb-10">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-semibold">Guillermo Rauch</p>
                  <p className="text-[14px] text-gray-500">CEO / Vercel</p>
                </div>
                <Image
                  src="/card1.jpg"
                  alt="Guillermo Raunch"
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>

          {/* First row - card 2 */}
          <div className="bg-transparent shadow-sm rounded-[10px] items-start flex flex-col gap-8 pt-6 border">
            <div className="flex flex-col pl-8 pr-8 gap-12">
              <h2 className="text-[16px] text-gray-500">
                "Clerk’s integration gives Supabase developers another
                incredible option for handling authentication. And the Clerk
                team are a pleasure to work with."
              </h2>
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold">Guillermo Rauch</p>
                  <p className="text-[14px] text-gray-500">CEO / Vercel</p>
                </div>
                <Image
                  src="/card2.jpeg"
                  alt="Paul Copplestone"
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Container for the second row of cards */}
        <div className="flex flex-col gap-2">
          {/*Second row - first card */}
          <div className=" bg-transparent shadow-sm  rounded-[10px] items-start flex flex-col gap-8 pt-6 border">
            <div className="flex flex-col pl-8 pr-8 gap-12">
              <h2 className="text-[16px] text-gray-500">
                "Clerk feels like the first time I booted my computer with an SSD. It’s so much faster and simpler that it changed how I do things."
              </h2>
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold">Theo Browne</p>
                  <p className="text-[14px] text-gray-500">CEO / Ping Labs</p>
                </div>
                <Image
                  src="/card3.jpeg"
                  alt="Paul Copplestone"
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>

          <div className=" bg-transparent shadow-sm  rounded-[10px] items-start flex flex-col gap-8 pt-6 border">
            <div className="flex flex-col pl-8 pr-8 gap-6">
              <h2 className="text-[16px] text-gray-500">
                "Clerk let us spin up a new product in hours instead of weeks. As a company that deeply values developer velocity— Clerk is exactly what we needed."
              </h2>
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold">Kevin Van Gundy</p>
                  <p className="text-[14px] text-gray-500">CEO / Hypermode</p>
                </div>
                <Image
                  src="/card4.jpeg"
                  alt="Paul Copplestone"
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>

          <div className=" bg-transparent shadow-sm  rounded-[10px] items-start flex flex-col gap-8 pt-6 border">
            <div className="flex flex-col pl-8 pr-8 gap-6">
              <h2 className="text-[16px] text-gray-500">
                "We were able to ship MFA, SSO, and SAML for our customers in a fraction of the time. Now, we have improved security and must-haves for enterprise prospects."
              </h2>
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold">Dan Farelly</p>
                  <p className="text-[14px] text-gray-500">CEO / Inngest</p>
                </div>
                <Image
                  src="/card5.jpeg"
                  alt="Paul Copplestone"
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Container for the 3 row of cards */}
        <div className="flex flex-col gap-2">

        <div className=" bg-transparent shadow-sm  rounded-[10px] items-start flex flex-col gap-8 pt-6 border">
            <div className="flex flex-col pl-8 pr-8 gap-6">
              <h2 className="text-[16px] text-gray-500">
                "After spending many hours on auth issues that seemed simple (but were not), we moved to Clerk and all that burden was lifted. We kind of wish we’d made that decision earlier."
              </h2>
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold">Julian Benegas</p>
                  <p className="text-[14px] text-gray-500">CEO / BaseHub</p>
                </div>
                <Image
                  src="/card6.png"
                  alt="Paul Copplestone"
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>

        <div className="order-[-1] md:order-1 bg-blue-500 rounded-[10px] items-start flex flex-col gap-24 text-white">
            <Image src="/stripelogo.png" alt="vercel" width={130} height={80} />
            <div className="flex flex-col pl-8 pr-8 gap-6">
              <h2 className="text-[20px]">
                "We’re big admirers of what the @ClerkDev team are building and looking forward to working more closely with them."
              </h2>
              <div className="flex flex-row justify-between items-center mb-12">
                <div className="flex flex-col gap-2">
                  <p className="text-[14px] font-semibold">Patrick Collison</p>
                  <p className="text-[14px] text-white">CEO / Stripe</p>
                </div>
                <Image
                  src="/card7.jpg"
                  alt="Guillermo Raunch"
                  width={50}
                  height={50}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>

          {/* First row - card 2 */}
          
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Testimonials;
