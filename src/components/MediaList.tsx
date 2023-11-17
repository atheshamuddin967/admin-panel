import "../Screens/Media/Media.scss";
function MediaList({ data }: any) {
  return (
    <div>
      <div className="row ">
        {data.map((item: any) => (
          <div className="col-sm-2">
            <div className="imgList">
              <img src={item.image} alt="item" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaList;
