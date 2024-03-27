"use client";
import { useState } from "react";
import {
  useContractWrite,
  useContract,
  Web3Button,
  useSigner,
} from "@thirdweb-dev/react";

const Page = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_TEMPLATE_SMART_CONTRACT
  );

  const signer = useSigner();

  console.log("Signer ", signer);
  const {
    mutateAsync,
    isLoading: loading,
    error,
  } = useContractWrite(contract, "createProject");
  const [isLoading, setIsLoading] = useState(false);
  // const createProjectF: any = useStateContext();
  const [form, setForm] = useState({
    owner: "",
    title: "",
    image: "",
    description: "",
    date: "",
  });

  const handleFormFieldChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // await createProjectF(form);
      console.log("Project created successfully:", form);
      mutateAsync({
        args: [
          `${form.owner}`,
          `${form.title}`,
          `${form.image}`,
          `${form.description}`,
          `${form.date}`,
        ],
      });
    } catch (error) {
      console.error("Error creating project:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-blue-500 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex justify-evenly top-0 h-[70%] w-[70%]  flex-col items-center   "
      >
        <div className="flex justify-center  items-center gap-5 flex-col ">
          <div className="flex gap-3 justify-center items-center">
            <h1>OWNER:</h1>
            <input
              id="owner"
              required
              type="text"
              name="owner"
              placeholder="Address"
              value={form.owner}
              onChange={handleFormFieldChange}
              className="shadow-slate-400"
            />
          </div>

          <div className="flex gap-3 justify-center items-center" >
            <h1>TITLE:</h1>
            <input
              id="title"
              required
              placeholder="Title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleFormFieldChange}
              className=""
            />
          </div>

          <div className="flex gap-3 justify-center items-center">
            <h1>IMAGE URL:</h1>
            <input
              id="image"
              placeholder="Image"
              type="text"
              name="image"
              value={form.image}
              onChange={handleFormFieldChange}
            />
          </div>

          <div className="flex gap-3 justify-center items-center">
            <h1>DESCRIPTION:</h1>
            <textarea
              id="description"
              className="w-[200px] h-[90px]"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleFormFieldChange}
            ></textarea>
          </div>

          <div className="flex gap-3 justify-center items-center">
            <h1>DATE:</h1>
            <input
              id="date"
              placeholder="Date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleFormFieldChange}
            />
          </div>

          <button
            type="submit"
            className="rounded bg-red-500 w-16 items-center flex justify-center text-white"
          >
            Submit
          </button>
        </div>
      </form>
      {isLoading && <div>Loading...</div>}
    </div>
    // </Web3Button>
  );
};

export default Page;
