import { useState } from "react"


export default function SignUpForm(props) {
    // let signUpForm = [ firstName,lastName, email, password, displayImage] = props

    const [SignUpForm, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        displayImage: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setSignUpForm((prevState) =>
        (
            {
                ...prevState,
                [name]: value
            }
        ))
    }


    return (
        <>
            <div className=" FormDiv">

                <form onSubmit={"onSubmit"}>

                    <h1> Registration Form</h1>
                    <div className="FormInput">
                        <label>First Name:</label>
                        <input name="firstName"
                            type="text"
                            value={SignUpForm.firstName}
                            placeholder="Enter your Firstname"
                            onChange={handleChange} />
                    </div>
<br />
                    <div className="FormInput">
                        <label>Last Name:</label> 
                        <input name="lastName:"
                            type="text"
                            value={SignUpForm.lastName}
                            placeholder="Enter your Lastname"
                            onChange={handleChange} />
                    </div>
<br />
                    <div className="FormInput">
                        <label>Email Address:</label> 
                        <input name="email"
                            type="text"
                            value={SignUpForm.email}
                            placeholder="Enter your Email"
                            onChange={handleChange} />
                    </div>
<br />
                    <div className="FormInput">
                        <label>Password:</label> 
                        <input name="********"
                            type="text"
                            value={SignUpForm.password}
                            placeholder="***********"
                            onChange={handleChange} />
                    </div>
<br />
                    <div className="FormInput" textalign="center">
                        <label>Display Image:</label> 
                        <select name="display image" id="displayimage"></select>
                    </div>

                    <br />
                    <button id="submit">Submit Form</button>

                </form>


            </div>
        </>
    )
}