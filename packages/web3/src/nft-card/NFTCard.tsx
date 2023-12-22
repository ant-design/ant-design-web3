import { useStyle } from './style';
import type { PropsWithChildren, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import type { ImageProps } from 'antd';
import { Button, Divider, Image, ConfigProvider, Space, Skeleton } from 'antd';
import Icon from '@ant-design/icons';
import useNFT from '../hooks/useNFT';
import HeartSvg from './icons/heart.svg';
import HeartFilledSvg from './icons/heart-filled.svg';
import useToken from 'antd/es/theme/useToken';
import { formatNumUnit, isDarkTheme } from '../utils/tool';
import {
  parseNumberToBigint,
  getWeb3AssetUrl,
  type Web3ConfigProviderProps,
} from '@ant-design/web3-common';
import { CryptoPrice, type CryptoPriceProps } from '../crypto-price';

const customizePrefixCls = 'ant-nft-card';

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

const NFTCard: React.FC<NFTCardProps> = ({
  style,
  antdImageProps,
  className,
  type = 'default',
  address,
  tokenId,
  price,
  like: likeConfig,
  showAction,
  actionText = 'Buy Now',
  footer,
  onActionClick,
  getNFTMetadata,
  ...metadataProps
}) => {
  const { liked, totalLikes = 0, onLikeChange } = likeConfig || {};
  const [, token] = useToken();
  const { metadata, loading } = useNFT(address, parseNumberToBigint(tokenId), getNFTMetadata);
  const {
    name = metadata.name,
    image = metadata.image,
    description = metadata.description,
  } = metadataProps;
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

  const [like, setLike] = useState(false);

  const handleLikeChange = () => {
    const likeValue = !like;
    if (liked === undefined) {
      setLike(likeValue);
    }
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

  useEffect(() => {
    if (liked !== undefined) {
      setLike(liked);
    }
  }, [liked]);

  const content = (
    <>
      <div className={`${prefixCls}-content`}>
        {type !== 'pithy' && tokenId !== undefined ? (
          <div className={`${prefixCls}-serial-number`}>{`#${tokenId}`}</div>
        ) : null}
        {typeof image === 'string' ? (
          <Image width="100%" src={getWeb3AssetUrl(image)} {...antdImageProps} />
        ) : (
          image
        )}
      </div>
      <div className={`${prefixCls}-body`}>
        {tokenId !== undefined && type === 'pithy' ? (
          <div className={`${prefixCls}-serial-number`}>No:{tokenId.toString()}</div>
        ) : null}
        {name ? <div className={`${prefixCls}-name`}>{name}</div> : null}
        {description ? <div className={`${prefixCls}-description`}>{description}</div> : null}
        <div className={`${prefixCls}-info`}>
          {price ? (
            <div className={`${prefixCls}-price`}>
              <CryptoPrice {...price} />
            </div>
          ) : null}
          {likeConfig ? (
            <div className={`${prefixCls}-likes`}>
              <div
                className={classNames(`${prefixCls}-like-icon`, {
                  [`${prefixCls}-like-icon-liked`]: like,
                })}
                onClick={handleLikeChange}
              >
                {iconLikeGroup}
                {!like ? (
                  <Icon component={HeartSvg} className={`${prefixCls}-like-icon-icon-heart`} />
                ) : null}
              </div>
              <span className={`${prefixCls}-like-value`}>{formatNumUnit(totalLikes)}</span>
            </div>
          ) : null}
        </div>
        {showAction ? (
          <div className={`${prefixCls}-action`}>
            <Button onClick={onActionClick}>{actionText}</Button>
          </div>
        ) : null}
        {footer ? (
          <div className={`${prefixCls}-footer`}>
            <Divider dashed />
            {footer}
          </div>
        ) : null}
      </div>
    </>
  );

  return wrapSSR(
    <div className={mergeCls} style={style}>
      <div className={`${prefixCls}-inner`}>
        <CardSkeleton prefixCls={`${prefixCls}-skeleton`} loading={loading}>
          {content}
        </CardSkeleton>
      </div>
    </div>,
  );
};

export default NFTCard;
