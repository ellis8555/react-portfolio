function CommentInput() {
  return (
    <>
      <div className="mt-8 flex flex-col gap-2">
        <label className="text-info" htmlFor="comment">
          Comment:
        </label>
        <div className="w-full">
          <textarea
            id="comment"
            className="rounded-md p-2 text-black text-lg w-full xl: w-3/4 focus:outline-blue-500"
            name="comment"
            placeholder="Drop me a comment or leave some feedback"
            rows="10"
          ></textarea>
          <div className="text-slate-500 text-sm" id="commentHelp">
            <p>Between 8 - 250 characters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentInput;
