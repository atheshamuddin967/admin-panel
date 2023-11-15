import Input from "../../components/Input";
import StreamItem from "../../components/StreamItem";
import "../Stream/Stream.scss";

function Stream() {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-sm-8"></div>
          <div className="col-sm-4">
            <div className="vehicle-box">
              <Input placeholder={"Serach Vehicle"} />
              <StreamItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stream;
