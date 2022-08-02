import {SeoLinksProps} from "@/components/seo";
import {SolutionInfo} from "@/components/solutionInfo";

type data = SolutionInfo & SeoLinksProps;

export const distributor: data = {
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

export const distributorClient: data = {
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
