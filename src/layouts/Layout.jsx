import { Box } from '@mui/material';
import { Sidebar } from './sidebar/sidebar';
import { LayoutHeader } from './layoutHeader/layoutHeader';
import { WrapperPageBg } from '../components/wrapperPageBg';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '260px 1fr',
        minHeight: '100vh',
      }}
    >
      <Sidebar />
      <WrapperPageBg>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <LayoutHeader />
          <Box
            sx={{ flex: 1, p: 4 }}>
            {children}
          </Box>
        </Box>
      </WrapperPageBg>
    </Box>
  );
};

export default Layout;