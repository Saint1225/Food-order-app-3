import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  const navigateHandling = () => {
    navigate("meals");
  };

  return (
    <div className="w-96 h-screen my-48 mx-auto flex flex-col text-center">
      <h1 className="font-bold w-full text-2xl text-orange-300 mb-24">
        Welcome to Food Ordering App
      </h1>
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
