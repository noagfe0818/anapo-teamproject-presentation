import Image from "next/image";
import StartOption from "@/StartOption";

const Page = () => {
  return (
    <section className="h-screen container mx-auto">
      <Image src={"/anapo_main.jpg"} alt={""} fill />
      <StartOption />
    </section>
  );
};

export default Page;
