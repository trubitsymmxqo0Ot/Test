const AUser = ({ onDelete, user }) => {
  return (
    <div data-testid="user-item">
      {user.name}
      <button id="user-delete" onClick={() => onDelete(user.id)}>
        delete
      </button>
    </div>
  );
};

AUser.displayName = 'AUser';
export default AUser;