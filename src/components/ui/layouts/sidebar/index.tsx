import { AiOutlineBank, AiOutlineCalendar, AiOutlineFileSearch, AiOutlineHome, AiOutlineLogout, AiOutlineMessage, AiOutlineSetting, AiOutlineUsergroupAdd } from "react-icons/ai";
import { Button } from "../../button";

const Sidebar = () => {
  return (
    <div className='pb-12 min-h-screen'>
        <div className='space-y-4 py-4'>
            <div className='px-3 py-2'>
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Dashboard
                </h2>
                
                <div className="space-y-3">
                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                    <AiOutlineHome className="mr-2 text-lg"/>
                        Home
                    </Button>

                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                    <AiOutlineMessage className="mr-2 text-lg"/>
                        Messages
                    </Button>

                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                    <AiOutlineBank className="mr-2 text-lg"/>
                        Company Profile
                    </Button>

                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                    <AiOutlineUsergroupAdd className="mr-2 text-lg"/>
                        All Aplicants
                    </Button>

                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                    <AiOutlineFileSearch className="mr-2 text-lg"/>
                        Job Listings
                    </Button>

                    <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                    <AiOutlineCalendar className="mr-2 text-lg"/>
                        My Schedule
                    </Button>
                </div>

            </div>
        </div>
        <div className="space-y-4 py-4">
            <div className="px-3 py-2">
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                Settings
                </h2>

                <Button variant={"ghost"} className="w-full justify-start rounded-none hover:text-primary">
                    <AiOutlineSetting className="mr-2 text-lg"/>
                        Settings
                </Button>

                <Button variant={"ghost"} className="w-full text-red-500 justify-start rounded-none hover:text-red-500 hover:bg-red-200">
                    <AiOutlineLogout className="mr-2 text-lg"/>
                        Log Out
                </Button>
            </div>
        </div>

    </div>
  )
}

export default Sidebar