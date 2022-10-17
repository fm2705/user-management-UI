
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session, status } = useSession();
  return (
    
    
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <p className="text-white font-bold flex-auto">User Management System</p>
        { (
          <div className="flex items-center sm:space-x-2 justify-end">
            {/* <button
          //on click ridirect to next js authentication
          //whatever authentication provider we have configured (Facebook), all the links will be there and we can login with those
            onClick={signOut}
            className="rounded bg-blue-600 text-white px-6 py-2 font-semibold">
            Sign OUT
          </button> */}
            <Image
              onClick={signOut}
              className="rounded-full cursor-pointer"
              src={session?.user.image}
              height="30"
              width="30"
              layout="fixed"
              title="Click to Logout"></Image>
            <p className="text-white font-bold"></p>
          </div>
        )}
      </div>
    </div>      
  );
};

export default Navbar;
