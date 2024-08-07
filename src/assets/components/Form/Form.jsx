import React, { useState } from "react";
import "./form.css";
export default function Form() {
 const [fname, setFname]= useState('');
 const [lname, setLname] = useState('');
 const [email, setEmail] = useState('');
  const [password, setPass] = useState('')
 

  const handleSubmit = (e) => {
    e.preventDefault();
    setFname('');
    setLname('');
    setEmail('');
    setPass('');
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">First name: </label>
          <input type="text" id="name" name="name"  value={fname} onChange={(e)=>setFname(e.target.value)}required />
        </div>
        <div>
          <label>Last name: </label>
          <input type="text" id="lname" name="lname"  value={lname} onChange={(e)=>setLname(e.target.value)}required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" id="email" name="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e)=>setPass(e.target.value)}/>
        {/* <div>
          <label>Gender:</label>
          <div>
            <label>
              <input type="radio" name="gender" value="male" required />
              Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" required />
              Female
            </label>
          </div>
        </div> */}
        {`Your name is: ${fname} ${lname}`}<br /> <br />
        {`Your email is: ${email}`}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
