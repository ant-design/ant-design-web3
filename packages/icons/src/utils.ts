// for fix https://github.com/ant-design/ant-design-web3/issues/1056
export function eraseDefaultProps(svgComponent: React.FC): React.FC {
  const defaultProps = svgComponent.defaultProps;
  return (props) => {
    const newProps = { ...defaultProps, ...props };
    return svgComponent(newProps);
  };
}
