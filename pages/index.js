import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function Home(props) {
  const { t } = useTranslation();
  const description = t("home:description");
  const linkName = t("home:more-examples");

  console.log(props);

  return (
    <>
      <p>{description}</p>
      <Link href="/more-examples">
        <a>{linkName}</a>
      </Link>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return { props: { getStaticPropsWorks: true, lang: locale } };
}
