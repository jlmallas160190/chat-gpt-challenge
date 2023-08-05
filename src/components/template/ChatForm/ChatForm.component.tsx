import Button from "@/components/atoms/Button/Button.component";
import Typography from "@/components/atoms/Typography/Typography.component";
import PlusCircleIcon from "@/assets/icons/commons/icon-plus.svg"
const ChatFormTemplate = () => {
  return (
    <div className="p-4 flex flex-row ">
      <div className="p-4 flex flex-row justify-start w-[564px]"></div>
      <div className="flex flex-col justify-start bg-slate-50 rounded-lg border border-solid border-gray-300 w-[787px] h-[864px]">
        <div className="flex p-2 flex-row justify-start items-center h-[64px] w-full rounded-lg bg-white">
          <div className="flex justify-start w-full">
            <Typography
              className="text-base font-semibold"
              text="OdamaChat"
            ></Typography>
          </div>
          <div className="flex  justify-end w-full">
            <Button
              className="bg-aluxion-primary text-white flex flex-row p-2 h-[39px] items-center gap-2.5 rounded-md"
              text="Nueva Búsqueda"
              svgIcon={PlusCircleIcon}
              handleChange={() => {}}
            ></Button>
          </div>
        </div>
        <div className="flex flex-row justify-end  bg-white"></div>
      </div>
    </div>
  );
};
export default ChatFormTemplate;
