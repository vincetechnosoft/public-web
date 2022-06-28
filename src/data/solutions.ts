import { SolutionInfo } from "@/components/solutionInfo";

export const distributor: SolutionInfo = {
  id: "distributor",
  title: "Distributor's app",
  discription: "Solution for distributors, a business to business solution.",
  capabalities: [
    // "Take orders",
    "Inventory management",
    "Wallet management",
    "Manage Due payments",
    "Manage Due Boxes (for Amul like distributors)",
    "Profit calculations",
    "Generate monthly Reports for each relation",
    // "Send Buyers there whatsapp report",
    // "Analitics",
  ],
  iconPath: "/solutions/distributor.png",
};

export const distributorClient: SolutionInfo = {
  id: "distributor_client",
  title: "Distributor Client's app",
  discription: "Distributor's Client (Buyer) Interface for tracking relations.",
  capabalities: [
    "Make orders",
    "Stock Bought",
    "Current Due Payment",
    "Current Due Boxes (for Amul like distributors)",
    "Return Boxes",
    "Generate Reports for each relation",
  ],
  iconPath: "/solutions/distributor-client.png",
};
