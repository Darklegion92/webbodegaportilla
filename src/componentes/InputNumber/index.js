import {  Input } from 'antd'
import {CaretUpOutlined,CaretDownOutlined} from '@ant-design/icons'
import React from 'react'

const InputNumber=({value,onChange})=> {
    return (
        <div 
        style={{
                position:"absolute",
                display:'flex',
                flexDirection:'row',
                width:'100%',
                height:50

        }}>
            <Input 
            value={value} 
            className="input-edit" 
            disabled
            />
            <div style={{display:'flex', flexDirection:'column', position:'absolute', right:10}}>
                <CaretUpOutlined
                onClick={()=>onChange('plus')}
                style={{
                        cursor:'pointer',
                        fontSize:'150%',
                }}

                />
                <CaretDownOutlined
                onClick={()=>onChange('minus')}
                style={{
                        cursor:'pointer',
                        fontSize:'150%',
                }}
                 />
            </div>
        </div>
    )
}

export default InputNumber
