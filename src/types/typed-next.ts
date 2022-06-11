import { AppProps } from "next/app";
import type { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type EnhancedApp = AppProps & {
  Component: NextPageWithLayout;
};
