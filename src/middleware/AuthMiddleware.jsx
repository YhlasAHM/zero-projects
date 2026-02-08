
import Layout from '../layouts/Layout'

export default function AuthMiddleware({ children }) {
  /* const navigate = useNavigate();

  const renewAccessToken = async () => {
    try {
      const response = await renewAccessTokenApi();

      if (response.status === 200) {
        localStorage.setItem('accessToken', hdlResData(response, 'accessToken'));
      }
    } catch (error) {
      console.error('Failed to renew access token: ', error);
    };
  };

  useEffect(() => {
    async function checkAuth() {
      try {
        const refreshToken = Cookies.get('refreshToken');
        if (!refreshToken) {
          navigate('/login');
        } else {
          const accessToken = localStorage.getItem('accessToken');

          if (accessToken) {
            const decodedAccessToken = jwtDecode(accessToken);
            const currentTime = Date.now() / 1000;
            const accessTokenExpireTime = decodedAccessToken.exp;

            if (currentTime > accessTokenExpireTime) {
              console.log('Access token expired.');
              await renewAccessToken();
            }
          }
        }
      } catch (error) {
        console.error('Failed to check auth: ', error);
      };
    };
    checkAuth();
  }, []); */

  return (
    <Layout>
      {children}
    </Layout>
  );
};