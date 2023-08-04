import Single from "../../components/single/Single"
import { singleProject } from "../../data"
import "./project.scss"

const Project = () => {

  //Fetch data and send to Single Component
  return (
    <div className="product">
       <Single {...singleProject}/>
    </div>
  )
}

export default Project