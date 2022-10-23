import useUser from "../hooks/useUser"

export default function Login() {
  const { loginUser } = useUser();
  loginUser({username: 'admin', email: 'admin@admin.com'});
  return (
    <>
      <h1>LOGIN</h1>
    </>
  )
}