import { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

export const FindAddress = () => {
  const [showAddressPopup, setShowAddressPopup] = useState(false);
  const open = useDaumPostcodePopup();

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setShowAddressPopup(fullAddress);
    console.log(showAddressPopup);
    // console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <div className="border w-[40rem] p-4 flex ">
      {/* <Label htmlFor="addressBar">경기장 주소</Label> */}
      <label className="w-[5rem]" onClick={handleClick}>
        주소 찾기
      </label>
      <input
        type="text"
        value={showAddressPopup ? showAddressPopup : ""}
        readOnly
        className="w-full"
      />
    </div>
  );
};
