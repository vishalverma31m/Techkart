import { useContext } from "react";

import { myContext } from "../Context/Context";

function Profile() {

    const { userData } = useContext(myContext);

    return (
        <>
            <div className="container">
                <div className="col-md-12 mx-auto col-lg-12 mb-2">
                    <form className="p-2 px-md-5" noValidate >

                        <div className="row g-3 my-4">
                            <span className="fs-5 fw-medium mb-1 mt-0">Personal Information</span>
                            <div className="col-md-4">

                                <input type="text" className="form-control form-control-lg rounded-0 text-secondary" id="firstName" value={userData?.firstname} disabled />

                            </div>
                            <div className="col-md-4">

                                <input type="text" className="form-control form-control-lg rounded-0 text-secondary" id="lastName" value={userData?.lastname} disabled />

                            </div>
                        </div>
                        <div className="row g-2 my-4">
                            <span>Your Gender</span>
                            <div className="col-md-4">

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="male" value="Male" disabled />
                                    <label class="form-check-label" for="Male">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="female" value="Female" disabled />
                                    <label class="form-check-label" for="Female">Female</label>
                                </div>

                            </div>
                        </div>
                        <div className="row g-3 my-4">
                            <span className="fs-5 fw-medium mb-1">Email Address</span>
                            <div className="col-md-4">

                                <input type="email" className="form-control form-control-lg rounded-0 text-secondary" id="email" value={userData?.email} disabled />

                            </div>
                        </div>
                        <div className="row g-3 my-4">
                            <span className="fs-5 fw-medium mb-1">Mobile Number</span>
                            <div className="col-md-4">

                                <input type="text" className="form-control form-control-lg rounded-0 text-secondary" id="phone" disabled />

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Profile;