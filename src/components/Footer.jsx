
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  const SocialIconsStyle = "m-3 rounded-full cursor-pointer p-2 text-white ";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">Dress Mart </h1>
        <p>
          Dress Mart is a one stop shop for all your fashion and lifestyle
          needs. Being India's largest e-commerce store for fashion and
          lifestyle products, Myntra aims at providing a hassle free and
          enjoyable shopping experience to shoppers across the country with the
          widest range of brands and products on its portal.
        </p>

        
        <div className="flex items-center justify-center mt-3 self-start">
            <div className={SocialIconsStyle + `bg-blue-700`}>
              <a href="https://www.facebook.com/Rakesh89singh/">
                <FacebookIcon />{" "}
              </a>
            </div>
            <div className={SocialIconsStyle + `bg-red-600`}>
              <a href="https://in.pinterest.com/">
                <PinterestIcon />{" "}
              </a>
            </div>
            <div className={SocialIconsStyle + `bg-blue-600`}>
              <a href="https://www.linkedin.com/in/rakesh-ranjan-ray-61b2ba1bb">
                <LinkedInIcon />
              </a>
            </div>

            <div className={SocialIconsStyle + `bg-blue-500`}>
              <a href="https://twitter.com/home?lang=en">
                {" "}
                <TwitterIcon />{" "}
              </a>
            </div>

            <div className={SocialIconsStyle + `bg-red-500`}>
              <a href="https://www.instagram.com/_rakesh_singh_rajput1/?igshid=NGExMmI2YTkyZg%3D%3D">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>




      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnIcon className="text-[#8a4af3]" />
          <p className="pl-3">Gorakhpur,Uttar Pradesh</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneIcon className="text-[#521da8]" />
          <p className="pl-3">+91 9876543210</p>
        </div>
        <div className="flex m-3">
          <EmailIcon className="text-[#8a4af3]" />
          <p className="pl-3">rakesh9test@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
