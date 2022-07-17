import React from 'react'

function Icons() {
  return (
   <section className='_icons grey'>
    <div className="container">
    {/* <h2 className='heading-2'>Services</h2> */}
        <div className="row justify-content-center">
            <div className="col-4 col-md-2 icon">
                <img src="/img/icons/1.png" alt="" />
                <h3>Gestion de Projet</h3>
            </div>
            <div className="col-4 col-md-2 icon">
                <img src="/img/icons/2.png" alt="" />
                <h3>Électricité</h3>
            </div>
            <div className="col-4 col-md-2 icon">
                <img src="/img/icons/4.png" alt="" />
                <h3>Structure</h3>
            </div>
            <div className="col-4 col-md-2 icon">
                <img src="/img/icons/3.png" alt="" />
                <h3>Thermique et Fluide</h3>
            </div>
            <div className="col-4 col-md-2 icon">
                <img src="/img/icons/5.png" alt="" />
                <h3>VRD</h3>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Icons