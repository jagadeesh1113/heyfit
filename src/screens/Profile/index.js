import React, { useEffect, useState } from "react";
import { firebaseAuth, firestoreDb } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

import "./profile.css";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    firebaseAuth.onAuthStateChanged(async (user) => {
      if (user?.uid) {
        const docRef = doc(firestoreDb, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("User is not logged in");
        }
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await firebaseAuth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div className="profile-page">
      <div className="profile-container">
        {userDetails ? (
          <>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={userDetails.photo}
                width={"40%"}
                style={{ borderRadius: "50%" }}
              />
            </div>
            <h3>Welcome {userDetails.firstName} 🙏🙏</h3>
            <div>
              <p>Email: {userDetails.email}</p>
              <p>First Name: {userDetails.firstName}</p>
              {/* <p>Last Name: {userDetails.lastName}</p> */}
            </div>
            <button className="btn btn-primary" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
export default Profile;
