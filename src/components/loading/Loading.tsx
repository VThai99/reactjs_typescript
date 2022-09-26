interface loadType{
  size: Number
}
const Loading: React.FC<loadType> = ({ size}) => {
  return (
    <div
      className="lds-default"
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
