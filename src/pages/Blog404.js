import {Link} from "react-router-dom"

export default function Blog404(){
  return(
    <div>
      <h1>Blog Sayfa bulunamadı</h1>
      <Link to="/blog">Bloga dön</Link>
    </div>
  )
}