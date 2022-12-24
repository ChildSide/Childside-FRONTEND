import Post from "../post/post";
import "./posts.scss";
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from "../../axios";


const Posts = () => {
    //TEMPORARY
    const { isLoading, error, data } = useQuery({
        queryKey: ["posts"],
        queryFn: () =>
            makeRequest.get("/posts").then((res) => {
                return res.data;
            })
    })
    // const posts = [
    //     {
    //         id: 1,
    //         name: "John Doe",
    //         userId: 1,
    //         profilePic:
    //             "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         desc: "We are now energizing this no to child labour campaign",
    //         img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     },
    //     {
    //         id: 2,
    //         name: "Pramod Kumar",
    //         userId: 2,
    //         profilePic:
    //             "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         desc: "I have found this child at sarojini nagar,Delhi",
    //     },
    // ];
    // console.log(data);
    return <div className="posts">
            {/* <div className="card-body d-flex justify-content-center">
                <button className="btn btn-success me-4">
                    <a href="https://pencil.gov.in/Complaints/add" target=" " style={{ textDecoration: "none" }} className="text-white">
                        +Add New Complaint
                    </a>
                </button>
                <button className="btn btn-warning ms-4">
                    <a href="https://pencil.gov.in/Complaints/track" target=" " style={{ textDecoration: "none" }} className="text-white">
                        Show Status
                    </a>
                </button>
            </div> */}
                {error ? "Something Went Wrong" : 
                    isLoading? "Loading": data.map(post => (
                        <Post post={post} key={post.id} />
                    ))
                }
    </div>;
};

export default Posts;