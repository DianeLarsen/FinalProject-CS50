import Single from "../../components/single/Single"
import { singleBook } from "../../data"
import "./book.scss"

const Book = () => {

  //Fetch data and send to Single Component
  
  return (
    <div className="user">
      <Single {...singleBook}/>
    </div>
  )
}

export default Book