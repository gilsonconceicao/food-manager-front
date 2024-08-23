"use client";
import { Button, Drawer, Space } from "antd";
import React, { useEffect, useState } from "react";
import {
  NavigationsHeader,
  HeaderComponent,
  TitleHeader,
  LinkNavigation,
  MobileItemsMenu
} from "./Header.style";
import { CheckCircleOutlined, CloseOutlined, MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Grid from "antd/es/card/Grid";
import { ActionsHeader } from "./ActionsHeader";
import { useLayoutHook } from "@/Hooks/useLayoutHook";

type MenuItemType = {
  path: string;
  label: string;
};

export const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname()
  const { isMobile } = useLayoutHook();

  useEffect(() => {
    if (Boolean(isMobile) === false) {
      setOpen(false);
    }
  }, [isMobile]);

  const listItemsMenu = (): MenuItemType[] => {
    const listDefaultOptions: MenuItemType[] = [
      { label: "Comidas", path: "/" },
      { label: "Solicitar pedido", path: "/order" },
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
        <Space>
          <Button
            type="text"
            shape="circle"
            onClick={() => setOpen(true)}
            style={{ marginLeft: '10px' }}
            icon={open ? <CloseOutlined style={{ fontSize: "24px" }} spin/> : <MenuOutlined style={{ fontSize: "24px" }} />}
          />
        </Space>
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
        placement="bottom"
        size={'default'}
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
