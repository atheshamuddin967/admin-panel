import Images from "../images/Images";

function Googlemap() {
  return (
    <div className="">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46830151.11795831!2d-119.8093025!3d44.24236485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1699948872398!5m2!1sen!2s"
        width="100%"
        height="300"
        loading="lazy"
        style={{ borderRadius: 16 }}
      ></iframe>
    </div>
  );
}

export default Googlemap;
