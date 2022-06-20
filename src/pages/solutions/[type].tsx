import HomeLayout from "@/layouts/home-layout";
import {
  NextPage,
  //   GetStaticPropsContext,
  //   GetStaticPathsContext,
  //   GetStaticPathsResult,
  //   GetStaticPropsResult,
} from "next";
// import allSolutions from "data/solutions";
// import { useRouter } from "next/router";

const Solution: NextPage = () => {
  //   const router = useRouter();
  //   const info = allSolutions[router.query.type as any];

  return <HomeLayout key="solutions"></HomeLayout>;
};

export default Solution;

// export async function getStaticProps(
//   context: GetStaticPropsContext
// ): GetStaticPropsResult {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { ... } }
//       ],
//       fallback: true // false or 'blocking'
//     };
//   }
