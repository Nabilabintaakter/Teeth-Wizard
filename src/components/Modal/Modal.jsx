
const Modal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* < button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}> open modal</> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit} className="card-body p-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">First Name :</span>
                            </label>
                            <input type="text" name="FName" placeholder="Enter your first name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Last Name :</span>
                            </label>
                            <input type="text" name="LName" placeholder="Enter your last name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Email :</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Phone :</span>
                            </label>
                            <input type="number" name="phone" placeholder="Enter your phone number" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Appointment date :</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-lg font-semibold">Address :</span>
                            </label>
                            <input type="text" name="address" placeholder="Enter your address" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-2">
                            <button type="submit" className="btn btn-primary">Make Appointment</button>
                        </div>
                    </form>
                    <div className="modal-action mt-2 block px-3">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn w-full">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;