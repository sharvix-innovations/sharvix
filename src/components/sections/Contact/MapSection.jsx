const MapSection = () => {
  return (
    <section>
      <div className="mil-map-frame">
        <iframe
          title="Sharvix Innovations Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9456789012345!2d73.7898!3d18.5679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default MapSection;
