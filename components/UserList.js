import { React, useState, useEffect } from "react";
import EditUser from "./EditUser";
import User from "./User";

//pass user as a prop user
const UserList = ({ user }) => {
  const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  //set state when update user
  const [userId, setUserId] = useState(null);
  //set state on whatever response you are getting back ex update user
  const [responseUser, setResponseUser] = useState(null);

  //when this component is callesd we will be able to get the data
  //This particular hook will be called
  //whatever data we get here we have to pass it to user component
  //whenever there is an update in user or responseUser it will fetch the data and it will update the data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
    //whenever there is an update in the user, that particular field will be updated
    //use the user prop as a dependency to load the data instantly
  }, [user, responseUser]);


  const deleteUser = (e, id) => {
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
        //it gets deleted from backend and now delete it from front end (filter out the data)
      if (users) {
        setUsers((prevElement) => {
          return prevElement.filter((user) => user.id !== id);
        });
      }
    });
  };

  const editUser = (e, id) => {
    e.preventDefault();
    setUserId(id);
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  First Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Last Name
                </th>
                <th className="text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  EmailId
                </th>
                <th className="text-right font-medium text-gray-500 uppercase tracking-wide py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            
            {!loading && (// In User component we have to pass the user object using the props
              <tbody className="bg-white">
                {users?.map((user) => (
                  <User
                    user={user}
                    key={user.id} //every component should have a key
                    deleteUser={deleteUser}
                    editUser={editUser}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>

      <EditUser 
            //setResponseUser will update the state in the parent component
      userId={userId} 
      setResponseUser={setResponseUser} 
      />      
    </>
  );
};

export default UserList;
 