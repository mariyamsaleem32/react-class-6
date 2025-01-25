import React, { useState } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space, Modal } from 'antd';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);

const AppSearch = () => {
  const [searchResult, setSearchResult] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onSearch = (value) => {
    const data = ['hi', 'hello', 'yes', 'no'];
    if (data.includes(value)) {
      setSearchResult(value); 
    } else {
      setSearchResult('This item is not in search results'); 
    }

    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false); 
  };

  return (
    <>
      <Space direction="vertical">
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          style={{ width: '400px' }} 
        />
      </Space>

      <Modal
        title="Search Result"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null} 
      >
        <p>{searchResult || 'No result found'}</p>
      </Modal>

      <p>hi</p>
      <p>hello</p>
      <p>yes</p>
      <p>no</p>
    </>
  );
};

export default AppSearch;
