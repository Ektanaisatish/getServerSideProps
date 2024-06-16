function NewsArticlesList({article}){
    return (
    <> <h1>Listing News </h1>
    {
        article.map(article=>{
return(
    <div key={article.id}>
        <h1>{article.id}{article.title}|{article.description}</h1>
    </div>
)
        })
    }
    </>)
}
export default NewsArticlesList

export async function getServerSideProps(){
    const response = await fetch('http://localhost:4000/news')
    const data = await response.json()
    return {
        props:{
            article:data
        }
    }
}