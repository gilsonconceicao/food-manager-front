import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import React from 'react'

export const ActionsHeader = () => {
    return (
        <Flex align='center' justify='start'>
            <Button
                type="text"
                shape="circle"
                style={{ marginLeft: '10px' }}
                icon={<ShoppingCartOutlined style={{ fontSize: "24px" }} />}
            />
        </Flex>
    )
}
