import fs from "fs";
import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation();
  const description = t("home:description");
  const linkName = t("home:more-examples");

  return (
    <>
      Hi there!
      <p>{description}</p>
      <Link href="/more-examples">
        <a>{linkName}</a>
      </Link>
    </>
  );
}

// @ts-ignore
export async function getStaticProps({ locale }) {
  // fs.stat("/a.tsx", () => {});
  return { props: { getStaticPropsWorks: true, lang: locale } };
}
