// import { useEffect } from "react";
// import {PostService,UserService} from "./services"

import { useRoutes,generatePath } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils";

function App() {
  // useEffect(()=>{
  //   PostService.getPosts().then(res=>console.log(res))
  //   PostService.getPostDetails(2).then(res=>console.log(res))
  //   PostService.newPost({
  //     userId:3,
  //     title:"test",
  //     body:"test"
  //   }).then(res=>console.log(res))

  //   UserService.getUsers()
  // })

  // console.log(generatePath("post/:id/:url",{
  //   id:2,
  //   url:"test-url"
  // }));


  return useRoutes(routes)
}

export default App;
