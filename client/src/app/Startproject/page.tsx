"use client";
import { useState } from "react";
import {
  useContractWrite,
  useContract,
  Web3Button,
  useSigner,
} from "@thirdweb-dev/react";
import Link from "next/link";

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
    <div className="mt-8 mb-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="flex justify-center items-center mb-3 cursor-pointer"><h1 className="font-bold text-gray-600">Create Project</h1></div>
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
      <form
        onSubmit={handleSubmit}
        className="mb-0 space-y-6" method="post"
        action="#"
      >
        <div className="flex gap-5 flex-col">
          <div className="flex flex-col gap-5">
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Owner address</label>
            <input
              id="owner"
              required
              type="text"
              name="owner"
              placeholder="Address"
              value={form.owner}
              onChange={handleFormFieldChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-3 flex-col" >
            <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Project title</label>
            <input
              id="title"
              required
              placeholder="Title"
              type="text"
              name="title"
              value={form.title}
              onChange={handleFormFieldChange}
       className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-3 flex-col">
             <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Project Image url</label>
            <input
              id="image"
              placeholder="Image"
              type="text"
              name="image"
              value={form.image}
              onChange={handleFormFieldChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-3 flex-col">
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Project description</label>
        
            <textarea
              id="description"
              placeholder="Description"
              name="description"
              value={form.description}
              onChange={handleFormFieldChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="flex gap-3 flex-col">
          <label htmlFor="owner" className="block text-sm font-medium text-gray-700 " >Submit Date</label>
            <input
              id="date"
              placeholder="Date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleFormFieldChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500"
            />
          </div>
<div className="flex justify-center items-center mb-2">
<button
            className="rounded-sm  bg-blue-500 px-6 py-2 block text-white"
          >
            Submit
          </button>
</div>
<div className="flex justify-center items-center mb-2">
  <Link href="/" className="font-medium text-gray-500 hover:text-blue-400">View Your Project →</Link>
</div>
        
        </div>
      </form>

      </div>
     
      {isLoading && <div>Loading...</div>}
    </div>
    // </Web3Button>
  );
};

export default Page;
