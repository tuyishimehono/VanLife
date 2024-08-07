import { Link } from "react-router-dom";
import homeBgImg from "/images/homebg.png";
export default function Home() {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover relative min-h-[350px] text-white p-[45px_23px]"
      style={{ backgroundImage: `url(${homeBgImg})` }}
    >
      <div className="absolute inset-0 bg-black/46"></div>
      <h1 className="font-bold text-4xl">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="text-xl pb-10">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link
        className="text-center bg-[#FF8C38] w-[100%] py-3 font-bold rounded-md"
        to="vans"
      >
        Find your van
      </Link>
    </div>
  );
}
