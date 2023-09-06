import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-center items-center m-2">
      <Link to={"/"}>
        <div className=" ml-4 hover:cursor-pointer">
          <img src="/asset/fitfolio.png" alt="logo" className="w-[250]" />
        </div>
      </Link>
      <div className="flex h-8 w-4/12 border rounded-2xl p-1 mr-4">
        <img src="/asset/search.png" alt="search" className="mr-2 w-6" />
        <input
          className="w-full outline-none"
          placeholder="검색하실 ID 또는 #태그를 입력하세요."
        ></input>
      </div>
      <div className=" w-6 mr-4 hover:cursor-pointer">
        <img src="/asset/notify.png" alt="notify"></img>
      </div>
      <div className="flex">
        <Link to={"/login"}>
          <button className="mr-4 hover:text-btn-color">로그인</button>
        </Link>
        <Link to={"signup"}>
          <button className="mr-8 hover:text-btn-color">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
