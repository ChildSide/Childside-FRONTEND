import "./complaint.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
const Complaint = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const { currentUser } = useContext(AuthContext);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ((newComplaint) => {
      return makeRequest.post("/complaint", newComplaint);
    }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["complaint"]})
    },
  })

  const handleClick =async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ name,desc, img: imgUrl });
    console.log(desc);
    setDesc("");  
    setFile(null);
  };

  return (
    <div className="share">
      <div className="container">
            <div>

            <h1>Child Labour/Adolescent Child Details</h1>
            </div>
        <div className="top">
          <div className="left">
            {/* <img src={"/upload/" + currentUser.profilePic} alt="" /> */}
            <img src={currentUser.profilePic} alt="" /> 
            <input type="text" placeholder="Enter Name" />
            <input
              type="text"
              placeholder={`Something about the situation ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              />
            <label htmlFor="file">
              <div className="item">
                {/* <img src={Image} alt="" /> */}
                <span>Add Image</span>
              </div>
            </label>
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
              )}
          </div>
        </div>
              <h1>Address where child found</h1>
        <hr />
        <div className="bottom">
          <div className="left">
              <input type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}
              value={name}/>
              <input type="text" placeholder="Village/Mohalla" />
              <input type="text" placeholder="Ward/Panchayat" />
              <input type="text" placeholder="Taluk/Block" />
              <input type="text" placeholder="Tehsil/Subdistrict" />
              <input type="text" placeholder="Landmark" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="District" />
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            {/* <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div> */}
          </div>
          <div className="right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaint;