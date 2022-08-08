import React from 'react'
import { useState } from 'react';
import { storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";



function ProfilePhoto() {
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png");
    const [photo, setPhoto] = useState(null)
    const [loading, setLoading] = useState(false);



    async function upload(file, setLoading) {
        const fileRef = ref(storage, '/users/image.jpg');
      //'internal/profilePhoto/'+currentUser.uid
        setLoading(true);

        
        const snapshot = await uploadBytes(fileRef, file);
        const photoURL = await getDownloadURL(fileRef);
      
        
        setLoading(false);
        alert("Uploaded file!");
    }
    

    function handleChange(e) {
        e.preventDefault()
        if (e.target.files[0]) {
          setPhoto(e.target.files[0])
        }
      }

    function handleClick() {
       upload(photo, setLoading);
       console.log("I've been clicked")
    }

    return (
    <>
    <div>Profile Photo</div>
    <input type="file" accept="image/*" onChange={handleChange}/>
    <img src={photoURL}></img>
    <button onClick={handleClick}>Submit Photo</button>
    </>
  )
}

export default ProfilePhoto