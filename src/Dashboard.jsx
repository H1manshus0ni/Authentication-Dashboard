import { UserButton } from '@clerk/clerk-react';
import { useClerk } from '@clerk/clerk-react';
import { Select, Input, ConfigProvider, Space, theme } from 'antd';
import React, { useState } from 'react';


const { TextArea } = Input;


const { Option } = Select;

const Dashboard = () => {
  const { user } = useClerk();

  const [selectedDepartment, setSelectedDepartment] = useState('sales');

  const handleDepartmentChange = (value) => {
    setSelectedDepartment(value);
  };

  const getPlaceholder = () => {
    if (selectedDepartment === 'sales') {
      return 'Enter your sales query here...';
    } else if (selectedDepartment === 'engineering') {
      return 'Enter your engineering query here...';
    } else if (selectedDepartment === 'medical') {
      return 'Enter your medical query here...';
    } else {
      return 'Enter your marketing query here...';
    }
  };

  return (

<ConfigProvider


theme={{
    
      algorithm: theme.darkAlgorithm,
    }}
> 

    <Space direction='vertical'  style={{ textAlign: 'center', marginTop: '50px' , backgroundColor : "rgba(54, 69, 79, 0.8)" , height:"70vh", width:"99.5vw"}}>
    <UserButton />

    <h1>Welcome to your dashboard {user.firstName}</h1>

    <Select
      value={selectedDepartment}
      style={{ width: 200, margin: '20px 0' , color:"white" }}
      onChange={handleDepartmentChange}
    >
      <Option value="marketing">Marketing</Option>
      <Option value="sales">Sales</Option>
      <Option value="engineering">Engineering</Option>
      <Option value="medical">Medical</Option>
    </Select>

  


    <TextArea rows={4}  placeholder={getPlaceholder()} style={{ width:"80vw", margin: '20px 0' }}  />

   
  </Space>
  </ConfigProvider>
  );
};

export default Dashboard;