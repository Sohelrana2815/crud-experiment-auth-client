import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const usersData = useLoaderData();
  // console.log(usersData);

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-5xl text-center text-purple-500">Home section!!!</h2>
      <h2 className="text-5xl text-center text-purple-500">
        All users data: {usersData.length}
      </h2>
      <h2 className="text-5xl text-center text-purple-500">
        All Coffees data: {coffees.length}
      </h2>
    </div>
  );
};

export default Home;
