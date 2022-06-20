export const distributor = {
  id: "distributor",
  title: "Distributor's app",
  discription: "Solution for distributors, a business to business solution.",
  capabalities: [
    "Take orders",
    "Inventory management",
    "Wallet management",
    "Manage Due payments",
    "Manage Due Boxes (for Amul like distributors)",
    "Profit calculations",
    "Generate monthly Reports for each relation",
    "Send Buyers there whatsapp report",
    "Analitics",
    "and much more...",
  ],
  iconPath: "/solutions/distributor.png",
};

export const distributorClient = {
  id: "distributor-client",
  title: "Client-Side app",
  discription: "Buyer Interface for distributors.",
  capabalities: [
    "Make orders",
    "Stock Bought",
    "Current Due Payment",
    "Current Due Boxes (for Amul like distributors)",
    "Return Boxes",
    "Generate monthly Reports for each relation",
  ],
  iconPath: "/solutions/distributor-client.png",
};

export default {
  [distributor.id]: distributor,
  [distributorClient.id]: distributorClient,
};
