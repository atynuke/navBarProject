import { useState } from "react"


export default function SignUpForm() {

    const [SignUpForm, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        displayUrl: ""
    })
        const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        const files = e.target.files

        setSignUpForm((prevState) =>
        ({   ...prevState,
            [name]: name === "displayUrl" ? URL.createObjectURL(files[0]) : value,
        }));
    };
    const handleSubmit = (e) => {
        e.prevDefault();
        console.log(FormInput)
    }

    return (
        <>
            <div className=" FormDiv">

                <form onSubmit={"handleSubmit"}>

                    <h1> Registration Form</h1>
                    <div className="FormInput">
                        <label>First Name:</label>
                        <input name="firstName"
                            type="text"
                            style={{ textAlign: "center" }}
                            value={SignUpForm.firstName}
                            placeholder="Enter your First name"
                            onChange={handleChange} />
                    </div>
                    <br />
                    <div className="FormInput">
                        <label>Last Name:</label>
                        <input name="lastName"
                            type="text"
                            style={{ textAlign: "center" }}
                            value={SignUpForm.lastName}
                            placeholder="Enter your Last name"
                            onChange={handleChange} />
                    </div>
                    <br />
                    <div className="FormInput">
                        <label>Email Address:</label>
                        <input name="email"
                            type="text"
                            style={{ textAlign: "center" }}
                            value={SignUpForm.email}
                            placeholder="Enter your Email"
                            onChange={handleChange} />
                    </div>
                    <br />
                    <div className="FormInput">
                        <label>Password:</label>
                        <input name="********"
                            style={{ textAlign: "center" }}
                            type="text"
                            value={SignUpForm.password}
                            placeholder="***********"
                            onChange={handleChange} />
                    </div>
                    <br />

                    <div className="FormInput" >
                        <label>Choose new file:</label>
                        <select name=" displayUrl"
                            value={SignUpForm. displayUrl}
                            onChange={handleChange}
                            placeholder="displayimage"
                            id="displayUrl">
                            No new file choosen</select>
                    </div>

                    <br />
                    <button id="submit">Submit Form</button>

                </form>


            </div>
        </>
    )
}