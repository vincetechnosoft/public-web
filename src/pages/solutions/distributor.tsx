import { NextPage } from "next";
import SolutionData from "data/solutions";
import SolutionInfo from "@/components/solutionInfo";
import HomeLayout from "@/layouts/home-layout";
import ContactUs from "@/components/contact-us";
import Tutorial, { TutorialData } from "@/components/tutorial";
import ErrorPage from "@/components/error-page";

const PublicAvalableSolution: NextPage = () => {
  const id = "distributor";
  const info = Object.values(SolutionData).find((x) => x.id === id);
  if (!info) return <ErrorPage status={404} title="No Such App Available" />;
  return (
    <HomeLayout seoData={info}>
      <SolutionInfo {...info} />
      <ContactUs />
      <Tutorial data={tutorial} />
    </HomeLayout>
  );
};

export default PublicAvalableSolution;

const tutorial: TutorialData = [
  {
    id: "log-in",
    title: "Log In",
    description: "Click on the login button",
    steps: [
      'Enter your Phone Number, then click on "VERIFY PHONE NUMBER"',
      "Enter the OTP you get",
      "Wait while it loads",
    ],
    videoLink: "/distributor/login.mp4",
  },
  {
    id: "create-company",
    title: "Create a company",
    description: "Create a free company (active for next 21 days)",
    note: "Given company name is what buyers will be able to see, so make it as much unique as possible",
    steps: [
      'if you already have a company then first go to "Profile" page.',
      'Click on the "+" button at bottom-right to create a company.',
      "Enter name for your company",
      'Press "Create" to create the company',
    ],
    videoLink: "/distributor/create-company.mp4",
  },
  {
    id: "add-sellers",
    title: "Add Sellers",
    description:
      "Sellers are other company that sell you product (You buy form them)",
    steps: [
      "Click on the sellers's tab (in bottom)",
      'Click on "+" button to add a new Sellers',
      'Enter correct information and press "Create", this will create a new Seller.',
      "Add all of your sellers",
    ],
    videoLink: "/distributor/add-sellers.mp4",
  },
  {
    id: "add-buyers",
    title: "Add Buyers",
    description:
      "Buyers are people that buy products from you (Your Customers)",
    steps: [
      "Click on the buyer's tab (in bottom)",
      'Click on "+" button to add a new Buyer',
      'Enter correct information and press "Create", this will create a new Buyer.',
      "Add all of your buyers",
    ],
    videoLink: "/distributor/add-buyers.mp4",
  },
  {
    id: "add-products",
    title: "Add Products",
    description: "Products that you trade in you company",
    steps: [
      "Click on the product's tab",
      'Click on "+" button to add a new Product',
      "Name: Enter the name of product",
      "Ranking Order Val: Products will be listed in ascending ranking order.",
      "Pack Per Box: Enter Number of packet does each box have",
      "Seller Info > Default Rate: Enter default price you buy the product",
      'If you buy product at different rate, then click in "+" in right side of "Seller Info"',
      "Buyer Info > Rate: Enter price you sell the product",
      "Buyer Info > Default Discount: Enter your discount amount of your product (Sell Rate = Rate - Discount)",
      'If you discount amount is different for each buyer, then click in "+" in right side of "Buyer Info"',
      'Now click in top-right "✔" to create the Product',
      "Go Back, Add all of your products",
    ],
    videoLink: "/distributor/add-products.mp4",
  },
  {
    id: "buy-products",
    title: "Buy Products",
    description: "Buy Products from Sellers",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Sellers Tab, you will see list of sellers",
      "Tap on the sellers you want to buy stock from",
      'Tap on the top-left "⋮" button and select "Buy Stock" option',
      "Enter the amount of item you like to buy",
      'Now click in bottom-right "✔" to create the Entry',
      "Select the date you bought the stock at (this feature is helpful if you bought stock at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/buy-stock from sellers.mp4",
  },
  {
    id: "sell-products",
    title: "Sell Products",
    description: "Sell Products to Buyers",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Buyers Tab, you will see list of buyers",
      "Tap on the buyer you want to sell stock to",
      'Tap on the top-left "⋮" button and select "Sell Stock" option',
      "Enter the amount of item you like to sell",
      'Now click in bottom-right "✔" to create the Entry',
      "Select the date you sell the stock at (this feature is helpful if you sold stock at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/sell-stock to buyers.mp4",
  },
  {
    id: "take-payments",
    title: "Take Payment",
    description: "Take Payments from Buyers",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Buyers Tab, you will see list of buyers",
      "Tap on the buyer you want to take payment from",
      'Tap on the top-left "⋮" button and select "Take Payment" option',
      "Enter the amount that was payed to you",
      'Now click at "Take Payment" button to create the Entry',
      "Select the date you take payment at (this feature is helpful if you had taken payment at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/take-payment from buyers.mp4",
  },
  {
    id: "make-payments",
    title: "Make Payment",
    description: "Make Payments to Seller",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Sellers Tab, you will see list of sellers",
      "Tap on the sellers you want to make payment to",
      'Tap on the top-left "⋮" button and select "Make Payment" option',
      "Enter the amount that you payed to seller",
      'Now click at "Pay" button to create the Entry',
      "Select the date you made payment at (this feature is helpful if you had make payment at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/make-payment to seller.mp4",
  },
  {
    id: "take-boxes-back",
    title: "Take Back Boxes",
    description: "Take Back Boxes from Buyers",
    note: "This feature is helpful to Amul like distributor, who need to manage boxes too.",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Buyers Tab, you will see list of buyers",
      "Tap on the buyer you want to take payment from",
      'Tap on the top-left "⋮" button and select "Take Payment" option',
      "Enter the amount that was payed to you",
      'Now click at "Take Payment" button to create the Entry',
      "Select the date you take payment at (this feature is helpful if you had taken payment at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/take-boxes.mp4",
  },
  {
    id: "make-expenses-salary",
    title: "Make Expenses/Salary",
    description: "If you made any company related expenses or give salary",
    note: "this entry is included in Profit calculation",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Inventory Tab, you will see current money in company's wallet",
      'Tap on the top-left "⋮" button and select "Make Expenses" option if you make any expenses OR select "Give Salary" option if you are giving salary',
      "Entry the amount, and Enter a message to remember by",
      'Then click on "Apply" button to create the entry',
      "Select the date you made expenses/salary at (this feature is helpful if you had made expenses/salary at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/make expenses-give salary.mp4",
  },
  {
    id: "deposit-money",
    title: "Add Money to Wallet",
    description: "If you are giving money to company (from bank, or lone)",
    note: "this entry is not included in Profit calculation",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Inventory Tab, you will see current money in company's wallet",
      'Tap on the top-left "⋮" button and select "Deposit Money" option',
      "Entry the amount, and Enter a message to remember by",
      'Then click on "Apply" button to create the entry',
      "Select the date you deposit money in company at (this feature is helpful if you had deposited money in company at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/deposit-money.mp4",
  },
  {
    id: "withdraw-money",
    title: "Remove Money from Wallet",
    description: "If you are taking money from company (for personal expenses)",
    note: "this entry is not included in Profit calculation",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Inventory Tab, you will see current money in company's wallet",
      'Tap on the top-left "⋮" button and select "Withdraw Expenses" option',
      "Entry the amount, and Enter a message to remember by",
      'Then click on "Apply" button to create the entry',
      "Select the date you withdraw money in company at (this feature is helpful if you had withdraw money in company at 19th July, but forgot to make entry. Then at 21st July while making this entry select 19th July)",
    ],
    videoLink: "/distributor/withdraw-money.mp4",
  },
  {
    id: "see-current-entries",
    title: "See all Entries",
    description: "see all entries of this month",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Current Entries Tab, you will see list of all current entries of this month",
      "Click on any entry, you will see detailed information related to that entry",
    ],
    videoLink: "/distributor/see-entries.mp4",
  },
  {
    id: "filter-entries",
    title: "Filter out entries",
    description:
      "You often want to see a entry. But out can't go through each entry, then filter entries feature will help you",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Current Entries Tab, you will see list of all current entries of this month",
      'Click on top-right "≡" button to see filter options',
      "Select Specific Date: This will filter entries in given range of dates",
      "Type: This will filter on basis of entry type",
      "Creator: This will filter on basis of who created the entry",
      "Buyer: This will filter on basis of who is the buyer",
      "Seller: This will filter on basis of who is the seller",
      'Then press "Done", you will see filtered entries',
    ],
    videoLink: "/distributor/filter-entries.mp4",
  },
  {
    id: "delete-current-entry",
    title: "Delete a Entry",
    description: "delete a entry from this month",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Current Entries Tab, you will see list of all current entries of this month",
      "Select the entry you like to delete, you will see detailed information related to that entry",
      'Tap on the top-left "⋮" button and select "Delete" option',
      'Alert dialog will ask you if you really want to delete the entry, press "yes" if you want to delete',
      'A message will appear saying "Successfully deleted"',
    ],
    videoLink: "/distributor/delete-entry.mp4",
  },
  {
    id: "see-reports",
    title: "See Reports",
    description: "Profit calculation and pdf and other this happen here",
    note: "Every month all your entries will disappear, then they can only be accessed here",
    steps: [
      'Click on top-left "≡" button to see other pages',
      "Select Report Tab, you will list of different report type.",
      "Select the month you like to see report of",
      'You can also filter entries before seeing any of the report table from top-right "≡" button',
    ],
    videoLink: "/distributor/see-report.mp4",
  },
  {
    id: "profit-calculation",
    title: "Calculate Profit Made",
    description: "Calculate the amount of profit made",
    note: "This table is bases on bought, sold, expenses and salary entry. Other entries are not included",
    steps: [
      "Go to Reports page, Select Month and filter entries if needed",
      'Select "Profit Table", You will see your table',
      "If there is certain entry that you like to ignore then uncheck that entry row",
      "Click on Row to see detailed entry information",
    ],
  },
  {
    id: "purchase-table",
    title: "Purchase Table",
    description: 'purchase summery as "item" vs "seller"',
    note: "This table is bases on bought entry only.",
    steps: [
      "Go to Reports page, Select Month and filter entries if needed",
      'Select "Purchase Table", You will see your table',
      "Click on cell to see detailed information",
    ],
  },
  {
    id: "sells-table",
    title: "Selle's Table",
    description: 'sells summery as "item" vs "buyer"',
    note: "This table is bases on sold entry only.",
    steps: [
      "Go to Reports page, Select Month and filter entries if needed",
      'Select "Selle\'s Table", You will see your table',
      "Click on cell to see detailed information",
    ],
  },
];
