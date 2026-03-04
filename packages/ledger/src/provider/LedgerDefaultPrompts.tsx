import { useContext, type ComponentType, type FC } from 'react';

import type { LedgerAddressIndexModalProps } from './LedgerAddressIndexModal';
import { LedgerAddressIndexModal } from './LedgerAddressIndexModal';
import {
  LedgerContext,
  useLedgerActions,
  useLedgerInstance,
  useLedgerUSBStatus,
} from './LedgerContext';
import type {
  DeviceSelectModalOption,
  LedgerDeviceSelectModalProps,
} from './LedgerDeviceSelectModal';
import { LedgerDeviceSelectModal } from './LedgerDeviceSelectModal';

export interface LedgerDefaultPromptsProps {
  /** 自定义地址选择弹窗 */
  addressIndexModal?: ComponentType<LedgerAddressIndexModalProps>;
  /** 自定义设备选择弹窗；同 Provider 的 deviceSelectModal */
  deviceSelectModal?: DeviceSelectModalOption;
}

/**
 * 根据 phase 渲染默认的设备选择、地址选择弹窗。
 * 消费层可将此组件作为 LedgerWeb3ConfigProvider 的子节点使用，以恢复原有的自动弹窗行为。
 * Modal 组件优先使用 props，其次使用 Provider 传入的，最后使用默认组件。
 */
export const LedgerDefaultPrompts: FC<LedgerDefaultPromptsProps> = ({
  addressIndexModal: addressIndexModalProp,
  deviceSelectModal: deviceSelectModalProp,
}) => {
  const ctxValue = useContext(LedgerContext);

  const { phase, pendingDevices } = useLedgerUSBStatus();
  const { selectDevice, confirmAddress, cancelConnect, discoverMore } = useLedgerActions();
  const ledger = useLedgerInstance();

  const deviceSelectValue = deviceSelectModalProp ?? ctxValue?.deviceSelectModal;
  const DeviceSelectModalComponent =
    deviceSelectValue === true
      ? LedgerDeviceSelectModal
      : typeof deviceSelectValue === 'function'
        ? deviceSelectValue
        : LedgerDeviceSelectModal;
  const AddressIndexModalComponent =
    addressIndexModalProp ?? ctxValue?.addressIndexModal ?? LedgerAddressIndexModal;

  return (
    <>
      <DeviceSelectModalComponent
        open={phase === 'multiple_devices'}
        devices={pendingDevices ?? []}
        onSelect={selectDevice}
        onCancel={cancelConnect}
        onDiscover={discoverMore}
      />
      <AddressIndexModalComponent
        open={phase === 'selecting_address'}
        ledger={ledger}
        onConfirm={confirmAddress}
        onCancel={cancelConnect}
      />
    </>
  );
};
