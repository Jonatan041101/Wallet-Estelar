import { getRandomProfile } from '@/utils/profiles';
import { useEffect, useState } from 'react';

export default function useProfile() {
  const [profile, setProfile] = useState<string>('');
  useEffect(() => {
    const profileGenerate = getRandomProfile();
    setProfile(profileGenerate);
  }, []);
  return {
    profile,
  };
}
