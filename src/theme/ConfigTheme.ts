import { ThemeConfig } from "antd";

export const configTheme: ThemeConfig = {
    token: {
        colorPrimary: '#692D18',
        borderRadius: 8,
        colorPrimaryBg: '#00000', 
        colorTextSecondary: '#ffffff'
    },
    components: {
        Button: {
            // colorBgContainer: '#f6ffed',
            borderRadius: 4,
        },
        Input: {
            borderRadius: 6,
            colorText: '#595959',
        },
        Typography: {
            colorText: '#000000', 
            colorTextSecondary: '#ffffff'
        }
    },

};