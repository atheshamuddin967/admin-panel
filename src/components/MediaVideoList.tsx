import "../Screens/Media/Media.scss";
function MediaVideoList({ data }: any) {
  return (
    <div>
      <div className="row ">
        {data.map((item: any) => (
          <div className="col-sm-2">
            <div className="imgList">
              <video controls>
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaVideoList;
