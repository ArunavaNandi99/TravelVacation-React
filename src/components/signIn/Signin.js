import React from 'react'
import "./signin.css"

const SignIn = () => {
    return (
        <div>
            <div className='container'>
            <form action='' method=''>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
            
        </div>
    )
}

export default SignIn