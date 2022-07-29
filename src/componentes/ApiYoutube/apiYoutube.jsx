import Datos from "../API/Datos";
import Spinner from "../spinner/spinner";
const apiYou = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCIC3BBTqJLN8axplZm2gXog&maxResults=7&order=date&key=AIzaSyDFkaQ0hLqA8nAyaNrZGt_u6VniFSsF6fw";

function apiYoutube() {
    const { data, loading, error } = Datos(apiYou
        /* youtube.json */
        
      );
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
                className="img-thumbnail rounded mb-5"
                width="1000" alt=""
              />
            </a>
          </div>
          <div className="mt-5 container text-center">
            <h3 className="mt-5">Videos anteriores</h3>
            <div className="row">
              <div className="col-md-4">
                <p className="mt-5 text-strong">{data?.items[1].snippet.title}</p>
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
              </div>
              <div className="col-md-4">
                <p className="mt-5 text-strong">{data?.items[2].snippet.title}</p>
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
              </div>
              <div className="col-md-4">
                <p className="mt-5 text-strong">{data?.items[3].snippet.title}</p>
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
              </div>
            
    
            <div className="col-md-4">
              <p className="mt-5 text-strong">{data?.items[4].snippet.title}</p>
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
            </div>
            <div className="col-md-4">
              <p className="mt-5 text-strong">{data?.items[5].snippet.title}</p>
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
            </div>
            <div className="col-md-4">
              <p className="mt-5 text-strong">{data?.items[6].snippet.title}</p>
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
            </div>
          </div>
        </div>
        </div>
    )
}

export default apiYoutube;
