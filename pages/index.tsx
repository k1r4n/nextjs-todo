// import Link from 'next/link';
import {List} from './list';
import userList from './list.json';
import React, {useState} from 'react';

interface User {
  id: number,
  email: string,
  avatar: string,
  firstName: string,
  lastName: string,
}

type Users = User[];

const App: React.FunctionComponent = () => {
  const [users] = useState<Users>(userList);
  return <List users={users} />
}

export default App;