import React, { useState } from "react";

type MembershipType = "개인회원" | "기업회원";

interface MembershipButtonGroupProps {
  onChange: (type: MembershipType) => void;
}

const MembershipButtonGroup: React.FC<MembershipButtonGroupProps> = ({ onChange }) => {
  const [selectedType, setSelectedType] = useState<MembershipType | null>("개인회원");

  const handleButtonClick = (type: MembershipType) => {
    setSelectedType(type);
    onChange(type);
  };

  return (
    <div className="flex justify-between">
      <button
        className={`w-[140px] py-2 rounded-[4px] text-[14px] font-medium transition ${
          selectedType === "개인회원" ? "bg-bts text-white " : "border hover:bg-bts hover:text-white"
        }`}
        onClick={() => handleButtonClick("개인회원")}
      >
        개인회원
      </button>
      <button
        className={`w-[140px] py-2  rounded-[4px] text-[14px] font-medium transition ${
          selectedType === "기업회원" ? "bg-bts text-white" : "border hover:bg-bts hover:text-white"
        }`}
        onClick={() => handleButtonClick("기업회원")}
      >
        기업회원
      </button>
    </div>
  );
};

export default MembershipButtonGroup;
