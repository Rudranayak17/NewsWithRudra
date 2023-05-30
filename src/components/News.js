import React from 'react'
import { useEffect ,useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spiner from './Spiner'


import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=>  {
const[articles,setArticles]=useState([])
const[loading,setLoading]=useState([true])
const[page,setPage]=useState(1)
const[totalResults,setTotalResults]=useState(0)
// document.title = `${capitalizeFirstLetter(props.category)} - newsMonkey`

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  

  const  updateNews=async()=> {
    props.doneProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`

    setLoading(true)
    let data = await fetch(url)
    props.doneProgress(40)
    let parsedData = await data.json()
    props.doneProgress(70)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)


    props.doneProgress(100)
  }
  useEffect(()=>{
    updateNews()
    //eslint-disable-next-line
  },[])

  

 
 

  const fetchMoreData =async () => {
    setPage(page+1)
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&page=${page}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`
   setPage(page+1)
   let data = await fetch(url)
   let parsedData = await data.json()
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
   setLoading(true)

  
  
  };



    return (
      <div className='container '>
       
          <h1 className='text-center'>NewsMonkey - Top headlines on {capitalizeFirstLetter(props.category)} News</h1>
{loading&&<Spiner/>}

        
        <InfiniteScroll 
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spiner/>}
        >
        <div className='container'>

      
          <div className='row'>
            {articles.map((element) => {


              return <div className='col-md-4' key={element.url}>

                <NewsItem author={element.author} date={element.publishedAt} title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 82) : ''} imageurl={element.urlToImage} newsUrl={element.url} />
              </div>

            })}
</div>

          </div>
        </InfiniteScroll>
   

      </div>
    )
  }


News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: "general"
}
News.propsTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News
