// @ts-nocheck
import { useContext, createContext, ReactNode } from "react";
// import useContextProvider from "react"
import { useAddress, useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from "ethers";
interface ProjectForm {
  owner: string;
  title: string;
  image: string;
  description: string;
  date: string;
}
interface Props {
  children?: ReactNode;
  // any props that come into the component
}

// export type projectContext = [
//   ProjectForm[],
//   React.Dispatch<React.SetStateAction<ProjectForm[]>>
// ];

const StateContext = createContext();
createContext([[], null]);

export const StateContextProvider = ({ children, ...props }: Props) => {
  const { contract } = useContract(
    "0x975DDFD9b913e4c5b9C354aceaEa12D7e24D587a"
  );
  const { mutateAsync: createProject } = useContractWrite(
    contract,
    "createProject"
  );
  const address = useAddress();
  //   const connect = useMetamask();

  const publishProject = async (form: ProjectForm) => {
    try {
      const data = await createProject({
        args: [
          form.owner, //owner
          form.title, //title
          form.image, //image
          form.description, //description
          form.date, //date
        ],
      });
      console.log("contract call success ", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };
  return (
    <StateContext.Provider
      value={{ address, contract, createProject: publishProject }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
