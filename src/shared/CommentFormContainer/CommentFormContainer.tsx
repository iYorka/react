import {useDispatch, useSelector} from "react-redux";
import {ChangeEvent, FormEvent} from "react";
import {RootState, updateComment} from "../../store";
import {CommentForm} from "../CommmentForm/CommentForm";


export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value)
  }

  return (
    <CommentForm
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />

  )
}

