import './Post.css'
export default function Post({post}){
    const{title, body, id, userId} = post;
    return (
        <div className='post'> 
            <p><small>User Id : {userId}</small></p>
            <p><small>Post Id : {id}</small></p>
            <h4>Title: {title}</h4>
            <p>{body}</p>      
        </div>
    )
}