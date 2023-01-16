import Image from "next/image";

function SmallCard({ img, location, dis }) {
  return (
    <div>
      <div className="">
        <div className="flex hover:bg-slate-200 hover:scale-105 transition duration-200 rounded-lg cursor-pointer ">
          <Image
            className="rounded-lg w-auto h-auto"
            src={img}
            alt=""
            // layout="fill"
            width="100"
            height="10"
          />
          <div
            className="
          items-center mt-5"
          >
            <h1 className="font-semibold text-2xl ml-6 ">{location}</h1>
            <span className="ml-6">{dis}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
