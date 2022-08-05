import Spinner from "../spinner/spinner";
import { useQuery } from "react-query";
import React from "react";


const ApiYoutube = () => {

const videos = async()=> {
  const response =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCIC3BBTqJLN8axplZm2gXog&maxResults=7&order=date&key=${process.env.REACT_APP_YOUTUBE_KEY}`);
  return response.json();
}


const {status, data} =useQuery(["video"], videos,{
  refetchOnMount:false,
  refetchOnWindowFocus:false,
  refetchOnReconect:false,
  staleTime: Infinity,
  


} )
if (status ==="loading"){
  return <Spinner />
}
if (status ==="error"){
  return <h2>No hemos encontrado videos</h2>
}
  return(
    <div>
          <div
            className="container-fluid page-header py-5 mb-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container text-center py-5">
              <h1 className="display-4 text-white animated slideInDown mb-4">Media</h1>
            </div>
          </div>
          <div className="container text-center">
            <h3>{data?.items[0].snippet.title}</h3>
            <a 
              href={"https://www.youtube.com/watch?v=" + data?.items[0].id.videoId}
              target="_blank " rel="noopener"
            >
              <img
                src={data?.items[0].snippet.thumbnails.high.url}
                className="img-thumbnail rounded mb-2"
                width="1000" alt=""
              />
            </a>
            <p>{data?.items[0].snippet.description.slice(0,94)}</p>
          </div>
          
          <div className="mt-5 container text-center">
          <hr />
            <h3 className="mt-5">Videos anteriores</h3>
            <div className="row">
              <div className="col-md-4">
                <p className="mt-5 fw-bold">{data?.items[1].snippet.title}</p>
                <a
                  href={
                    "https://www.youtube.com/watch?v=" + data?.items[1].id.videoId
                  }
                  target="_blank" rel="noreferrer"
                >
                  <img
                    src={data?.items[1].snippet.thumbnails.high.url}
                    className="img-thumbnail rounded"
                    width="800" alt=""
                  />
                </a>
                <p>{data?.items[1].snippet.description.slice(0,94)}</p>
              </div>
              <div className="col-md-4">
                <p className="mt-5 fw-bold">{data?.items[2].snippet.title}</p>
                <a
                  href={
                    "https://www.youtube.com/watch?v=" + data?.items[2].id.videoId
                  }
                  target="_blank" rel="noreferrer"
                >
                  <img
                    src={data?.items[2].snippet.thumbnails.high.url}
                    className="img-thumbnail rounded"
                    width="800" alt=""
                  />
                </a>
                <p>{data?.items[2].snippet.description.slice(0,94)}</p>
              </div>
              <div className="col-md-4">
                <p className="mt-5 fw-bold">{data?.items[3].snippet.title}</p>
                <a
                  href={
                    "https://www.youtube.com/watch?v=" + data?.items[3].id.videoId
                  }
                  target="_blank" rel="noreferrer"
                >
                  <img
                    src={data?.items[3].snippet.thumbnails.high.url}
                    className="img-thumbnail rounded"
                    width="800" alt=""
                  />
                </a>
                <p>{data?.items[3].snippet.description.slice(0,94)}</p>
              </div>
            
    
            <div className="col-md-4">
              <p className="mt-5 fw-bold">{data?.items[4].snippet.title}</p>
              <a
                href={
                  "https://www.youtube.com/watch?v=" + data?.items[4].id.videoId
                }
                target="_blank" rel="noreferrer"
              >
                <img
                  src={data?.items[4].snippet.thumbnails.high.url}
                  className="img-thumbnail rounded"
                  width="800" alt=""
                />
              </a>
              <p>{data?.items[4].snippet.description.slice(0,94)}</p>
            </div>
            <div className="col-md-4">
              <p className="mt-5 fw-bold">{data?.items[5].snippet.title}</p>
              <a
                href={
                  "https://www.youtube.com/watch?v=" + data?.items[5].id.videoId
                }
                target="_blank" rel="noreferrer"
              >
                <img
                  src={data?.items[5].snippet.thumbnails.high.url}
                  className="img-thumbnail rounded"
                  width="800" alt=""
                />
              </a>
              <p>{data?.items[5].snippet.description.slice(0,94)}</p>
            </div>
            <div className="col-md-4">
              <p className="mt-5 fw-bold">{data?.items[6].snippet.title}</p>
              <a
                href={
                  "https://www.youtube.com/watch?v=" + data?.items[6].id.videoId
                }
                target="_blank" rel="noreferrer"
              >
                <img
                  src={data?.items[6].snippet.thumbnails.high.url}
                  className="img-thumbnail rounded"
                  width="800" alt=""
                />
              </a>
              <p>{data?.items[6].snippet.description.slice(0,94)}</p>
            </div>
          </div>
        </div>
        </div>

  );
    
}

export default ApiYoutube;

/* function apiYoutube() {
    const apiYou=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCIC3BBTqJLN8axplZm2gXog&maxResults=7&order=date&key=${process.env.REACT_APP_YOUTUBE_KEY}`;
    const jsonYou="youtube.json";
    const { data, loading, error } = Datos(jsonYou);
 
      if (loading)
        return (
          <h1>
            <Spinner />
          </h1>
        );
      if (error) console.log(error);
      return (
        <div>
          <div
            className="container-fluid page-header py-5 mb-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container text-center py-5">
              <h1 className="display-4 text-white animated slideInDown mb-4">Media</h1>
            </div>
          </div>
          <div className="container text-center">
            <h3>{data?.items[0].snippet.title}</h3>
            <a 
              href={"https://www.youtube.com/watch?v=" + data?.items[0].id.videoId}
              target="_blank " rel="noopener"
            >
              <img
                src={data?.items[0].snippet.thumbnails.high.url}
                className="img-thumbnail rounded mb-2"
                width="1000" alt=""
              />
            </a>
            <p>{data?.items[0].snippet.description.slice(0,94)}</p>
          </div>
          
          <div className="mt-5 container text-center">
          <hr />
            <h3 className="mt-5">Videos anteriores</h3>
            <div className="row">
              <div className="col-md-4">
                <p className="mt-5 fw-bold">{data?.items[1].snippet.title}</p>
                <a
                  href={
                    "https://www.youtube.com/watch?v=" + data?.items[1].id.videoId
                  }
                  target="_blank" rel="noreferrer"
                >
                  <img
                    src={data?.items[1].snippet.thumbnails.high.url}
                    className="img-thumbnail rounded"
                    width="800" alt=""
                  />
                </a>
                <p>{data?.items[1].snippet.description.slice(0,94)}</p>
              </div>
              <div className="col-md-4">
                <p className="mt-5 fw-bold">{data?.items[2].snippet.title}</p>
                <a
                  href={
                    "https://www.youtube.com/watch?v=" + data?.items[2].id.videoId
                  }
                  target="_blank" rel="noreferrer"
                >
                  <img
                    src={data?.items[2].snippet.thumbnails.high.url}
                    className="img-thumbnail rounded"
                    width="800" alt=""
                  />
                </a>
                <p>{data?.items[2].snippet.description.slice(0,94)}</p>
              </div>
              <div className="col-md-4">
                <p className="mt-5 fw-bold">{data?.items[3].snippet.title}</p>
                <a
                  href={
                    "https://www.youtube.com/watch?v=" + data?.items[3].id.videoId
                  }
                  target="_blank" rel="noreferrer"
                >
                  <img
                    src={data?.items[3].snippet.thumbnails.high.url}
                    className="img-thumbnail rounded"
                    width="800" alt=""
                  />
                </a>
                <p>{data?.items[3].snippet.description.slice(0,94)}</p>
              </div>
            
    
            <div className="col-md-4">
              <p className="mt-5 fw-bold">{data?.items[4].snippet.title}</p>
              <a
                href={
                  "https://www.youtube.com/watch?v=" + data?.items[4].id.videoId
                }
                target="_blank" rel="noreferrer"
              >
                <img
                  src={data?.items[4].snippet.thumbnails.high.url}
                  className="img-thumbnail rounded"
                  width="800" alt=""
                />
              </a>
              <p>{data?.items[4].snippet.description.slice(0,94)}</p>
            </div>
            <div className="col-md-4">
              <p className="mt-5 fw-bold">{data?.items[5].snippet.title}</p>
              <a
                href={
                  "https://www.youtube.com/watch?v=" + data?.items[5].id.videoId
                }
                target="_blank" rel="noreferrer"
              >
                <img
                  src={data?.items[5].snippet.thumbnails.high.url}
                  className="img-thumbnail rounded"
                  width="800" alt=""
                />
              </a>
              <p>{data?.items[5].snippet.description.slice(0,94)}</p>
            </div>
            <div className="col-md-4">
              <p className="mt-5 fw-bold">{data?.items[6].snippet.title}</p>
              <a
                href={
                  "https://www.youtube.com/watch?v=" + data?.items[6].id.videoId
                }
                target="_blank" rel="noreferrer"
              >
                <img
                  src={data?.items[6].snippet.thumbnails.high.url}
                  className="img-thumbnail rounded"
                  width="800" alt=""
                />
              </a>
              <p>{data?.items[6].snippet.description.slice(0,94)}</p>
            </div>
          </div>
        </div>
        </div>
    )
}

export default apiYoutube;

 */
