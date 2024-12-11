import React from 'react';
import '../css/SliderTiedUpCompany.css';

const SliderTiedUpCompany = () => {
  const logos = [
    "https://api.123admissions.com/uploads/Patners/1717052147585_LS logo.webp",
    "https://api.123admissions.com/uploads/Patners/Bharathidasakkkk.webp",
    "https://api.123admissions.com/uploads/Patners/1717053183458_andhrauniversity.webp",
    "https://api.123admissions.com/uploads/Patners/1717053214261_jain-logo.webp",
    "https://api.123admissions.com/uploads/Patners/1717053242478_LIBA.webp",
    "https://api.123admissions.com/uploads/Patners/1717053271762_Manipal.webp",
    "https://api.123admissions.com/uploads/Patners/1717053384879_edgewood.webp",
    "https://api.123admissions.com/uploads/Patners/1717053409822_haaga-helia.webp",
    "https://api.123admissions.com/uploads/Patners/1717053432219_iu.webp",
    "https://api.123admissions.com/uploads/Patners/1717053461328_metropolia.webp",
    "https://api.123admissions.com/uploads/Patners/1717053525382_north.webp",
    "https://api.123admissions.com/uploads/Patners/1717053562137_seamk_logo.webp",
    "https://api.123admissions.com/uploads/Patners/1717053584381_Vaasa University.webp",
    "https://api.123admissions.com/uploads/Patners/1717054057656_ggu-logo-vert.webp",
    "https://api.123admissions.com/uploads/Patners/1717054200670_Liverpool.webp",
    "https://api.123admissions.com/uploads/Patners/1717054341805_BIMTECH.webp",
    "https://api.123admissions.com/uploads/Patners/1717054572142_Maryland.webp",
    "https://api.123admissions.com/uploads/Patners/1717055680036_wharton.webp",
    "https://api.123admissions.com/uploads/Patners/1717055983012_OP.Jindal.webp",
    "https://api.123admissions.com/uploads/Patners/1717134877695_colorado-01.webp",
  ];

  return (
    <div className="slider">
      <div className="track">
        {logos.map((logo, index) => (
          <div key={index} className="item">
            <img alt="logo" src={logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderTiedUpCompany;
