import Layout from "../components/layout/Layout";
import { Box, styled, Typography } from "@mui/material";
import ManageList from "../components/campagin/ManageList";

const AdManage = () => {
  return (
    <Layout>
      <StyledContents>
        <Typography variant="h6" sx={{ mb: 2 }}>
          광고관리
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <ManageList />
        </Box>
      </StyledContents>
    </Layout>
  );
};

export default AdManage;

const StyledContents = styled(Box)({
  paddingBlock: 50,
  paddingInline: 40,
});