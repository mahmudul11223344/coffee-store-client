import React from 'react';
import { Link, Links } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, photo, name, price, chef } = coffee;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // start back-end deleting 
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the web
                            const remainingCoffees = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remainingCoffees)
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 border border-gray-200 shadow-sm">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex w-full items-center justify-around">
                <div>
                    <h2 className="">{name}</h2>
                    <p>Chef: {chef}</p>
                    <p>Price: {price}</p>
                </div>
                <div className="">
                    <div className="flex flex-col gap-3 ml-8">
                        <Link to={`/coffeeDetails/${_id}`}>
                            <button className="btn join-item">View</button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn join-item">Edit</button>
                        </Link>
                        <button className="btn join-item" onClick={() => handleDelete(_id)}>X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;