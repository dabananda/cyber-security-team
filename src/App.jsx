import React, { useState } from "react";
import Banner from "./components/Banner";
import Experts from "./components/Experts";
import Cart from "./components/Cart";

const App = () => {
  const [team, setTeam] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const addToListHandler = (expert) => {
    const isExistingMember = team.find((member) => member.id === expert.id);
    if (!isExistingMember) {
      setTeam([...team, expert]);
      setTotalCost(totalCost + expert.salary);
    }
  };

  return (
    <div className="w-10/12 mx-auto p-4">
      <Banner />
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-6 mt-6">
        <div className="col-span-3">
          <Experts addToListHandler={addToListHandler} />
        </div>
        <div className="col-span-1">
          <div className="sticky top-6">
            <Cart teamList={team} totalCost={totalCost} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
