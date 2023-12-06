import React from "react";

import { Button, Img, Text } from "components";

import { handleSectionNavigation } from "utils";

const Navbar = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-8 items-center justify-center w-full">
          <Img
            className="flex-1 h-[55px] max-h-[55px] md:w-14"
            src="images/img_column.svg"
            alt="column"
          />
          <ul className="flex flex-row gap-8 sm:hidden items-start justify-start w-auto common-row-list">
            <li>
              <a href="javascript:" className="text-base text-black-900">
                <Text size="txtLatoRegular16">{props?.nav1}</Text>
              </a>
            </li>
            <li>
              <a className="text-base text-black-900">
                <Text
                  className="common-pointer"
                  size="txtLatoRegular16"
                  onClick={() => {
                    handleSectionNavigation("block3");
                  }}
                >
                  {props?.nav2}
                </Text>
              </a>
            </li>
            <li>
              <a className="text-base text-black-900">
                <Text
                  className="common-pointer"
                  size="txtLatoRegular16"
                  onClick={() => {
                    handleSectionNavigation("block2");
                  }}
                >
                  {props?.nav3}
                </Text>
              </a>
            </li>
          </ul>
          <Button
            className="!rounded-[20px] cursor-pointer font-roboto min-w-[97px] md:rounded-[16px] text-base text-center"
            shape="square"
            color="purple_800"
            size="xs"
            variant="fill"
          >
            {props?.btn}
          </Button>
        </div>
      </header>
    </>
  );
};

Navbar.defaultProps = {
  nav1: "About Us",
  nav2: "Services",
  nav3: "Contact Us",
  btn: "Get App",
};

export default Navbar;
