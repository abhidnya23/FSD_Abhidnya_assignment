import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert("Registration successful!");
    }

    return (
        <div className="app">

            <div className="form-card">

                <div className="form-header">
                    <div className="icon">📝</div>
                    <h1>Student Registration</h1>
                    <p>Enter your details to register</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="input-group">
                        <label>Full Name</label>

                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div className="input-group">
                        <label>Email Address</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="input-group">
                        <label>Course</label>

                        <select
                            value={course}
                            onChange={(event) => setCourse(event.target.value)}
                        >
                            <option value="">Select your course</option>
                            <option value="MCA">MCA</option>
                            <option value="MSc Computer Science">
                                MSc Computer Science
                            </option>
                            <option value="MSc Data Science">
                                MSc Data Science
                            </option>
                        </select>
                    </div>

                    <button type="submit">
                        Register Now
                    </button>

                </form>

                <div className="preview">

                    <h2>Live Preview</h2>

                    <div className="preview-item">
                        <span>Name</span>
                        <strong>
                            {name || "Not entered"}
                        </strong>
                    </div>

                    <div className="preview-item">
                        <span>Email</span>
                        <strong>
                            {email || "Not entered"}
                        </strong>
                    </div>

                    <div className="preview-item">
                        <span>Course</span>
                        <strong>
                            {course || "Not selected"}
                        </strong>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default App;