"use client";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

// Define your private key and provider URL
const privateKey =
  "4a93c392fe64e3c14bceddbc4492094d5c582431d208a8142642029a387af166";
const providerUrl =
  "https://sepolia.infura.io/v3/3ed4ac3dd16441a3a5015092021785cf";

// Create a provider
const provider = new ethers.providers.JsonRpcProvider(providerUrl);

// Create a signer
const signer = new ethers.Wallet(privateKey, provider);

// Initialize the Thirdweb SDK with the signer
const sdk = new ThirdwebSDK(signer);

// Export the initialized sdk
export { sdk };
