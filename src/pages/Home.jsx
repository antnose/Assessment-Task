import HomeCard from "../components/HomeCard/HomeCard";

import callIcon from "../assets/homeCard/cardCall.png";
import AiHandledIcon from "../assets/homeCard/second.png";
import Transfer from "../assets/homeCard/arrow.png";
import Cal from "../assets/homeCard/cal.png";
import Missed from "../assets/homeCard/missed.png";
import Clock from "../assets/homeCard/clock.png";
import HomeChart from "../assets/HomeChart/HomeChart";
import DashboardBottom from "../components/DashboardBottom/DashboardBottom";

const Home = () => {
  const cardsData = [
    {
      title: "Total Calls Today",
      count: 127,
      rate: 12,
      bgColor: "bg-[#00B8DB]",
      icon: callIcon,
    },
    {
      title: "AI-Handled Calls",
      count: 98,
      rate: 77,
      bgColor: "bg-[linear-gradient(135deg,#C04BF2_0%,#F252A0_100%)]",
      icon: AiHandledIcon,
    },
    {
      title: "Warm Transfer",
      count: 127,
      rate: 12,
      bgColor: "bg-[#FF6500]",
      icon: Transfer,
    },

    {
      title: "Appointments Booked",
      count: 127,
      rate: 12,
      bgColor: "bg-[#08CB00]",
      icon: Cal,
    },

    {
      title: "Missed/Failed Calls",
      count: 127,
      rate: 12,
      bgColor: "bg-[#DC0000]",
      icon: Missed,
    },

    {
      title: "Avg Call Duration",
      count: 127,
      rate: 12,
      bgColor: "bg-[#001BB7]",
      icon: Clock,
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {cardsData.map((card) => (
          <HomeCard key={card.title} card={card} />
        ))}
      </div>

      <div className="mt-10">
        <HomeChart />
      </div>

      <DashboardBottom />
    </div>
  );
};

export default Home;
