import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Body from '../components/Body';
import Section from '../components/Section';
import { Box } from '@mui/material';

/**
 * Display the layout of the page
 * @returns {React.ReactNode} Layout component
 */
export default function Layout() {

  return (
    <>
      <Header />
      <Body>
        <Box
          height={200}
          sx={{
            background: 'white'
          }}
        >
          <Section
            title="section 1"
          >
            <p>content of section here</p>
          </Section>
        </Box>
        <Box
          height={200}
          sx={{
            background: 'white',
          }}
        >
          <Section
            title="section 2"
          >
            <p>content of section here</p>
          </Section>
        </Box>
        <Box
          sx={{
            background: 'white',
          }}
        >
          <Section
            title="section 3"
          >
            <p>content of section here</p>
          </Section>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          gap={'200px'}
          sx={{
            background: 'linear-gradient(0deg, #071520 30%, #0D2D45 90%)',
          }}
        >
          <Section
            title="section 4"
          >
            <p>content of section here</p>
          </Section>
          <Section
            title="section 5"
          >
            <p>content of section here</p>
          </Section>
          <Section
            title="section 6"
          >
            <p>content of section here</p>
          </Section>
          <Section
            title="section 7"
          >
            <p>content of section here</p>
          </Section>
        </Box>
      </Body>

      <Footer />
    </>

  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}