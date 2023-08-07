import { useState } from 'react';

import BackIcon from '@/assets/icons/commons/back.svg';
import SettingsIcon from '@/assets/icons/commons/setting.svg';
import SideBarIcon from '@/assets/icons/commons/sidebar.svg';
import Button from '@/components/atoms/Button/Button.component';
import ChatHistorySearch from '@/components/molecules/ChatHistorySearch/ChatHistorySearch.component';
import ChatForm from '@/pages/chat/ChatForm/ChatForm.page';
import BaseRoutes from '@/routes/Routes';
import { IRoute } from '@/routes/Routes.types';

const routes: IRoute[] = [{ path: '', element: <ChatForm />, order: 1 }];

function MainLayout() {
  const [hidden, setHidden] = useState(false);
  return (
    <div className="flex flex-col">
      <div className=" flex h-[93px] bg-[#F97316] w-full items-center  shadow-base">
        <div className="flex w-full justify-start">
          <button className="flex m-2 justify-center items-center text-white text-base border-[1.5px] p-2.5 border-solid border-white w-[94px] h-[45px]">
            <img src={BackIcon} />
            Atrás
          </button>
          <Button
            className="flex m-2 justify-center items-center border-[1.5px] p-2.5 
          border-solid border-white w-[45px] h-[45px]  transition duration-150 ease-in-out"
            handleClick={() => setHidden(!hidden)}
          >
            <img src={SideBarIcon} />
          </Button>
        </div>
        <div className="flex w-full justify-end">
          <button className="flex m-2 items-center justify-center border-[1.5px] border-solid border-white w-[45px] h-[45px]">
            <img src={SettingsIcon} />
          </button>
        </div>
      </div>
      <div className="flex p-4 bg-[#F8FAFC]">
        <div
          className={`px-4 flex flex-row justify-start 
       data-te-collapse-item transition-all ${hidden ? 'collapse w-0 ' : 'visible w-3/12'}`}
        >
          <ChatHistorySearch></ChatHistorySearch>
        </div>
        <div
          className={`flex flex-wrap  bg-slate-50 rounded-lg border  ${
            hidden ? 'w-full' : 'w-9/12 '
          }
       border-solid border-gray-300  content-between min-h-[600px] grow`}
        >
          <BaseRoutes routes={routes}></BaseRoutes>
        </div>
      </div>
    </div>
  );
}
export default MainLayout;
