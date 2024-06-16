import Footer from "../components/Footer"
import Header from "../components/Header"

function About() {
  return (
    <>
    {/* <div>
    <Head>
        <title>About next</title>
        <Meta description='this is next' content='free tutorial '/>
    </Head></div> */}
    <div className="content">
        About
        </div>
       </> 
  )
}
export default About

About.getLayout = function PageLayout(page){
    return(
  <>
  <Header />
    {page}
<Footer />
  </>
    )
      }