"use client";
import { Button, Drawer, Flex, Typography, Grid as breakpoint } from "antd";
import React, { useState } from "react";
import {
  NavigationsHeader,
  HeaderComponent,
  TitleHeader,
  LinkNavigation
} from "./Header.style";
import { CheckCircleOutlined, MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Grid from "antd/es/card/Grid";

type MenuItemType = {
  path: string;
  label: string;
};

const { useBreakpoint } = breakpoint;

export const Header = () => {
  const [ open, setOpen ] = useState<boolean>(false);
  const pathname = usePathname()
  const screens = useBreakpoint();
  const isMobile = Object.entries(screens).map(x => {
    return {
      size: x[0],
      value: x[1]
    }
  }).filter(x => x.value === false)[0]?.size === 'sm';

  const listItemsMenu = (): MenuItemType[] => {
    return [
      { label: "Comidas", path: "/" },
      { label: "Pedido", path: "/order" },
      { label: "Contato", path: "/contact" },
    ];
  }

  const LinkCustom = ({ label, path }: MenuItemType) => {
    const isActive = pathname.toLowerCase() === path.toLowerCase();
    return (
      <LinkNavigation href={path} isActive={isActive}>
        {label.toUpperCase()}
      </LinkNavigation>
    )
  };

  const listOptionsMenu = (listItemsMenu() ?? []);

  return (
    <HeaderComponent>
      <Grid>
        <TitleHeader>
          <CheckCircleOutlined style={{ fontSize: 30 }} />
        </TitleHeader>
      </Grid>

      {isMobile ? (
        <Button
          type="text"
          shape="circle"
          onClick={() => setOpen(true)}
          style={{ marginLeft: '10px' }}
          icon={<MenuOutlined style={{ fontSize: "24px" }} />}
        />
      ) : (
        <NavigationsHeader>
          {listOptionsMenu.map((option, index) => {
            return (
              <LinkCustom key={index} label={option.label} path={option.path} />
            )
          })}
          <Button
            type="text"
            shape="circle"
            style={{ marginLeft: '10px' }}
            icon={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
          />
        </NavigationsHeader>
      )
      }

      <Drawer
        title={`Menu`}
        placement="right"
        size={'large'}
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <></>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </HeaderComponent >
  );
};
