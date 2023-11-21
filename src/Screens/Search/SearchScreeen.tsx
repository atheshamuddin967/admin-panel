import SearchHeader from "../../components/SearchHeader";
import SearchTable from "../../components/SearchTable";
import "../Search/Search.scss";
import Items from "../../Data/ItemData";
function SearchScreeen() {
  return (
    <div className="container">
      <SearchHeader />
      <hr />
      <div className="row">
        <div className="col-sm-8">
          {Items.map((item) => (
            <SearchTable item={item} />
          ))}
        </div>
        <div className="col-sm-4">
          <div className="maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795831!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1700560822537!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchScreeen;
