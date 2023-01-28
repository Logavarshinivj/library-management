import { useState } from 'react';


export function Counter() {
  const [like, SetLike] = useState(0);
  const [dislike, SetDislike] = useState(0);
  return (
    <div>
      <button onClick={() => SetLike(like + 1)}>👍{like}</button>
      <button onClick={() => SetDislike(dislike + 1)}>👎{dislike}</button>
    </div>
  );
}
