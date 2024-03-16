function SimpleInput({content, handleChange}) {
  return (
    <>
      <form>
        <label>
          Write Something:
          <input value={content} onChange={handleChange} />
        </label>
      </form>
    </>
  );
};

export default SimpleInput;