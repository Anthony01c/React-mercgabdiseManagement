import React,{Component} from "react";
import { Form, Input, Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './css/login.less'

export default class Login extends Component{
    render() {
        return(
            <div className='login'>
                <header>
                    商品管理系统
                </header>
                <section>
                    <h1>用户登录</h1>
                    <Form name="normal_login" className="login-form" initialValues={{remember: true,}}>
                        <Form.Item name="username" rules={[{required: true, message: '请输入你的用户名',},]}>
                            <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}} />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item name="password" rules={[{required: true, message: '请输入密码',},]}>
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}