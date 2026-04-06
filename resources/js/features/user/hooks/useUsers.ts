import { useState, useEffect } from 'react';
import { usersService } from '../services/usersService';
import type { User } from '../types/userTypes';

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
        setLoading(true);
        try{
            const response = await usersService.all();
            setUsers(response);
        }finally{
            setLoading(false);
        }
    };

    fetch();
  }, []);

  return {
    users,
    loading,
  };
};