// Initialize and add the map

export const GoogleMap = () => {

  
  return (
    <div className="container">
      <iframe
       className="google-map-styles"
        src="https://maps.google.com/maps?q=La%20fortuna%20de%20sancarlos&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
        id="gmap_canvas"       
      ></iframe>
    </div>
  );
};
