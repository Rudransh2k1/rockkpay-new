import React, { useState } from 'react';
import { Tabs } from 'antd';
import TransferTab from './TransferTab';
import TransferModal from './TransferModal';

const { TabPane } = Tabs;

const PayoutDashboard = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [accounts, setAccounts] = useState(['Bank Account 1', 'Bank Account 2', 'Bank Account 3']);

    const handleTransferSubmit = (values) => {
        console.log('Submitting transfer:', values);
        // You can perform transfer logic here
        setModalVisible(false);
    };

    const handleCancel = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Instant Transfer" key="1">
                    <TransferTab
                        availableAmount={1000}
                        buttonText="Instant Transfer"
                        onButtonClick={() => setModalVisible(true)}
                    />
                </TabPane>
                <TabPane tab="Bulk Transfer" key="2">
                    <TransferTab availableAmount={5000} buttonText="Bulk Transfer" />
                </TabPane>
            </Tabs>
            <TransferModal
                visible={modalVisible}
                onCancel={handleCancel}
                onSubmit={handleTransferSubmit}
                accounts={accounts}
            />
        </>
    );
};

export default PayoutDashboard;
