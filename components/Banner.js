import Image from "next/legacy/image";

function Banner() {
  return (
    <div className="banner relative w-full h-[500px]   ">
      <Image
        className="object-cover -z-30  "
        src="https://images.unsplash.com/photo-1672803949246-85b33371c7ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        layout="fill"
        // priority="hidden"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="font-mono text-3xl text-white">
          Not sure where to Go....???
        </p>
        <button className="text-blue-400 bg-white px-6 py-2 mt-6 rounded-full  text-2xl active:scale-90 transition duration-75 -z-10">
          Just Go Know....
        </button>
      </div>
    </div>
  );
}

export default Banner;
