import React, { useCallback, useEffect, useState, type FC } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, InputNumber, Modal } from 'antd';

import type { Ledger } from '../ledger';

export interface LedgerAddressIndexModalProps {
  open: boolean;
  ledger: Ledger;
  onConfirm: (index: string) => Promise<void>;
  onCancel: () => Promise<void>;
}

export const LedgerAddressIndexModal: FC<LedgerAddressIndexModalProps> = ({
  open,
  ledger,
  onConfirm,
  onCancel,
}) => {
  const [index, setIndex] = useState(0);
  const [displayAddress, setDisplayAddress] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAddress = useCallback(
    async (idx: string) => {
      if (!open || !ledger) return;
      setLoading(true);
      setError(null);
      try {
        const address = await ledger.getAddressAtIndex(idx);
        setDisplayAddress(address);
      } catch (e: any) {
        setError(e?.message ?? 'Failed to get address');
        setDisplayAddress('');
      } finally {
        setLoading(false);
      }
    },
    [open, ledger],
  );

  useEffect(() => {
    if (open) {
      setIndex(0);
      setError(null);
      fetchAddress('0');
    }
  }, [open, fetchAddress]);

  const handleIndexChange = (value: number | null) => {
    const next = value ?? 0;
    setIndex(next);
    fetchAddress(String(next));
  };

  const handleConfirm = async () => {
    setConfirming(true);
    try {
      await onConfirm(String(index));
    } finally {
      setConfirming(false);
    }
  };

  const handleCancel = async () => {
    try {
      await onCancel();
    } catch {
      // Ignore
    }
  };

  if (!open) return null;

  const addressDisplay = loading ? 'Loading...' : error != null ? error : displayAddress || '-';

  return (
    <Modal
      title={
        <span>
          <InfoCircleOutlined style={{ marginRight: 8, color: 'var(--ant-color-info)' }} />
          Change Ledger Wallet
        </span>
      }
      open={open}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="confirm" type="primary" loading={confirming} onClick={handleConfirm}>
          Confirm
        </Button>,
      ]}
      destroyOnHidden
      maskClosable={false}
    >
      <div style={{ marginBottom: 16 }}>
        <div style={{ marginBottom: 8 }}>Address index:</div>
        <InputNumber
          min={0}
          value={index}
          onChange={handleIndexChange}
          style={{ width: '100%' }}
          disabled={loading}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8 }}>Signing with:</div>
        <div
          style={{
            padding: 12,
            background: 'var(--ant-color-fill-quaternary)',
            borderRadius: 6,
            fontFamily: 'monospace',
            wordBreak: 'break-all',
          }}
        >
          {addressDisplay}
        </div>
      </div>
    </Modal>
  );
};
