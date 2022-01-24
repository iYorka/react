import styles from './commentform.module.css';
import {ChangeEvent, FormEvent} from "react";

type Props = {
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  onSubmit: (event: FormEvent) => void
}

export function CommentForm({value, onChange, onSubmit}: Props) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <textarea className={styles.input} value={value} onChange={onChange}/>
      <button type="submit" className={styles.button}> send comment</button>
    </form>
  )
}