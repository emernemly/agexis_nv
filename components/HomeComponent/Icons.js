import React from 'react'

function Icons() {
  return (
   <section className='_icons'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-2 icon">
                <img src="/img/icons/Maitrise-1.png" alt="" />
                <h3>Gestion de Projet</h3>
            </div>
            <div className="col-2 icon">
                <img src="/img/icons/energy.png" alt="" />
                <h3>Energie</h3>
            </div>
            <div className="col-2 icon">
                <img src="/img/icons/Structure-1.png" alt="" />
                <h3>Structure</h3>
            </div>
            <div className="col-2 icon">
                <img src="/img/icons/fluide.png" alt="" />
                <h3>Fluide</h3>
            </div>
            <div className="col-2 icon">
                <img src="/img/icons/vrd.png" alt="" />
                <h3>VRD</h3>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Icons