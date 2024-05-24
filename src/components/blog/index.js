

export default function Blog()
{
  const b1= '/img/blog-1.jpg'
const b2='/img/blog-2.jpg'
const b3='/img/blog-3.jpg'
    const blogImages=[b1,b2,b3];
    return<>
      <section className="d-flex flex-column justify-content-center py-3"> 
      <div className="heading">
        <h1>Our Blog</h1>
        <p className='fs-4 text-secondary'>Recent posts form our Blog</p>
      </div>

      <div className='blogCards d-flex gap-5 justify-content-center mb-3'>
        {
           blogImages.map((Element,index)=>{
            return <>
             <div className='cardContainer d-flex flex-column' key={index} style={{width:'25vw'}}>
              <div className='imageContainer'><img src={Element} alt="blogImage" width='100%' /></div>
              <h4>Blogs</h4>
              <p1 style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare justo ac felis condimentum, vitae tincidunt mi sollicitudin. Nullam at ligula in justo commodo malesuada.</p1>
             </div>
            </>
           })

        }
      </div>
      </section>
    </>
}