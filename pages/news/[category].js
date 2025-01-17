function articleListByCat({ articles, category }) {
  return(
    <>
      <h1>Showing articles <i>{category}</i></h1>
      {articles.map(article => {
        return(
        <div key={article.id}>
            <h2>
          {article.id}
          {article.title}</h2>
          <p>
            {article.description}
          </p>
          <hr/>
        </div>)
      })}
    </>
  );
}
export default articleListByCat;

export async function getServerSideProps(context) {
  const { params,req,res,query} = context;
  console.log(query)
  console.log("cookie",req.headers.cookie)
 res.setHeader('Set-Cookie', 'name=ekta;')  

  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category,
    },
  };
}
