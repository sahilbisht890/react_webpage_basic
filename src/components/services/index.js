
import React from 'react'

export default function Service()
{
    const images=[
      {path:'/img/services-1.jpg' ,name:'Nesicunt Mete'},
      {path:'/img/services-2.jpg' ,name:'Eosle Commadi'},
      {path:'/img/services-3.jpg' ,name:'Ledo Markt'},
      {path:'/img/services-4.jpg' ,name:'Asperious'},
      {path:'/img/services-5.jpg' ,name:'Velit'},
      {path:'/img/services-6.jpg' ,name:'Dolario'},


    ]
    return <>
      <div className='d-flex flex-column justify-content-center py-2'>
        <div className='heading mb-2'><h1>Our Services</h1></div>
        <div className='ourServices d-flex flex-row flex-wrap justify-content-center  w-100'>
            {
                images.map((Element,index)=>{
                    return <div key={index} className='d-flex flex-column gap-2 mb-3' style={{width:'30vw'}}>
                        <div><img src={Element.path}  width='80%' alt={'services'+{index}}/></div>
                         <h4 className='text-danger'>{Element.name}</h4>
                        </div>
                })
            }
        </div>
      </div>
    </>
}