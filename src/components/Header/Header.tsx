"use client";
import { Button, Drawer, Flex, Typography, Grid as breakpoint } from "antd";
import React, { useEffect, useState } from "react";
import {
  NavigationsHeader,
  HeaderComponent,
  TitleHeader,
  LinkNavigation,
  MobileItemsMenu
} from "./Header.style";
import { CheckCircleOutlined, MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Grid from "antd/es/card/Grid";
import { ActionsHeader } from "./ActionsHeader";

type MenuItemType = {
  path: string;
  label: string;
};

const { useBreakpoint } = breakpoint;

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname()
  const screens = useBreakpoint();
  const isMobile = Object.entries(screens).map(x => {
    return {
      size: x[0],
      value: x[1]
    }
  }).filter(x => x.value === false)[0]?.size === 'sm';

  useEffect(() => {
    if (Boolean(isMobile) === false) {
      setOpen(false);
    }
  }, [isMobile])

  const listItemsMenu = (): MenuItemType[] => {
    const listDefaultOptions: MenuItemType[] = [
      { label: "Comidas", path: "/" },
      { label: "Pedido", path: "/order" },
      { label: "Contato", path: "/contact" },
    ];

    if (isMobile) {
      listDefaultOptions.push({
        label: "Carrinho", path: '/car'
      })
    }
    return listDefaultOptions;
  }

  const LinkCustom = ({ label, path }: MenuItemType) => {
    const isActive = pathname.toLowerCase() === path.toLowerCase();
    return (
      <LinkNavigation href={path} isMobileMode={isMobile} isActive={isActive}>
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
          <ActionsHeader />
        </NavigationsHeader>
      )
      }

      <Drawer
        title={`Menu`}
        placement="right"
        size={'large'}
        onClose={() => setOpen(false)}
        open={open}
      >
        <MobileItemsMenu>
          {listOptionsMenu.map((option, index) => {
            return (
              <LinkCustom key={index} label={option.label} path={option.path} />
            )
          })}
        </MobileItemsMenu>
      </Drawer>
    </HeaderComponent >
  );
};
