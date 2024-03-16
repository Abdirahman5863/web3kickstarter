"use client";
import { ethers } from "ethers"; // Import ethers for creating a signer

const privateKey =
  "4a93c392fe64e3c14bceddbc4492094d5c582431d208a8142642029a387af166"; // Replace with your actual private key
const provider = new ethers.providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/b3e93dd3314ddba56637593cc3055d23"
); // Replace with your actual provider URL
export const signer = new ethers.Wallet(privateKey, provider);
