import { accountCircle } from "../../assets/icons/icon";

const ModalTemplate = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* NavBar */}
      <nav className="flex justify-between items-center py-2 col-span-12 border border-purple-600">
        {/* first div */}
        <div className="flex items-center gap-4">
          <h2 className=" text-5xl font-bold">CEC</h2>
          <div>
            <h2 className="text-2xl font-medium">Head Office,</h2>
            <span>Silpukhuri</span>
          </div>
        </div>
        {/* secon div */}
        <div className="flex items-center">
          <h2 className="text-lg font-medium">HO Admin</h2>
          <img className="w-10 ml-2" src={accountCircle} alt="User Icon" />
        </div>
      </nav>

      {/* left aside */}
      <aside className="border border-green-500 py-2 col-span-3 h-full">
        <h2>Left Aside</h2>
      </aside>
    </div>
  );
};

export default ModalTemplate;
