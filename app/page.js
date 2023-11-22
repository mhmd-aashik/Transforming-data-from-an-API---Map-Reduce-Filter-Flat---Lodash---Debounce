import Image from "next/image";
import Response from "../Response.json";

export default function Home() {
  // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const total = numbers.reduce((total, number) => total + number, 0);

  // const data = Response;
  // const total = data.reduce((total, item) => total + item.price_data.price, 0);
  // console.log(total);

  console.log(
    Response.filter((item) => item.price_data.price > 100)
  );
  return (
    <main>
      {/* {Response.map((item) => console.log(item))} */}
      {/* {Response.filter((item) => console.log(item.price_data.price > 500))} */}
    </main>
  );
}
