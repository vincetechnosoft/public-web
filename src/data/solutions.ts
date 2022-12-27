import { SeoLinksProps } from "@/components/seo";
import { SolutionInfo } from "@/components/solutionInfo";

export type data = SolutionInfo & SeoLinksProps;

const distributor: data = {
  id: "distributor",
  title: "Distributor's app",
  description: "Solution for distributors, a business to business solution.",
  capabilities: [
    // "Take orders",
    "Inventory management",
    "Wallet management",
    "Manage Due payments",
    "Manage Due Boxes (for Amul like distributors)",
    "Profit calculations",
    "Generate monthly Reports for each relation",
    // "Send Buyers there whatsapp report",
    // "Analytics",
  ],
  iconPath: "/solutions/distributor.png",
  posterPath: "/solutions/distributor_poster.png",
};

const distributorClient: data = {
  id: "distributor-client",
  title: "Distributor Client's app",
  description: "Distributor's Client (Buyer) Interface for tracking relations.",
  capabilities: [
    "Make orders",
    "Stock Bought",
    "Current Due Payment",
    "Current Due Boxes (for Amul like distributors)",
    "Return Boxes",
    "Generate Reports for each relation",
  ],
  iconPath: "/solutions/distributor-client.png",
  posterPath: "/solutions/distributor-client_poster.png",
};

const milkManagement: data = {
  id: "milk-management",
  title: "Milk Offline Management",
  description:
    "Complete Buy & Sell solution for milk (buy & sell) bussinesses.",
  capabilities: [
    "Buy, Sell & Create Reports",
    "Completely Offline",
    "PDF support on reports",
  ],
  iconPath: "/solutions/milk-management.png",
  posterPath: "/solutions/milk-management_poster.png",
};

export default {
  distributor,
  distributorClient,
  milkManagement,
};
