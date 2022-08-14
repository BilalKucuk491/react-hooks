import { Helmet } from "react-helmet"
import {useParams} from "react-router-dom"

export default function Post(){

  const {url} = useParams()

  return(
    <div>
      <Helmet>
        <title>{url}</title>
      </Helmet>
      post page {url}
    </div>
  )
}