import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, title, price, _id } = service || {};
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <Image
            src={img}
            alt="Shoes"
            className="rounded-xl min-h-[204px]"
            height={120}
            width={430}
          />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <p className="text-[#FF3811] text-lg font-bold">Price: ${price}</p>

          <Link href={`/services/${_id}`}>
            <button className="btn bg-[#FF3811]">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
