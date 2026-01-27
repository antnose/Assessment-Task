const HomeCard = ({ card }) => {
  return (
    <div className="flex bg-[#0F172B] rounded-2xl ">
      <div className="flex justify-between p-4 w-full items-center">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-[#90A1B9]"> {card.title} </h1>
          <p> {card.count} </p>
          <p className="text-[#05DF72]"> {card.rate}%</p>
        </div>

        <div>
          <img
            className={`${card.bgColor} p-2 rounded-xl`}
            src={card.icon}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
