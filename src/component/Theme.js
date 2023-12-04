import React,{useState} from 'react'

export default function (props) {
    let myStyle={
        border:"1px solid black",
        width:"300 px"
        
    }

    
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 my-3' >

                        <div className="card" style={myStyle}>
                            <img className="card-img-top" src=" https://mir-s3-cdn-cf.behance.net/projects/404/35048c179693625.Y3JvcCwxNjY2NywxMzAzNiwwLDE4MTU.png"  />
                            <div className="card-body">
                                <h4 className="card-title">T shirt </h4>
                                <p className="card-text">Some example text some example text. T shirt is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 my-3'>

                        <div className="card" style={myStyle} >
                            <img className="card-img-top" src=" https://mir-s3-cdn-cf.behance.net/projects/404/35048c179693625.Y3JvcCwxNjY2NywxMzAzNiwwLDE4MTU.png"/>
                            <div className="card-body">
                                <h4 className="  card-title  " >T shirt</h4>
                                <p className="card-text">Some example text some example text. T shirt is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-4 my-3'>

                        <div className="card" style={myStyle}>
                            <img className="card-img-top" src=" https://mir-s3-cdn-cf.behance.net/projects/404/35048c179693625.Y3JvcCwxNjY2NywxMzAzNiwwLDE4MTU.png"  />
                            <div className="card-body">
                                <h4 className="card-title">T shirt</h4>
                                <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                <a href="#" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-success " > click me to change the Theme</button>

        </div>
    )
}
