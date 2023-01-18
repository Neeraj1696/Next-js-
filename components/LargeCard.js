import Image from "next/image";

function LargeCard({ img, title, description }) {
  return (
    <section>
      <div className="large-card">
        <Image src={img} alt="err" />
      </div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
}

export default LargeCard;
