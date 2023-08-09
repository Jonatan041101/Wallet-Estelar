import { useRouter } from 'next/navigation';

type Routes = '/wallet' | '/';
export default function useNavigate() {
  const router = useRouter();
  const handleNavigate = (routes: Routes) => {
    router.push(routes);
  };
  return { handleNavigate };
}
