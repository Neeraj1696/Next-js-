import Image from "next/image";

function Card({ img, title }) {
  return (
    <div className="card mt-10    ">
      <Image
        className="rounded-md overflow-scroll"
        width="350"
        height="350"
        alt=""
        src={img}
      />
      <h1 className="text-2xl font-mono mt-4 text-center">{title}</h1>
    </div>
  );
}

export default Card;
