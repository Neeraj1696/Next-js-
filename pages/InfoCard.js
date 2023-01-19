import Image from "next/image";

function InfoCard({ title, description, price, img, location, star, total }) {
  return (
    <main className="">
      <div className="flex py-7 px-2 pr-4 border-b cursor-pointer mt-4 hover:opacity-80 hover:shadow-lg transition duration-150 ease-out ">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 ">
          <Image
            className="rounded-lg"
            src={img}
            layout="fill"
            objectFit="cover"
            alt=""
            priority="fill"
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <div className="flex ">
            <p className="text-lg">{location}</p>
          </div>

          <h1 className="text-xl font-bold mt-2">{title}</h1>
          <span className="text-xs mt-4">{description}</span>
          <div className="flex justify-between mt-12">
            <h2 className="">★{star}</h2>
            <div>
              <h2 className="font-bold">{total}</h2>
              <h2>{price}</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default InfoCard;
