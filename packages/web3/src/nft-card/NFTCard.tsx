import type { PropsWithChildren, ReactNode } from 'react';
import React, { useState } from 'react';
import Icon from '@ant-design/icons';
import {
  getWeb3AssetUrl,
  parseNumberToBigint,
  type Locale,
  type Web3ConfigProviderProps,
} from '@ant-design/web3-common';
import type { ImageProps } from 'antd';
import { Button, ConfigProvider, Divider, Image, Result, Skeleton, Space, theme } from 'antd';
import classNames from 'classnames';

import { CryptoPrice, type CryptoPriceProps } from '../crypto-price';
import useIntl from '../hooks/useIntl';
import useNFT from '../hooks/useNFT';
import { formatNumUnit, isDarkTheme } from '../utils/tool';
import HeartFilledSvg from './icons/heart-filled.svg';
import HeartSvg from './icons/heart.svg';
import { useStyle } from './style';

const customizePrefixCls = 'ant-web3-nft-card';

const { useToken } = theme;

interface NFTCardProps {
  address?: string;
  tokenId?: number | bigint;
  getNFTMetadata?: Web3ConfigProviderProps['getNFTMetadata'];
  actionText?: ReactNode;
  antdImageProps?: ImageProps;
  className?: string;
  description?: ReactNode;
  image?: string | ReactNode;
  like?: {
    liked?: boolean;
    totalLikes?: number;
    onLikeChange?: (isLike: boolean) => void;
  };
  price?: CryptoPriceProps;
  footer?: ReactNode;
  name?: string;
  style?: React.CSSProperties;
  showAction?: boolean;
  type?: 'default' | 'pithy';
  onActionClick?: () => void;
  locale?: Locale['NFTCard'];
  errorRender?: (e: Error) => ReactNode;
}

const CardSkeleton: React.FC<PropsWithChildren<{ loading: boolean; prefixCls: string }>> = ({
  children,
  loading,
  prefixCls,
}) => {
  if (loading) {
    return (
      <Space direction="vertical" className={classNames(`${prefixCls}-wrap`)}>
        <Skeleton.Image active className={`${prefixCls}-content`} />
        <Skeleton active className={`${prefixCls}-body`} />
        <Skeleton.Button block active className={`${prefixCls}-button`} />
        <Divider dashed style={{ marginBlock: 0 }} />
        <Skeleton.Input active className={`${prefixCls}-footer`} />
      </Space>
    );
  }
  return <>{children}</>;
};

const NFTCard: React.FC<NFTCardProps> = (props) => {
  const {
    style,
    antdImageProps,
    className,
    type = 'default',
    address,
    tokenId,
    price,
    like: likeConfig,
    showAction,
    actionText,
    footer,
    onActionClick,
    getNFTMetadata,
    locale,
    errorRender,
    ...metadataProps
  } = props;
  const { liked = false, totalLikes = 0, onLikeChange } = likeConfig || {};
  const { token } = useToken();
  const { metadata, loading, error } = useNFT(
    address,
    parseNumberToBigint(tokenId),
    getNFTMetadata,
  );
  const {
    name = metadata?.name,
    image = metadata?.image,
    description = metadata?.description,
  } = metadataProps;
  const { messages } = useIntl('NFTCard', locale);
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('nft-card', customizePrefixCls);
  //================== Style ==================
  const { wrapSSR, hashId } = useStyle(prefixCls);
  const mergeCls = classNames(
    `${prefixCls}-container`,
    {
      [`${prefixCls}-pithy`]: type === 'pithy',
      [`${prefixCls}-theme-dark`]: isDarkTheme(token),
    },
    className,
    hashId,
  );

  const [like, setLike] = useState(liked);

  const handleLikeChange = () => {
    const likeValue = !like;
    setLike(likeValue);
    onLikeChange?.(likeValue);
  };

  const iconLikeGroup = (
    <div
      className={`${prefixCls}-like-icon-group`}
      style={{
        position: 'absolute',
        top: 5,
        right: -2,
      }}
    >
      <Icon component={HeartFilledSvg} />
      <Icon
        component={HeartFilledSvg}
        style={{
          transform: 'scale(0.4)',
          position: 'absolute',
          right: -8,
          top: -12,
        }}
      />
      <Icon
        component={HeartFilledSvg}
        style={{
          transform: 'scale(0.3)',
          position: 'absolute',
          right: 10,
          top: -16,
        }}
      />
    </div>
  );

  const content = (
    <>
      <div className={`${prefixCls}-content`}>
        {type !== 'pithy' && tokenId !== undefined && (
          <div className={`${prefixCls}-serial-number`}>{`#${tokenId}`}</div>
        )}
        {typeof image === 'string' ? (
          <Image
            width="100%"
            style={{ imageRendering: 'pixelated' }}
            src={getWeb3AssetUrl(image)}
            {...antdImageProps}
            fallback="data:image/png;base64,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"
          />
        ) : (
          image
        )}
      </div>
      <div className={`${prefixCls}-body`}>
        {tokenId !== undefined && type === 'pithy' && (
          <div className={`${prefixCls}-serial-number`}>No:{tokenId.toString()}</div>
        )}
        {name && <div className={`${prefixCls}-name`}>{name}</div>}
        {description && <div className={`${prefixCls}-description`}>{description}</div>}
        <div className={`${prefixCls}-info`}>
          {price && (
            <div className={`${prefixCls}-price`}>
              <CryptoPrice {...price} />
            </div>
          )}
          {likeConfig && (
            <div className={`${prefixCls}-likes`}>
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: by design */}
              <div
                className={classNames(`${prefixCls}-like-icon`, {
                  [`${prefixCls}-like-icon-liked`]: like,
                })}
                onClick={handleLikeChange}
              >
                {iconLikeGroup}
                {!like && (
                  <Icon component={HeartSvg} className={`${prefixCls}-like-icon-icon-heart`} />
                )}
              </div>
              <span className={`${prefixCls}-like-value`}>{formatNumUnit(totalLikes)}</span>
            </div>
          )}
        </div>
        {showAction && (
          <div className={`${prefixCls}-action`}>
            <Button onClick={onActionClick}>{actionText ?? messages.actionText}</Button>
          </div>
        )}
        {footer && (
          <div className={`${prefixCls}-footer`}>
            <Divider dashed />
            {footer}
          </div>
        )}
      </div>
    </>
  );

  const renderContent = () => {
    if (error) {
      return errorRender?.(error) || <Result status="warning" subTitle={error.message} />;
    }
    return content;
  };

  return wrapSSR(
    <div className={mergeCls} style={style}>
      <div className={`${prefixCls}-inner`}>
        <CardSkeleton prefixCls={`${prefixCls}-skeleton`} loading={loading}>
          {renderContent()}
        </CardSkeleton>
      </div>
    </div>,
  );
};

export default NFTCard;
