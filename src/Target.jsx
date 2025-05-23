function Target({ target, onClick }) {
  return (
    <div
      className="target"
      onClick={() => onClick(target)}
      style={{
        backgroundColor: target.color,
        radius: target.radius,
        borderRadius: target.shape === 'circle' ? '50%' : '0%',
      }}
    >
      {target.name}
    </div>
  );
}