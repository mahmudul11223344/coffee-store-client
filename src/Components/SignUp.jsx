import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {

    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);


        const { email, password, ...userProfile } = Object.fromEntries(formData.entries());

        console.log(email, password, userProfile);

        createUser(email, password)
            .then(result => {
                console.log(result);

                // save in database
                fetch('http://localhost:3000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userProfile)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your Profile Has Created",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })

            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className="card bg-base-100 max-w-md mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className='text-5xl font-bold'>SignUp Now !</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Your Name" />

                    <label className="label">Address</label>
                    <input type="text" className="input" name='address' placeholder="Your Address" />

                    <label className="label">Phone</label>
                    <input type="text" className="input" name='phone' placeholder="Your Phone Number" />

                    <label className="label">Photo</label>
                    <input type="text" className="input" name='photo' placeholder="Your Photo URL" />

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>

                    <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
