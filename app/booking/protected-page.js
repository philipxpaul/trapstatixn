import { useAuth } from '../hooks/useAuth';

export default function ProtectedPage() {
  const { user } = useAuth();

  if (!user) {
    return null; // Optional: Add a loading spinner here
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome, {user.phoneNumber}</h1>
    </div>
  );
}