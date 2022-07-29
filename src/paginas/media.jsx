import Datos from "../componentes/API/Datos";
import Spinner from "../componentes/spinner/spinner";
import ApiYoutube from "../componentes/ApiYoutube/apiYoutube"
import SeriesYoutube from "../componentes/seriesYoutube/seriesYoutube"

function media() {
      return (
        <div>
          <ApiYoutube/>
          <SeriesYoutube/>
        </div>
        
  );
}

export default media;
