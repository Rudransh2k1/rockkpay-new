import React from 'react';
import { Modal, Button, Typography, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';

const { Text } = Typography;

const BulkTransferModal = ({ visible, onCancel, onSubmit }) => {
    const csvData = [
        ["BeneficialName", "Amount", "AccountNumber", "Bank", "IFSC", "Mode"],
        ["John Doe", "1000", "123456789", "Bank A", "IFSC001", "NEFT"],
        ["Jane Doe", "2000", "987654321", "Bank B", "IFSC002", "RTGS"],
        // Add more rows as needed
    ];

    const handleUpload = (file) => {
        // Logic to upload the file
        message.success(`${file.name} uploaded successfully.`);
    };

    const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                handleUpload(info.file);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    return (
        <Modal
            visible={visible}
            title="Bulk Transfer"
            onCancel={onCancel} 
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Upload {...uploadProps} key="upload">
                    <Button icon={<UploadOutlined />} type="primary">
                        Upload File
                    </Button>
                </Upload>,
            ]}
        >
            <div style={{ marginBottom: '16px' }}>
                <Text strong>Download "Bulk Transfer" Demo CSV file </Text>
                <CSVLink data={csvData} filename={"bulk_transfer.csv"}>
                    <Button type="primary" style={{ marginRight: '16px' }}>
                        Download CSV File
                    </Button>
                </CSVLink>
            </div>
            <div style={{ marginBottom: '16px' }}>
                <Text strong>Upload File </Text>
                <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />}>Click to Upload File</Button>
                </Upload>
            </div>
        </Modal>
    );
};

export default BulkTransferModal;
