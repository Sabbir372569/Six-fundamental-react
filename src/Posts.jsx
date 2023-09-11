import { useEffect, useState } from "react"
import Post from "./post";
export default function Posts(){
    //declare a state
    const [posts,setPosts] = useState([]);        // useState is kind of hook

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])

    //state er jonno je nam baboher kora hobe sei namtai hook er jonno set kora hobe 
    //Example:Post=setPosts.
/**
 * if Data is kind of Array then we use default value is empty Array. 
 * if Data is kind of object then we use default value is empty Object.
 * if Data is kind of numeric value then we use default value is 0,1.
 * if Data is kind of boolen then we use default value is true,false.
 * if Data is kind of string then we use default value is empty string.
 */

    return(
        <div className="post">
            <h4>Post:{posts.length}</h4>  {/*array of object ke dekhaite chaile dynamic korte hobe */}
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}

/**
 * 1.create a state to store the data. 
 * 2.create use effect hook with no dependencies with empty array.
 * 3.use fetch to load data
 */