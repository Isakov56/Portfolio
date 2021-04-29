import React from 'react'

export default function AboutMeInfo() {
    return (
        <div>
            <div className="aboutme-left d-flex p-0">
                <div className="d-flex flex-column align-self-center pl-2">
                    <h1 className="font-weight-bold m-0">Hello!</h1>
                    <div className="main-name p-1 d-flex justify-content-center">
                        <h1 className="m-0"> <span className="font-italic font-weight-normal">I'm</span> <sapn className="font-weight-bold">I am Khoji Isakov</sapn> </h1>
                    </div>
                    <h5 className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industr </h5>
                    <h6 className="font-weight-normal text-secondary greyish">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too Lorem Ipsum is simply dummy text of tha galley of </h6>
                    <h6 className="font-weight-normal my-1 text-secondary greyish">Lorem Ipsum is simply dummy text of tha galley of type and scrambled</h6>
                    <div className="d-flex align-items-center mt-3 ">
                        <div className="d-flex align-items-center explore-div">
                            <i class="fa fa-angle-down border border-secondary greyish rounded-circle mr-2 text-secondary d-flex align-items-center justify-content-center dropdown">
                            </i> 
                            <span className='explore mr-2 text-secondary greyish'>Explore me</span> 
                        </div>
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
