const Element = ({ user }) => {
  console.log(user);
  const { userName } = user;
  return (
    <div>
      <p>{userName}</p>
    </div>
  );
};

export default Element;
