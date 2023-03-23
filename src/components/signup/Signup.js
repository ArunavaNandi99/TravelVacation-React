import React from 'react'
import "./signup.css"

const Signup = () => {
    return (
        <div>
            <div className='container'>
                <form action='' method=''>
                    <div className="mb-3">
                        <label for="Fname" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="fname" required />
                    </div>
                    <div className="mb-3">
                        <label for="Lname" class="form-label">Last Name</label>
                        <input type="Lname" class="form-control" id="lname" required />
                    </div>
                    <div className="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" required />
                    </div>
                    <div className="mb-3">
                        <label for="confPass" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confPass" required />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Signup