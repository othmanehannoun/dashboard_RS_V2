import React from 'react'
import { useSelector } from 'react-redux'



export default function Profile() {
  // const { user } = useSelector(state => state.auth);

  return (
    <div className="container p-5">
      <h1
          style={{
            fontSize: "2erm",
            fontFamily: "sans-serif",
            fontWeight: 600,
            color: "#0f2d4a",
            marginBottom: 40,
            // marginTop: '10%'
          }}>
            NXT2U
      </h1>
       {/* {
          user && 
          user !== null && */}
          <>
          
            <div className="bg-light">
              <div className="row" style={{marginBottom: 40, padding: 10}}>
                <div className="col-sm-1" >
                  <div className="tw-avatar tw-avatar--lg tw-avatar--initials tw-avatar--light np-text-title-body"
                      style={{
                        alignItems: 'center',
                        backgroundColor: "#f1f2f6",
                        height: 76,
                        maxHeight: "100%",
                        maxWidth: "100%",
                        width: "100%",
                        fontSize: 20,
                        fontWeight: 700,
                        fontFamily: 'Arial, Sans-Serif',
                        borderRadius: "50%",
                        color: "#37517e",
                        display: "flex",
                        justifyContent: "center",
                        textTransform: 'uppercase',
                        overflow: "hidden",
                        border: "2px solid #0f2d4a"
                        
                      }}
                  >
                    <div className="tw-avatar__content" style={{color: "#0f2d4a"}}>O</div>
                  </div>
                </div>
                <div className="col-sm-11"
                  style={{
                    display: 'flex',
                    alignItems: "center",
                    textTransform: 'uppercase',
                    fontSize: 18,
                    fontWeight: 600,
                  }}>
                  "user.username"
                </div>
              </div>  
            </div>

            <div className="bg-light overflow-auto p-5">
              <div className="row " style={{marginBottom: 20}}>
                  <div className="col-sm-12">  
                    <div className="row" style={{marginBottom: 20}}>
                        <div className="col-sm-6">
                          <dt className='text-secondary mb-2'>Nom & Prénom responsable</dt>
                          <dd>user.username</dd>
                        </div>
                        <div className="col-sm-6">
                          <dt className='text-secondary mb-2'>Email</dt>
                          <dd>"user.email"</dd>
                        </div>
                        {/* <div className="col-sm-6">
                          <dt className='text-secondary mb-2'>Type </dt>
                          <dd>QR CODE</dd>
                        </div> */}
                    </div>
                    
                    <div className="row" style={{marginBottom: 20}}>
                        <div className="col-sm-6">
                          <dt className='text-secondary mb-2'>Telephone</dt>
                          <dd>06 16 85 52 02</dd>
                        </div>
                      
                        <div className="col-sm-6">
                          <dt className='text-secondary mb-2'>Address</dt>
                          <dd>user.address.</dd>
                        </div>
                    </div>

                    <div className="row">
                      {/* <div className="col-sm-6">
                        <dt className='text-secondary mb-2'>Liste de prestations</dt>
                        <dd><button className="btn btn-primary" style={{backgroundColor: "#98896b", border: "none"}}>consulter</button></dd>
                      </div> */}
                    </div>
                  </div>
              </div>
            </div>
          </>
        {/* }  */}
     
    </div>
  )
}
