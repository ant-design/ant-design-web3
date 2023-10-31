import { ConfigContext } from 'antd/es/config-provider';
import useStyle from './style';
import type { ReactNode } from 'react';
import React from 'react';
import classNames from 'classnames';
import { Button, Divider } from 'antd';

const customizePrefixCls = 'ant-nft-card';

interface NFTCardProps {
  actionText?: ReactNode;
  className?: string;
  image: string | ReactNode;
  price?: number;
  footer?: ReactNode;
  isLike?: boolean;
  likes?: number;
  name?: string;
  serialNumber?: number;
  style?: React.CSSProperties;
  showAction?: boolean;
  type?: 'default' | 'pithy';
  onLikeChange?: (isLike: boolean) => void;
  onActionChange?: () => void;
}

const NFTCard: React.FC<NFTCardProps> = ({
  style,
  className,
  type = 'default',
  image,
  name,
  serialNumber,
  price = 0,
  likes = 0,
  showAction,
  actionText = 'Buy Now',
  footer,
}) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('nft-card', customizePrefixCls);
  //================== Style ==================
  const [wrapSSR, hashId] = useStyle(prefixCls);
  const mergeCls = classNames(
    `${prefixCls}-container`,
    {
      [`${prefixCls}-pithy`]: type === 'pithy',
    },
    className,
    hashId,
  );

  return wrapSSR(
    <div className={mergeCls} style={style}>
      <div className={`${prefixCls}-inner`}>
        <div className={`${prefixCls}-content`}>
          {type !== 'pithy' && serialNumber !== undefined ? (
            <div className={`${prefixCls}-serial-number`}>{`#${serialNumber}`}</div>
          ) : null}
          {typeof image === 'string' ? <img width="100%" height="100%" src={image} /> : image}
        </div>
        <div className={`${prefixCls}-body`}>
          {name ? <div className={`${prefixCls}-name`}>{name}</div> : null}
          <div className={`${prefixCls}-info`}>
            <div className={`${prefixCls}-price`}>
              <div className={`${prefixCls}-price-icon`} />
              <span className={`${prefixCls}-price-value`}>{price}</span>
              <span className={`${prefixCls}-price-unit`}>ETH</span>
            </div>
            <div className={`${prefixCls}-likes`}>
              <div className={`${prefixCls}-like-icon`} />
              <span className={`${prefixCls}-like-value`}>{likes}</span>
            </div>
          </div>
          {showAction ? (
            <div className={`${prefixCls}-action`}>
              <Button
                style={{
                  width: '100%',
                }}
              >
                {actionText}
              </Button>
            </div>
          ) : null}
          {footer ? (
            <div className={`${prefixCls}-footer`}>
              <Divider dashed />
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>,
  );
};

export default NFTCard;
