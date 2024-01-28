import Bias from "../components/Setting/Bias";
import Nickname from "../components/Setting/Nickname";
import WishCard from "../components/Setting/WishCard";
import LatestPost from "../components/PostList/LatestPost";
import MyPost from "../components/PostList/MyPost";
import { Container } from '@mui/material';

// 마이페이지
const profile = () => {
    return (
        <Container id='profile-page'>
            <Nickname/>
            <Bias/>
            <WishCard/>
            <LatestPost/>
            <MyPost/>
        </Container>
    );
};

export default profile;