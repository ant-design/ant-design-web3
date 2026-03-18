import React, { useCallback, useState, type FC } from 'react';
import { CheckOutlined, UsbOutlined } from '@ant-design/icons';
import type { DiscoveredDevice } from '@ledgerhq/device-management-kit';
import { Button, List, Modal, Tag, Typography } from 'antd';

const MODEL_DISPLAY_NAMES: Record<string, string> = {
  nanoS: 'Nano S',
  nanoSP: 'Nano S Plus',
  nanoX: 'Nano X',
  stax: 'Stax',
  flex: 'Flex',
  apexp: 'Apex',
};

function getDeviceLabel(device: DiscoveredDevice): string {
  const modelName =
    MODEL_DISPLAY_NAMES[device.deviceModel.model] ?? device.deviceModel.name ?? 'Unknown';
  return device.name || `Ledger ${modelName}`;
}

function getModelTag(device: DiscoveredDevice): string {
  return MODEL_DISPLAY_NAMES[device.deviceModel.model] ?? device.deviceModel.model;
}

/**
 * 多设备选择方式。
 * - `'default'`：仅使用浏览器原生 HID 选择器（默认）
 * - `true`：使用内置 LedgerDeviceSelectModal
 * - 自定义组件：使用传入的组件
 */
export type DeviceSelectModalOption =
  | 'default'
  | true
  | React.ComponentType<LedgerDeviceSelectModalProps>;

export interface LedgerDeviceSelectModalProps {
  open: boolean;
  devices: DiscoveredDevice[];
  onSelect: (device: DiscoveredDevice) => Promise<void>;
  onCancel: () => Promise<void>;
  onDiscover: () => Promise<void>;
}

export const LedgerDeviceSelectModal: FC<LedgerDeviceSelectModalProps> = ({
  open,
  devices,
  onSelect,
  onCancel,
  onDiscover,
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);
  const [discovering, setDiscovering] = useState(false);

  const handleConfirm = useCallback(async () => {
    const device = devices.find((d) => d.id === selectedId);
    if (!device) return;
    setConnecting(true);
    try {
      await onSelect(device);
    } finally {
      setConnecting(false);
    }
  }, [devices, selectedId, onSelect]);

  const handleCancel = useCallback(async () => {
    setSelectedId(null);
    try {
      await onCancel();
    } catch {
      // ignore
    }
  }, [onCancel]);

  const handleDiscover = useCallback(async () => {
    setDiscovering(true);
    try {
      await onDiscover();
    } finally {
      setDiscovering(false);
    }
  }, [onDiscover]);

  if (!open) return null;

  return (
    <Modal
      title={
        <span>
          <UsbOutlined style={{ marginRight: 8, color: 'var(--ant-color-info)' }} />
          Select Ledger Device
        </span>
      }
      open={open}
      onCancel={handleCancel}
      footer={[
        <Button key="discover" onClick={handleDiscover} loading={discovering}>
          Scan for Devices
        </Button>,
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="connect"
          type="primary"
          disabled={!selectedId}
          loading={connecting}
          onClick={handleConfirm}
        >
          Connect
        </Button>,
      ]}
      destroyOnHidden
      maskClosable={false}
      width={480}
    >
      <Typography.Paragraph type="secondary" style={{ marginBottom: 16 }}>
        Multiple Ledger devices detected. Please select one to connect:
      </Typography.Paragraph>

      <List
        dataSource={devices}
        renderItem={(device) => {
          const isSelected = device.id === selectedId;
          return (
            <List.Item
              onClick={() => setSelectedId(device.id)}
              style={{
                cursor: 'pointer',
                borderRadius: 8,
                padding: '12px 16px',
                marginBottom: 8,
                border: isSelected
                  ? '2px solid var(--ant-color-primary)'
                  : '1px solid var(--ant-color-border)',
                background: isSelected
                  ? 'var(--ant-color-primary-bg)'
                  : 'var(--ant-color-bg-container)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.background = 'var(--ant-color-fill-quaternary)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.background = 'var(--ant-color-bg-container)';
                }
              }}
            >
              <List.Item.Meta
                avatar={
                  <UsbOutlined
                    style={{
                      fontSize: 24,
                      color: isSelected
                        ? 'var(--ant-color-primary)'
                        : 'var(--ant-color-text-secondary)',
                      marginTop: 4,
                    }}
                  />
                }
                title={
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, width: '100%' }}>
                    {getDeviceLabel(device)}
                    <Tag color="blue" style={{ margin: 0 }}>
                      {getModelTag(device)}
                    </Tag>
                    {isSelected && (
                      <CheckOutlined
                        style={{
                          color: 'var(--ant-color-primary)',
                          fontSize: 16,
                          marginLeft: 'auto',
                          flexShrink: 0,
                        }}
                      />
                    )}
                  </span>
                }
                description={
                  <Typography.Text type="secondary" style={{ fontSize: 12 }}>
                    ID: {device.id.slice(0, 12)}... &middot; Transport: {device.transport}
                  </Typography.Text>
                }
              />
            </List.Item>
          );
        }}
      />
    </Modal>
  );
};
