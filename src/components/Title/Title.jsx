const Title = ({ className, title, description }) => {
  return (
    <div className={className}>
      <h2 className="color-dark-blue-900">{title}</h2>
      <p className="color-gray-blue my-4">{description}</p>
    </div>
  );
};

export default Title;
