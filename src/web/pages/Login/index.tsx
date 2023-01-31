import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { Alert } from 'antd';
import React, { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Config from '../../../config';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => {
  return (
    <Alert
      style={{
        marginBottom: 24,
      }}
      message={content}
      type="error"
      showIcon
    />
  );
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [userLoginState, setUserLoginState] = useState<any>({});

  const containerClassName = useEmotionCss(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      backgroundImage:
        "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
      backgroundSize: '100% 100%',
    };
  });

  const handleSubmit = async () => {
    try {
      // 登录
      navigate('/');
      // 如果失败去设置用户错误信息
    } catch (error) {}
  };
  const { status, type: loginType } = userLoginState;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{Config.title}</title>
      </Helmet>
      <div className={containerClassName}>
        <div style={{ flex: '1', padding: '128px 0' }}>
          <LoginForm
            contentStyle={{
              minWidth: 280,
              maxWidth: '75vw',
            }}
            // logo={<img alt="logo" src="/logo.svg" />}
            title={<div style={{ marginBottom: '32px' }}>{Config.title}</div>}
            initialValues={{
              autoLogin: true,
            }}
            onFinish={async values => {
              await handleSubmit();
            }}
          >
            {status === 'error' && loginType === 'account' && (
              <LoginMessage content={'账户或密码错误'} />
            )}
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined />,
                }}
                placeholder={'用户名: admin or user'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined />,
                }}
                placeholder={'密码: ant.design'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
              >
                忘记密码
              </a>
            </div>
          </LoginForm>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Login;
