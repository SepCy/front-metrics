import React from "react";
import DashboardNavigationContent from "../../navigation/dashboard/DashboardNavigationContent";
import DashboardNavigationSidebar from "../../navigation/dashboard/DashboardNavigationSidebar";

export default function OwnerDashboardView() {
  return (
    <div class="flex mx-10 w-screen justify-between mt-24 ">
      <div
        id="left"
        class="fixed  shadow-sm rounded-md h-full bottom-0 top-24  flex flex-col w-1/2 2xl:w-1/6 xl:w-1/5 md:w-1/3 lg:w-1/4 sm:w-1/3"
      >
        <DashboardNavigationSidebar />
      </div>
      <div class="">
        <DashboardNavigationContent />
      </div>
    </div>
  );
}
