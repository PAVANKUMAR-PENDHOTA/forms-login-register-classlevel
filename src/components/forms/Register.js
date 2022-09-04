import React,{useState} from 'react';

const Register = () =>{

    // const [name, setName] = useState("");
    // const [lname, setLname] = useState("");
    // const [email, setEmail] = useState("");
    // const [date, setDate] = useState("");
    // const [age, setAge] = useState("");
    // const [address, setAddress] = useState("");

    const [data , setData] = useState({
        name :"",
        lname:"",
        email:"",
        date:"",
        age:"",
        address:""
    });



    const {name,lname,email,date,age,address} = data;

    const onChange = e =>{
        setData({...data, [e.target.name]:e.target.value})
    }


    const submitHandler = e =>{
        e.preventDefault();
        console.log(data)
    }

    return (

        <div>
            
            <div style={{display:"inline-block", padding: "5px"}}>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="First Name " name="name" value={name} onChange={onChange} />
                <input type="text" placeholder="Last Name " name="lname" value={lname} onChange={onChange}/>
                <input type="email" placeholder="Enter Email" name="email" value={email} onChange={onChange}/>
                <input type="date" placeholder="DoB" name="date" value={date} onChange={onChange}/>
                <input type="number" placeholder="Enter Your Age " name="age" value={age} onChange={onChange}/>
                <input type="textarea" placeholder="Enter Your Address" name="address" value={address} onChange={onChange} />
                <input type="submit" value="Submit"/>
            </form>

               

            </div>

           <center>
           <h2>{name} {lname}</h2>

            <h2>{email}</h2>
            <h2>{age}</h2>
            <h2>{address}</h2>

           
           </center>

        </div>
    )
}
export default Register;