
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Triluxo Technologies Private limited</Typography>
                <Text variant="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/harshguptaji" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
                <Text variant="h5">
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;