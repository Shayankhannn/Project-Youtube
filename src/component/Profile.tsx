import  {  useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {
  const [bannerUrl, setBannerUrl] = useState<string>("https://placehold.co/1500x400");
  const [profileUrl, setProfileUrl] = useState<string>("https://placehold.co/100");
  const [subscribe, setIsSubscribe] = useState<boolean>(false);

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };
  const handleProfileChange  = (event: any) => {
    const profileFile = event.target.files[0];
    if (profileFile) {
      setProfileUrl(URL.createObjectURL(profileFile));
    }
  };

  return (
    <>
      <div className="relative w-[94%] ml-[5rem]">
        <div className="relative">
          <img
            src={bannerUrl}
            alt="banner"
            className="w-full h-60 object-cover"
          />
          <button className="absolute top-2 text-white p-2 rounded-full right-2 bg-gray-800 hover:bg-gray-600">
            <label htmlFor="banner-upload" className="cursor-pointer">
              <FaCamera size={22} />
            </label>
            <input
              type="file"
              id="banner-upload"
              onChange={handleBannerChange}
              accept="image/*"
              className="hidden"
            />
          </button>
        </div>

        {/* logo  */}
        <div className="flex relative items-center ml-4 mt-[2rem]">
          <img
            src={profileUrl}
            alt="profile url"
            className="w-40 border-white relative h-40 rounded-full object-cover"
          />
          <div className="absolute  mt-[7rem] ml-[6.5rem]">
            <button className="absolute   z-10  text-white p-2 rounded-full right-2 bg-gray-800 hover:bg-gray-600">
              <label htmlFor="profile-upload" className="cursor-pointer">
                <FaCamera size={22} />
              </label>
              <input
                type="file"
                id="profile-upload"
                onChange={handleProfileChange}
                accept="image/*"
                className="hidden"
              />
            </button>
            </div>
            {/* channel details  */}
            <div className="ml-4 mt-4">
              <h1 className="text-2xl font-bold ml-[4rem]">Youtube</h1>
              <p className="ml-[4rem]">1m views</p>
              <p className="mt-2 ml-[4rem]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda vel quia quas?
              </p>
           <button className={`mt-4 bg-red-600 text-white rounded py-2 px-4 hover:bg-red-500 ml-[4rem] ${subscribe ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600'}`} onClick={()=> setIsSubscribe(!subscribe)}>{subscribe ? ' Unsubscribe' : 'Subscribed'}</button>
       </div>
        </div>
      <Tabs/>
      </div>
    </>
  );
};

export default Profile;
