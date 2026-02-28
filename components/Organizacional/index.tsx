import React from "react";
import SectionHeader from "../Common/SectionHeader";
import OrgItem from "./OrgItem";
import teamOneData from "./teamOneData";
import teamTwoData from "./teamTwoData";
import teamThreeData from "./teamThreeData";
import teamFourData from "./teamFourData";

const Org = async ({ id }) => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `ESTRUCTURA ORGANIZACIONAL`,
              subtitle: ``,
              description: ``,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      {(id == 1 || id == 0) && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-c-1280 mx-auto mt-15 px-6 md:px-12 xl:px-16">
            <h2
              className="xl:text-sectiontitle2 mb-15 text-3xl font-semibold text-amber-600 dark:text-white"
              style={{ fontSize: "35px" }}
            >
              CONSEJO DIRECTIVO
            </h2>

            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
              {teamOneData.map((blog, key) => (
                <OrgItem blog={blog} key={key} />
              ))}
            </div>
          </div>
        </div>
      )}
      {(id == 2 || id == 0) && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-c-1280 mx-auto mt-15 px-6 md:px-12 xl:px-16">
            <h2
              className="xl:text-sectiontitle2 mb-15 text-3xl font-semibold text-amber-600 dark:text-white"
              style={{ fontSize: "35px" }}
            >
              EQUIPO OPERATIVO Y SOCIAL
            </h2>

            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
              {teamTwoData.map((blog, key) => (
                <OrgItem blog={blog} key={key} />
              ))}
            </div>
          </div>
        </div>
      )}

      {(id == 3 || id == 0) && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-c-1280 mx-auto mt-15 px-6 md:px-12 xl:px-16">
            <h2
              className="xl:text-sectiontitle2 mb-15 text-3xl font-semibold text-amber-600 dark:text-white"
              style={{ fontSize: "35px" }}
            >
              CONSEJO DE HONOR
            </h2>

            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
              {teamThreeData.map((blog, key) => (
                <OrgItem blog={blog} key={key} />
              ))}
            </div>
          </div>
        </div>
      )}
      {(id == 4 || id == 0) && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-c-1280 mx-auto mt-15 px-6 md:px-12 xl:px-16">
            <h2
              className="xl:text-sectiontitle2 mb-15 text-3xl font-semibold text-amber-600 dark:text-white"
              style={{ fontSize: "35px" }}
            >
              CONSEJO CIENTIFICO
            </h2>

            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
              {teamFourData.map((blog, key) => (
                <OrgItem blog={blog} key={key} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Org;
