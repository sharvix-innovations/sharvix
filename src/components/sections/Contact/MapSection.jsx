const MapSection = () => {
  return (
    <section>
      <div className="mil-map-frame">
        <iframe
          title="Sharvix Innovations Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5443.925190081927!2d73.83442890159793!3d18.515103829939033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5de4b3f269%3A0xef2b718089ec8ca4!2sVinayak%20Apartment!5e0!3m2!1sen!2sin!4v1775306829159!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default MapSection;
