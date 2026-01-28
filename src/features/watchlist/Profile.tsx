import { useEffect } from "react";
import { useAuth } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Profile = () => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/watchlist");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[32%_68%] min-h-screen">
      <div className="h-[500px] flex flex-col items-center justify-center p-8 gap-6 ">
        <div className="text-2xl font-semibold mb-6">Profile</div>
        <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-gray-300">
          <img
            src=""
            alt="Profile Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-xl text-[#E8D9C6] mb-6">Username</div>
        <Button
          variant="outline"
          className="border-0 bg-red-800 hover:bg-red-900"
        >
          CHANGE AVATAR
        </Button>
      </div>
      <div className="p-8 border-l-2 border-[#403B36]">
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium mt-5 mb-2 uppercase"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={user?.first_name}
            readOnly
            className="w-full  px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium mt-5 mb-2 uppercase"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={user?.last_name}
            readOnly
            className="w-full px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mt-5 mb-2 uppercase"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full px-4 py-2 text-[#E8D9C6] border border-[#fff8ee] rounded-md focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};
