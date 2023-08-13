import React from 'react'

function ErrorPage() {
  return (
    <div className="page-wrap d-flex flex-row align-items-center mt-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 d-flex justify-content-center">
                
                </div>
                <div className="col-md-12 text-center">
                    <span className="display-1 d-block" 
                        style={{
                            fontSize: '190px',
                            fontWeight: 'bold',
                            textShadow: '4px 4px 0px #a43534',
                        }}  
                    >
                        404
                    </span>

                    <div className="mb-2 lead" style={{
                        fontFamily: 'Oswald',
                        fontSize: 40,
                        fontWeight: 700,
                        margin: 0,
                        textTransform: 'uppercase',
                        letterSpacing: '1.6px'

                    }}>PAGE NON TROUVÉE</div>
                    <p style={{
                        fontFamily: 'Lato',
                        color: '#000',
                        fontWeight: 400,
                        marginTop: '20px',
                        marginBottom: '25px',
                    }}>La page que vous recherchez a peut-être été supprimée, <br/> son nom a changé ou est temporairement indisponible.</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ErrorPage