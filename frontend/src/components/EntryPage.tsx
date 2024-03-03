import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  const navigateHandling = () => {
    navigate("meals");
  };

  return (
    <div className="w-96 h-screen my-24 mx-auto flex flex-col text-center">
      <h1 className="font-bold w-full text-2xl text-orange-300 mb-12">
        Welcome to Food Ordering App
      </h1>
      <img
        src="../../public/logo.jpg"
        className="w-96 h-1/2 object-cover mb-12 rounded-xl"
      />
      <button
        className="font-bold w-full h-14 py-4 px-8 rounded-md text-blueGray-900 bg-slate-400 hover:bg-slate-200 active:bg-slate-600"
        onClick={navigateHandling}
      >
        Press to Proceed
      </button>
    </div>
  );
};

export default EntryPage;
