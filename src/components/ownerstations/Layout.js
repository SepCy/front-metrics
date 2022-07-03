import React from "react";

export default function Layout({ sidebar, content }) {
  return (
    <div class="flex mx-10 w-screen justify-between mt-24 ">
      <div
        id="left"
        class="fixed  shadow-sm rounded-md h-full bottom-0 top-24  flex flex-col w-1/2 2xl:w-1/6 xl:w-1/5 md:w-1/3 lg:w-1/4 sm:w-1/3"
      >
        {sidebar}
      </div>
      <div class="fixed mt-12 2xl:w-4/5 md:w-4/5  right-0  pr-8 pl-10 ">
        <div class="shadow-sm border border-gray-100 md:ml-8 rounded-md p-8 bg-gray-50">
          {content}
        </div>
      </div>
    </div>
  );
}
