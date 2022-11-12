import React, { useState,useEffect } from "react";
// import ReactDOM from "react-dom";
import SideBar from './sidebar';
import axios from 'axios';



const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm(props) {
  const initContact = {
    id: null,
    userFirstname: "Coder",
    userLastname: "Byte",
    userPhone: "8885559999",
  };

  const [userState, setUserState] = useState(initContact);
  const [sample, setSample] = useState([]);

  const handleUserChange = (e) => {
    console.log("userState"+JSON.stringify(userState));
    setUserState({
      ...userState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userState.userFirstname || !userState.userLastname || !userState.userPhone) return;
    props.addUser(userState);
    setUserState(initContact);
    console.log(userState+"userstate")
 
  };

  return (
    <React.Fragment>
    {/* <div><SideBar/></div> */}
    <div>
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input style={style.form.inputs} className="userFirstname" name="userFirstname" type="text" value={userState.userFirstname} onChange={handleUserChange} />
      <br />
      <label>Last name:</label>
      <br />
      <input style={style.form.inputs} className="userLastname" name="userLastname" type="text" value={userState.userLastname} onChange={handleUserChange} />
      <br />
      <label>Phone:</label>
      <br />
      <input style={style.form.inputs} className="userPhone" name="userPhone" type="text" value={userState.userPhone} onChange={handleUserChange} />
      <br />
      <input style={style.form.submitBtn} className="submitButton" type="submit" value="Add User" />
    </form>
    </div>
    </React.Fragment>
  );
}

function InformationTable(props) {
  const sortedContacts = props.users.sort((a, b) => a.userLastname.localeCompare(b.userLastname));

  const display =
    sortedContacts.length > 0 ? (
      sortedContacts.map((user, index) => (
        <tr key={index}>
          <td style={style.tableCell}>{user.userFirstname}</td>
          <td style={style.tableCell}>{user.userLastname}</td>
          <td style={style.tableCell}>{user.userPhone}</td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={3}>&nbsp;</td>
      </tr>
    );

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>{display}</tbody>
    </table>
  );
}

 function PhoneBook(props) {
  const usersObj = [];

  const [users, setUsers] = useState(usersObj);
  const [man,setMan]=useState([]);
//   setMan([...man,""])
//   this.setState({a:"d"})

  const addUser = (user) => {
    console.log("user"+JSON.stringify(user))
    user.id = users.length + 1;
    console.log("user1=="+JSON.stringify(user))
    setUsers([...users, user]); 
    
    axios.post(`http://localhost:4001/users`,user)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  };

  return (
    <div>
    <div><SideBar/></div>
    <section style={{padding:'15%'}}>
      <PhoneBookForm addUser={addUser} />
      <InformationTable users={users} />
    </section>
    </div>
  );
}

export default PhoneBook;

// ReactDOM.render(<Application />, document.getElementById("root"));