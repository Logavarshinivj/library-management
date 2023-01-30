import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


export function Counter() {
  const [like, SetLike] = useState(0);
  const [dislike, SetDislike] = useState(0);
  return (
    <div>
      <IconButton onClick={() => SetLike(like + 1)} color="primary">
      <Badge badgeContent={like}  color="primary">👍
      </Badge>

      </IconButton>
     
      <IconButton onClick={() => SetDislike(dislike + 1)} color="error">
      <Badge badgeContent={dislike}  color="error">👍
      </Badge>
      </IconButton>
    </div>
  );
}
