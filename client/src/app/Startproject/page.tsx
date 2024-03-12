"use client";
// @ts-nocheck
// import { useStateContext } from "@/context";
import { useState } from "react";
import { useContractWrite, useContract, Web3Button } from "@thirdweb-dev/react";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

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
    <ThirdwebProvider
      activeChain={Sepolia}
      clientId="b3e93dd3314ddba56637593cc3055d23"
      supportedWallets={[metamaskWallet()]} // You can get a client id from dashboard settings
    >
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="owner">Owner*</label>
            <input
              id="owner"
              required
              type="text"
              name="owner"
              value={form.owner}
              onChange={handleFormFieldChange}
            />
          </div>
          <div>
            <label htmlFor="title">Title*</label>
            <input
              id="title"
              required
              type="text"
              name="title"
              value={form.title}
              onChange={handleFormFieldChange}
            />
          </div>
          <div>
            <label htmlFor="image">Image URL</label>
            <input
              id="image"
              type="text"
              name="image"
              value={form.image}
              onChange={handleFormFieldChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleFormFieldChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              name="date"
              value={form.date}
              onChange={handleFormFieldChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {isLoading && <div>Loading...</div>}
      </div>
    </ThirdwebProvider>
  );
};

export default Page;
