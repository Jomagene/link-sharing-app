// app/page.tsx
import Header from "@/components/Header";
import Main from "@/components/Main";
import { clientConfig, serverConfig } from "@/config";
import { getTokens } from "next-firebase-auth-edge";
import { cookies } from "next/headers";
import RedirectToLogin from "./redirect-to-login";
import Content from "@/components/Content";

export default async function Home() {
  const tokens = await getTokens(cookies(), {
    apiKey: clientConfig.apiKey,
    cookieName: serverConfig.cookieName,
    cookieSignatureKeys: serverConfig.cookieSignatureKeys,
    serviceAccount: serverConfig.serviceAccount,
  });

  if (!tokens) {
    return <RedirectToLogin />;
  }

  return (
    <>
      <Content />
    </>
  );
}
