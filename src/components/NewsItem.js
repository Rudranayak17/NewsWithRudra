import React from 'react'

const  NewsItem=(props)=>  {



 
    let{title,description,imageurl,newsUrl,author,date}=props
   
    
    return (
      <div className='my-3'>
       <div className="card" >
  <img src={!imageurl? "https://i.guim.co.uk/img/media/74e5479ef9b952fd272e065d2cfbee5c61fce6a9/0_90_2700_1620/master/2700.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=273e1ce614935e072e401cc92f50a50f":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unkown":author} on 3 {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl}  rel="noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem
