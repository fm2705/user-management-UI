
import Image from "next/image";

const Navbar = () => {
  
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-8 flex items-center">
        <p className="text-white font-bold flex-auto">User Management System</p>
        { (
          <div className="flex items-center sm:space-x-2 justify-end">
            <Image
              
              className="rounded-full cursor-pointer"
              
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
