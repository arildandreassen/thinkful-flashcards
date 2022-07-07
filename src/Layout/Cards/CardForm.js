const CardForm = ({
  handleChange,
  handleSubmit,
  handleCancelClick,
  formData,
}) => {
  return (
    <form className="createForm" onSubmit={handleSubmit}>
      <label>Front</label>
      <textarea
        type="text"
        name="front"
        placeholder="Front side of card"
        onChange={handleChange}
        value={formData.front}
        required={true}
      ></textarea>
      <label>Back</label>
      <textarea
        type="text"
        name="back"
        placeholder="Back side of card"
        onChange={handleChange}
        value={formData.back}
        required={true}
      ></textarea>
      <div>
        <button
          type="cancel"
          onClick={handleCancelClick}
          className="btn btn-secondary"
        >
          Done
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default CardForm;
