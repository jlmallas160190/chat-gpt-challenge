import BackIcon from '@/assets/icons/commons/back.svg';
import SettingsIcon from '@/assets/icons/commons/setting.svg';
import SideBarIcon from '@/assets/icons/commons/sidebar.svg';
import ChatForm from '@/pages/chat/ChatForm/ChatForm.page';
import BaseRoutes from '@/routes/Routes';
import { IRoute } from '@/routes/Routes.types';

const routes: IRoute[] = [{ path: '', element: <ChatForm />, order: 1 }];

function MainLayout() {
  return (
    <div className="flex flex-col">
      <div className=" flex h-[93px] bg-[#F97316] w-full items-center  shadow-base">
        <div className="flex w-full justify-start">
          <button className="flex m-2 justify-center items-center text-white text-base border-[1.5px] p-2.5 border-solid border-white w-[94px] h-[45px]">
            <img src={BackIcon} />
            Atrás
          </button>
          <button className="flex m-2 justify-center items-center border-[1.5px] p-2.5 border-solid border-white w-[45px] h-[45px]">
            <img src={SideBarIcon} />
          </button>
        </div>
        <div className="flex w-full justify-end">
          <button className="flex m-2 items-center justify-center border-[1.5px] border-solid border-white w-[45px] h-[45px]">
            <img src={SettingsIcon} />
          </button>
        </div>
      </div>
      <div id="body">
        <BaseRoutes routes={routes}></BaseRoutes>
      </div>
    </div>
  );
}
export default MainLayout;
