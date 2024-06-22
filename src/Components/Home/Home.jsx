import { useLoaderData } from "react-router-dom";

const Home = () => {
  const usersData = useLoaderData();
  console.log(usersData);

  return (
    <div>
      <h2 className="text-5xl text-center text-purple-500">Home section!!!</h2>
      <h2 className="text-5xl text-center text-purple-500">
        All data: {usersData.length}
      </h2>
    </div>
  );
};

export default Home;
