import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import chatbotimg from "../../../public/images/sales assistantimage.jpeg";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const user = await currentUser();
  if (user) redirect("/");

  return (
    <div className="h-screen bg-neutral flex w-full justify-center">
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-[800px] overflow-hidden relative flex-col pt-10 pl-24 gap-3">
        <h2 className="text-black md:text-4xl font-semibold">
          Welcome to <span className="underline text-accent">SeraAI!</span>
        </h2>
        <p className="font-bold text-lg text-secondary mb-3">
          {" "}
          SeraAI: simplifying interactions, gathering data, boosting sales. .
          <br />
        </p>

        <Image
          src={chatbotimg}
          alt="SeraAI"
          loading="eager"
          sizes="10"
          width={500}
          height={0}
        />
      </div>

      <div className="w-[500px] lg:W-full flex flex-col items-start p-6">
        {children}
      </div>
    </div>
  );
};

export default layout;
