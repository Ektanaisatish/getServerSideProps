import Head from "next/head";
function blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">
        Env User {process.env.DB_USER} password {process.env.DB_PASSWORD}
        Env Analytics {process.env.NEXT_PUBLIC_ANALYTICS_ID}
      </h1>
    </>
  );
}
export default blog;

export async function getServerSideProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    `connecting to database with username ${user} and password ${password}`
  );
  return {
    props: {
      title: "Article title",
      description: "Article description",
    },
  };
}
