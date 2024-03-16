"use client";
import { useState } from "react";
import { useContractWrite, useContract } from "@thirdweb-dev/react";

const Page = () => {
  const { contract } = useContract(
    "0x975DDFD9b913e4c5b9C354aceaEa12D7e24D587a"
  );
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
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex justify-evenly top-0 h-[70%] w-[60%] bg-blue-900 flex-col items-center  "
      >
        <div className="flex justify-between items-center gap-5 ">
          <label htmlFor="owner" className="font-bold text-white">
            Owner*
          </label>
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
        <div className="flex justify-between items-center gap-5 ">
          <label className="font-bold text-white" htmlFor="title">
            Title*
          </label>
          <input
            id="title"
            required
            type="text"
            name="title"
            value={form.title}
            onChange={handleFormFieldChange}
          />
        </div>
        <div className="flex justify-between items-center gap-5 ">
          <label htmlFor="image" className="font-bold text-white">
            Image URL
          </label>
          <input
            id="image"
            type="text"
            name="image"
            value={form.image}
            onChange={handleFormFieldChange}
          />
        </div>
        <div className="flex justify-between items-center gap-5 ">
          <label htmlFor="description" className="font-bold text-white">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleFormFieldChange}
          ></textarea>
        </div>
        <div className="flex justify-between items-center gap-5 ">
          <label className="font-bold  text-white" htmlFor="date">
            Date
          </label>
          <input
            id="date"
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
      </form>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default Page;
