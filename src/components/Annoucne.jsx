import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
function Annoucne() {
  const [announceStyle, SetAnnounceStyle] = useState(
    "bg-[#6D51CC] text-white font-bold flex items-center justify-center"
  );
  const HandleClose = () => {
    SetAnnounceStyle(announceStyle + " hidden");
  };

  return (
    <div className={announceStyle}>
      <h3>Hurry!! Up it's 40% Off Now </h3>

      <CloseIcon className="cursor-pointer" onClick={HandleClose} />
    </div>
  );
}

export default Annoucne;